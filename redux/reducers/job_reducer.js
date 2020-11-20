import {
  JOB_LIST,
  JOB_FILTER
} from '../actions/types';

let INITIAL_STATE = {
  jobs: [],
  job_filter: {}
}

const reducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
      case JOB_LIST:
          return { ...state, jobs: action.payload.jobs }
      case JOB_FILTER:
        console.log(action.payload)
        return { ...state, job_filter: action.payload.filter }
      default:
          return state
  }
}

export default reducer
