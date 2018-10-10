'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let RecipeSchema = new Schema({
   name: String,
   description: String,
   ingredients: [String],
   duration: Number,
   steps: [{
      order: Number,
      description: String
   }]
});

module.exports = mongoose.model('Recipes', RecipeSchema);