let jwt = require('jsonwebtoken'),
    User = require('../models/userModel'),
    app = require('../../app');

module.exports = function (req, res, next) {
   console.log('middleware auth header', req.headers['authorization']);
   let token = req.headers['authorization'];
   if (token) {
      return jwt.verify(token, app.get('jwt_key'), function (err, decoded) {
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