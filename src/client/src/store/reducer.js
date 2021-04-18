import {
  FETCH_PATIENT_LIST,
  FETCH_ORDER_LIST,
  OPEN_LOADING,
  CLOSE_LOADING,
} from './actionTypes';

const defaultState = {
  loading: false,
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
    case OPEN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLOSE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
