const apiPatientRoute = require('./api/patientRoute');
const apiOrderRoute = require('./api/orderRoute');

module.exports = (app) => {
  app.use('/api/patient', apiPatientRoute);
  app.use('/api/order', apiOrderRoute);
};
