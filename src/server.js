const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose');
const mongooseKey = require('../config_keys');

const app = express();

mongoose.connect(
  mongooseKey.mongoAddress, {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

app.use(express.json());
app.use(routes);

app.listen(3333);