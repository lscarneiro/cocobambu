'use strict';
let express = require('express');
module.exports = function (app) {
   let loginController = require('../controllers/loginController');
   let router = express.Router();
   router.post('/login', loginController.authenticate);
   app.use(router);
};
