const express = require('express');
const colors = require('colors');
require('./startup/mongodb') ;
require('./startup/colorsTheme') ;

const app = express();

require('./routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  const serverUrl = colors.info(`http://localhost:${PORT}`);
  console.log(colors.input(`Server started at ${serverUrl}`));
});
