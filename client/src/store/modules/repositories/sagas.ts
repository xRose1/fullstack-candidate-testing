import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFilterFailure, loadFilterSucess, loadJobsFailure, loadJobsSucess } from './actions';

export function* loadFilters() {
  try {
    const response = yield call(api.get, 'filters');
    yield put(loadFilterSucess(response.data));
  } catch(error) {
    yield put(loadFilterFailure());
  }
}
export function* loadJobs() {
  try {
    const response = yield call(api.get, 'jobs');
    yield put(loadJobsSucess(response.data));
  } catch(error) {
    yield put(loadJobsFailure());
  }
}