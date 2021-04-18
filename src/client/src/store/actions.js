import * as getData from '../api/getData';
import {
  FETCH_PATIENT_LIST,
  FETCH_ORDER_LIST
} from './actionTypes';

export const fetchPatientList = () => (dispatch) => {
  getData.fetchPatients().then((res) => {
    const { patients } = res.data;
    dispatch({ type: FETCH_PATIENT_LIST, payload: patients });
  });
};

export const fetchOrderList = () => (dispatch) => {
  getData.fetchOrders().then((res) => {
    const { orders } = res.data;
    dispatch({ type: FETCH_ORDER_LIST, payload: orders });
  });
};
