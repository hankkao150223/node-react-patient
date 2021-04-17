const mongoose = require('mongoose');
const colors = require('colors');

const Order = mongoose.model('orders');

module.exports = async () => {
  try {
    const orders = [
      '超過120請施打8u',
      '病患需多活動身體',
      '懷疑為急性腸梗阻，需拍片',
    ].map(message => ({ message }));

    await Order.deleteMany({});
    const ordersFromDb = await Order.create(orders);
    console.log(colors.info('clear order done'));
    return ordersFromDb;
  } catch (err) {
    console.log(colors.error(err));
  }
};
