const express = require('express')
const route = express.Router();
const controller = require('../controllers/controllerLogin.js')

route.post('/',(req, res) => {
    controller.handleLogin(req, res);
});

module.exports = route;