const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
  Id: mongoose.Schema.Types.ObjectId,
  Name: String,
  // OrderId:
});

mongoose.model('patients', patientSchema);
