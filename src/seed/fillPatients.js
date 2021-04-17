const mongoose = require('mongoose');
const colors = require('colors');

const Patient = mongoose.model('patients');

module.exports = async (orders) => {
  try {
    const patients = [
      ['Allen', orders[2]],
      ['Hank', orders[1]],
      ['Nash', orders[0]],
      ['Antony', orders[1]],
      ['Ryan', orders[2]],
    ].map(p => ({
      name: p[0],
      orderId: p[1]._id,
    }));

    await Patient.deleteMany({});
    await Patient.create(patients);
    console.log(colors.info('fill patients done'));
  } catch (err) {
    console.log(colors.error(err));
  }
};
