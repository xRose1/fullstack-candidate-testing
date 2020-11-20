import { action } from 'typesafe-actions';
import { RepositoriesTypes, Filter } from './types';

export const loadFilterRequest = () => action(RepositoriesTypes.LOAD_FILTER_REQUEST);
export const loadFilterSucess = (data: Filter[]) => action(RepositoriesTypes.LOAD_FILTER_SUCCESS, { data });
export const loadFilterFailure = () => action(RepositoriesTypes.LOAD_FILTER_FAILURE);

export const loadJobsRequest = () => action(RepositoriesTypes.LOAD_JOB_REQUEST);
export const loadJobsSucess = (data: Filter[]) => action(RepositoriesTypes.LOAD_JOB_SUCCESS, { data });
export const loadJobsFailure = () => action(RepositoriesTypes.LOAD_JOB_FAILURE);
