const express = require('express');
const Router = express.Router();
const controller = require('../Controller/user.js');

Router.get('/getData',controller.getData);

module.exports = Router;