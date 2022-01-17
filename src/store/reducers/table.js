import { SAVE_TABLE } from '../types';

const defaultState = {
  service: [],
  purchase: [],
  source: [],
  logistics: [],
  effectiveness: [],
  abnormal: [],
  overview: {
    sum1: 0,
    sum2: 0,
    sum3: 0,
    sum4: 0,
    sum5: 0,
  },
  prescription: {
    area: {},
    category: {},
    office: {},
    customer: {},
  },
  default: {
    leftTop: [],
    leftMid: [],
    leftBottom: [],
    centerBottom: [],
    rightTop: [],
    rightBottom: [],
  },
};

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
