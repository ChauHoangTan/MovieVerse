const express = require('express')
const route = express.Router()
const controller = require('../controllers/controllerAccount.js')

route.post('/', (req, res) => {
    controller.handleRatings(req, res)
})

module.exports = route;