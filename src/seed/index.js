const mongoose = require('mongoose');
const colors = require('colors');
require('../startup/mongodb');
require('../startup/colorsTheme') ;

const fillPatientsAsync = require('./fillPatients');

fillPatientsAsync()
  .then(() => {
    console.log(colors.prompt('db:seed done'));
    mongoose.connection.close();
  });
