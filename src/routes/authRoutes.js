const express = require('express');
const gerenciadorRotas = express.Router();
const controladorAutenticacao = require('../controllers/authController');

gerenciadorRotas.post('/register', controladorAutenticacao.register);
gerenciadorRotas.post('/login', controladorAutenticacao.login);
gerenciadorRotas.patch('/reset-password', controladorAutenticacao.resetPassword);

module.exports = gerenciadorRotas;