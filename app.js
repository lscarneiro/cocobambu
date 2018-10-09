const express = require('express');
const app = module.exports = express();
const port = process.env.PORT || 3000;

let mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken');

app.set('jwt_key', 'u+T-X(tHVN_tZ<L~[!*y_2+*;yT(sr3:'); //JWT Key

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cocobambu');

let loginRoutes = require('./api/routes/loginRoutes');

loginRoutes(app);

app.listen(port, () => console.log(`Coco Bambu app listening on port ${port}!`));