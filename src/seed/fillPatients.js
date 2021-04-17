const mongoose = require('mongoose');
const colors = require('colors');

const Patient = mongoose.model('patients');

module.exports = async () => {
  try {
    const patients = [
      {
        Name: 'Allen',
      },
      {
        Name: 'Hank',
      },
      {
        Name: 'Nash',
      },
      {
        Name: 'Antony',
      },
      {
        Name: 'Ryan',
      },
    ];
    await Patient.deleteMany({})
    await Patient.create(patients)
    console.log(colors.info('fill patients done'));
  } catch (err) {
    console.log(colors.error(err.message))
  }
};
