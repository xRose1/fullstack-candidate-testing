import { action } from 'typesafe-actions';
import { RepositoriesTypes, Filter } from './types';

export const loadFilterRequest = (): any => action(RepositoriesTypes.LOAD_FILTER_REQUEST);
export const loadFilterSucess = (data: Filter[]): any => action(RepositoriesTypes.LOAD_FILTER_SUCCESS, { data });
export const loadFilterFailure = (): any => action(RepositoriesTypes.LOAD_FILTER_FAILURE);

export const loadJobsRequest = (): any => action(RepositoriesTypes.LOAD_JOB_REQUEST);
export const loadJobsSucess = (data: Filter[]): any => action(RepositoriesTypes.LOAD_JOB_SUCCESS, { data });
export const loadJobsFailure = (): any => action(RepositoriesTypes.LOAD_JOB_FAILURE);
