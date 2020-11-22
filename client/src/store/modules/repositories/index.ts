import { AnyAction, Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  filters: {
    job_type: [],
    work_schedule: [],
    experience: [],
    department: [],
  },
  jobs: [],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state: RepositoriesState = INITIAL_STATE, action: AnyAction): any => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_FILTER_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_FILTER_SUCCESS:
      return { ...state, loading: false, error: false, filters: action.payload.data };
    case RepositoriesTypes.LOAD_FILTER_FAILURE:
      return { ...state, loading: false, error: true, filters: [] };
    case RepositoriesTypes.LOAD_JOB_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_JOB_SUCCESS:
      return { ...state, loading: false, error: false, jobs: action.payload.data };
    case RepositoriesTypes.LOAD_JOB_FAILURE:
      return { ...state, loading: false, error: true, filters: [] };
    default:
      return state;

  }
};

export default reducer;
