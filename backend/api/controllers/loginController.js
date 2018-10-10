'use strict';

let User = require('../models/userModel');

const mismatch_error = {
   error: 'mismatch',
   message: "Usuário/Senha inválido(s)"
};
const missing_data_error = {
   error: 'missing_data',
   message: "Necessário informar usuário e senha"
};
exports.authenticate = function (req, res) {
   if (!req.body.username || !req.body.password) {
      return res.json(missing_data_error);
   }
   User.validateCredentials(req.body.username, req.body.password, function (found) {
      if (!found) {
         return res.json(mismatch_error);
      }
      return res.send(found);
   });
};