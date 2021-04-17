const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
});

mongoose.model('patients', patientSchema);
