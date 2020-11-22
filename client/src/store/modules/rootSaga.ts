import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { loadFilters, loadJobs } from './repositories/sagas';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_FILTER_REQUEST, loadFilters),
    takeLatest(RepositoriesTypes.LOAD_FILTER_REQUEST, loadJobs),
  ]);
}
