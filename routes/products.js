const ROUTES = require('../consts/API');

const express = require('express');
const router = express.Router();

router.get(ROUTES.getAllProducts, function(req, res, next) {
    res.send('respond with a resource');
});

router.get(ROUTES.getProductById, function(req, res, next) {
    res.send('respond with a resource');
});

router.get(ROUTES.getProductByState, function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
