import { SAVE_NODE } from '../types';

const defaultState = {
  id: 'node0',
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
