import * as getData from '../api/getData';
import {
  FETCH_PATIENT_LIST,
  FETCH_ORDER_LIST,
  OPEN_LOADING,
  CLOSE_LOADING,
} from './actionTypes';

export const fetchPatientList = () => (dispatch) => {
  return getData.fetchPatients().then((res) => {
    const { patients } = res.data;
    dispatch({ type: FETCH_PATIENT_LIST, payload: patients });
  });
};

export const fetchOrderList = () => (dispatch) => {
  return getData.fetchOrders().then((res) => {
    const { orders } = res.data;
    dispatch({ type: FETCH_ORDER_LIST, payload: orders });
  });
};

export const patchPatientOrders = (patientId, ordersById) => (dispatch) => {
  return getData.patchPatientOrders(patientId, ordersById)
    // .then((res) => {
    //   console.log(res.data);
    // })
};

export const openLoading = () => ({
  type: OPEN_LOADING,
});

export const closeLoading = () => ({
  type: CLOSE_LOADING,
});
