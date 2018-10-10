'use strict';
let bcrypt = require('bcrypt'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('../../config');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
   username: String,
   password: String
});

UserSchema.statics.validateCredentials = function (username, password, cb) {
   this.findOne({username: username}, function (err, found) {
      if (!found) {
         cb(err);
         return;
      }
      found.validatePassword(password, function (err, result) {
         if (result) {
            found.password = undefined;
            found.generateToken(cb);
         } else {
            cb(null);
         }
      });
   });
};

UserSchema.methods.validatePassword = function (input, cb) {
   bcrypt.compare(input, this.password, function (err, res) {
      if (err) return cb(err);
      cb(null, res);
   });
};
UserSchema.methods.generateToken = function (cb) {
   let user = this.toObject();
   let token = jwt.sign(user, config.jwt_key, {
      expiresIn: '24h'
   });
   let payload = {
      user,
      token
   };
   cb(payload);
};

module.exports = mongoose.model('Users', UserSchema);