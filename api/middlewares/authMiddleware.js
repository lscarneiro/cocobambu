let jwt = require('jsonwebtoken'),
    User = require('../models/userModel'),
    config = require('../../config');

module.exports = function (req, res, next) {
   let token = req.headers['authorization'];
   if (token) {
      return jwt.verify(token, config.jwt_key, function (err, decoded) {
         if (err) {
            return res.json({error: 'invalid_token'});
         } else {
            req.user = decoded;
            next();
         }
      });
   }
   return res.status(403).send({error: 'token_not_provided'});
}