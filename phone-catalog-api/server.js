const express = require('express');
// require ("cors");

const app = express();

const port = 8000;

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log (`Listening to port ${port}...`)
})
