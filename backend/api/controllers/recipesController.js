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
exports.find_by_id = function (req, res) {
   if (!req.params.recipeId) {
      return res.status(404).end();
   }
   Recipe.findById(req.params.recipeId, function (err, recipe) {
      if (err) {
         console.log('recipe find_by_id err', err);
         return res.send(null);
      }
      if (!recipe) {
         return res.send(null);
      }
      return res.json(recipe);
   });
};