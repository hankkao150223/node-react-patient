import http from '../config/http';

export const fetchPatients = () => http.get('/api/patient');
export const fetchOrders = () => http.get('/api/order');
