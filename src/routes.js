const express = require('express');
const SessionController = require('./controllers/SessionController');
const DocumentController = require('./controllers/DocumentController');
const UserVerifyMiddleware = require('./middlewares/UserVerifyMiddleware');

const routes = express.Router();

routes.post('/sessions/signup', SessionController.store);
routes.post('/sessions/login', SessionController.show);

routes.use(UserVerifyMiddleware.userIdVerify);

routes.post('/documents', DocumentController.store);
routes.get('/documents', DocumentController.show);

module.exports = routes;
