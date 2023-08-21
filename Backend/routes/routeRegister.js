const express = require('express')
const route = express.Router();
const controller = require('../controllers/controllerRegister')

route.post('/',(req, res) => {
    controller.handleRegister(req, res);
});

module.exports = route;