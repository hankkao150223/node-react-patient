const mongoose = require('mongoose');
const colors = require('colors');

const Order = mongoose.model('orders');

module.exports = async () => {
  try {
    await Order.deleteMany({})
    console.log(colors.info('clear order done'));
  } catch (err) {
    console.log(colors.error(err.message))
  }
};
