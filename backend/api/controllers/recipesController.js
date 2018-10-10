'use strict';

let Recipe = require('../models/recipeModel');


exports.list_all = function (req, res) {
   Recipe.find({}, function (err, recipes) {
      if (err) {
         console.log('recipe list_all err', err);
         return res.send([]);
      }
      if (!recipes) {
         return res.send([]);
      }
      return res.json(recipes);
   });
};