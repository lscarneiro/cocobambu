const express = require('express');
const app = module.exports = express();
const port = process.env.PORT || 3000;

let mongoose = require('mongoose'),
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cocobambu');

let loginRoutes = require('./api/routes/loginRoutes'),
    recipeRoutes = require('./api/routes/recipeRoutes');

loginRoutes(app);
recipeRoutes(app);

app.listen(port, () => console.log(`Coco Bambu app listening on port ${port}!`));