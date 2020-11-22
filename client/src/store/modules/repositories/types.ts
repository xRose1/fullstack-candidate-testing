export enum RepositoriesTypes {
  LOAD_FILTER_REQUEST = '@repositories/LOAD_FILTER_REQUEST',
  LOAD_FILTER_SUCCESS = '@repositories/LOAD_FILTER_SUCCESS',
  LOAD_FILTER_FAILURE = '@repositories/LOAD_FILTER_FAILURE',

  LOAD_JOB_REQUEST = '@repositories/LOAD_JOB_REQUEST',
  LOAD_JOB_SUCCESS = '@repositories/LOAD_JOB_SUCCESS',
  LOAD_JOB_FAILURE = '@repositories/LOAD_JOB_FAILURE',
}

export interface Filter {
  key: string;
  doc_count: string;
}

export interface RepositoriesState {
  readonly filters: any;
  readonly jobs: any;
  readonly loading: boolean;
  readonly error: boolean;
}
