import { SAVE_TABLE } from '../types';
import table from '../../../mock/table';
const defaultState = table();

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_TABLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
