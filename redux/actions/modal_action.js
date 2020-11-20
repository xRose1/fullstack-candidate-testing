import axios from 'axios';
import {
    MODAL
} from './types';

export function setModal(show_modal='hidden', title_modal='', text_modal=[]) {
  const modal_data = {
    show_modal: show_modal,
    title_modal: title_modal,
    text_modal: text_modal,
  }
  return function (dispatch) {
    dispatch({type: MODAL, payload: modal_data})
  }
}

const request = axios;
export { request };