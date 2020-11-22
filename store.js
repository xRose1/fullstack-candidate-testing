import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { prepareFilteredJobsView } from './middleware/utils';

let store

const initialState = {
  jobs: [],
  filteredJobs: [],
  orderBy: "location",
  searchQuery: "",
  status: "loading",
  lastUpdate: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'jobs/loaded':
      return {
        ...state,
        jobs: action.jobs,
        filteredJobs: action.jobs,
        lastUpdate: action.lastUpdate
      }
    case 'jobs/sortBy':
      console.log( `jobs/sortBy: ${action.orderBy}`);
      return {
        ...state,
        orderBy: action.orderBy,
        filteredJobs: prepareFilteredJobsView(state.jobs, state.searchQuery, action.orderBy),
      }
      case 'jobs/searchKeyword':
        console.log( `jobs/searchKeyword: ${action.searchQuery}`);
        return {
          ...state,
          searchQuery: action.searchQuery,
          filteredJobs: prepareFilteredJobsView(state.jobs, action.searchQuery, state.orderBy),
        }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}