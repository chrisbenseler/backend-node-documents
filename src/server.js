const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose');
const boom = require('express-boom');
const mongooseKey = require('../config_keys');

const app = express();
app.use(boom());

mongoose.connect(
  mongooseKey.mongoAddress, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

app.use(express.json());
app.use(routes);

app.listen(3333);