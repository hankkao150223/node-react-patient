const mongoose = require('mongoose');
const colors = require('colors');
require('../startup/mongodb');
require('../startup/colorsTheme') ;

const fillOrdersAsync = require('./fillOrders');
const fillPatientsAsync = require('./fillPatients');

fillOrdersAsync()
  .then(fillPatientsAsync)
  .then(() => {
    console.log(colors.prompt('db:seed done'));
    mongoose.connection.close();
  });
