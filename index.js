// Get env var
require('dotenv').config();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 5000, function () {
  console.log(`Example app listening on port ${process.env.PORT || 5000}!`);
});
