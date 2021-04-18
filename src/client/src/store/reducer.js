import {
  FETCH_PATIENT_LIST,
  FETCH_ORDER_LIST,
} from './actionTypes';

const defaultState = {
  patients: [],
  orders: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PATIENT_LIST:
      return {};
    case FETCH_ORDER_LIST:
      return {};
    default: return state;
  }
};

export default reducer;
