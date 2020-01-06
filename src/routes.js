const express = require('express');
const SessionController = require('./controllers/SessionController');
const DocumentController = require('./controllers/DocumentController');

const routes = express.Router();

routes.post('/sessions/signup', SessionController.store);
routes.post('/sessions/login', SessionController.show);

routes.post('/documents', DocumentController.store);

module.exports = routes;
