const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose');
const configKeys = require('../config_keys');

const app = express();

mongoose.connect(
  configKeys.mongoAddress, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

app.use(express.json());
app.use(routes);

app.listen(3333);