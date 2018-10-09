'use strict';

let User = require('../models/userModel');

const mismatch_error = {
   error: 'mismatch',
   message: "Usuário/Senha inválido(s)"
};
exports.authenticate = function (req, res) {
   User.validateCredentials('admin', 'admin', function (found) {
      if (!found) {
         res.json(mismatch_error);
         return;
      }
      res.send(found);
   });
};