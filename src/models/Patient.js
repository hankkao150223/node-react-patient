const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
  Id: String,
  Name: String,
  // OrderId:
});

mongoose.model('patients', patientSchema);
