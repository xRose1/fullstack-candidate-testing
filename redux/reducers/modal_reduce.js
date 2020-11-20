import {
  MODAL,
} from '../actions/types';

let INITIAL_STATE = {
  show_modal: 'hidden',
  title_modal: 'This is Title',
  text_modal: [],
}

const Modal = (state=INITIAL_STATE, action) => {
  switch (action.type) {
      case MODAL:
        return { ...state, show_modal: action.payload['show_modal'], title_modal: action.payload['title_modal'], text_modal: action.payload['text_modal'] }
      default:
          return state
  }
}

export default Modal;