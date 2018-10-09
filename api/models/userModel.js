'use strict';
let bcrypt = require('bcrypt'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    app = require('../../app');
let Schema = mongoose.Schema;


let UserSchema = new Schema({
   username: String,
   password: String
});

UserSchema.statics.validateCredentials = function (username, password, cb) {
   this.findOne({username: 'admin'}, function (err, found) {
      console.log('found', found);
      if (!found) {
         cb(err);
         return;
      }
      found.validatePassword(password, function (err, result) {
         console.log('result', result);
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
   let data = this.toObject();
   let token = jwt.sign(data, app.get('jwt_key'), {
      expiresIn: '24h'
   });
   let payload = {
      data,
      token
   };
   console.log('payload', payload);
   cb(payload);
};

module.exports = mongoose.model('Users', UserSchema);