import http from '../config/http';

export const fetchPatients = () => http.get('/api/patient');
export const fetchOrders = () => http.get('/api/order');
export const patchPatientOrders = (patientId, ordersById) => http.patch(`/api/patient/${patientId}/order`, {
  orders: ordersById,
});
