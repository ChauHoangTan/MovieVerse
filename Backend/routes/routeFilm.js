const express = require('express')
const route = express.Router();
const controller = require('../controllers/controllerFilm')

route.post('/:id', (req, res) => {
    const type = req.type; // Lấy giá trị type từ request
    controller.handleView(req, res, type);
})

route.get('/:id/reviews', (req,res) => {
    const type = req.type; // Lấy giá trị type từ request
    controller.showReviews(req, res, type);
})

route.post('/:id/addReview',(req, res) => {
    const type = req.type; // Lấy giá trị type từ request
    controller.handleAddReview(req, res);
})

module.exports = route;