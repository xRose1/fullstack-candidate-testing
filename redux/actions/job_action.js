import axios from 'axios';
import {
    JOB_LIST,
    JOB_FILTER
} from './types';

const ROOT_URL = process.env.API_URI || 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;

export function getJobs() {
  return function (dispatch) {
    axios
      .get(`/jobs`)
      .then(res => {
          dispatch({type: JOB_LIST, payload: res.data})
      })
      .catch(error => {
          console.log(error);
      });
  }
}

export function getJobFilter() {
  return function (dispatch) {
    axios
      .get(`/jobs/filter`)
      .then(res => {
        console.log(res.data);
          dispatch({type: JOB_FILTER, payload: res.data})
      })
      .catch(error => {
          console.log(error);
      });
  }
}

const request = axios;
export { request };