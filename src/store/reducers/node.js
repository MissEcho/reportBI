import { SAVE_NODE } from '../types';

const defaultState = {
  type: '',
  name: '',
  text: 'default',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_NODE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
