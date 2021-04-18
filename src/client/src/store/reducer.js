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
      return {
        ...state,
        patients: action.payload,
      };
    case FETCH_ORDER_LIST:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
