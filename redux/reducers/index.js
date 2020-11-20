import { combineReducers } from 'redux';
import modal from './modal_reduce';
import job from './job_reducer';

const rootReducer = combineReducers({
  modal,
  job,
});

export default rootReducer;
