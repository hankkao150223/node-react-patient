const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  message: String,
});

mongoose.model('orders', orderSchema);
