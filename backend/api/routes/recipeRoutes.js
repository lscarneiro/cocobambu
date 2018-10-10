'use strict';
let express = require('express'),
    authMw = require('../middlewares/authMiddleware');
module.exports = function (app) {
   let recipesController = require('../controllers/recipesController');
   let router = express.Router();
   router.all('*', authMw);
   router.get('/recipes', recipesController.list_all);
   app.use(router);
};
