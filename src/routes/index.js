const apiPatientRoute = require('./api/patientRoute');

module.exports = (app) => {
  app.use('/api/patient', apiPatientRoute);
};
