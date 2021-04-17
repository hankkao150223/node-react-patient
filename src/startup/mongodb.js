const mongoose = require('mongoose');
const colors = require('colors');
const keys = require('../config/keys');

require('../models/Patient');
require('../models/Order');

mongoose
  .connect(
    keys.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => console.log(colors.info('Mongodb connected success')))
  .catch((err) => {
    console.log(colors.error(`Mongodb connect error: ${err.message}`))
    process.exit(1);
  });
