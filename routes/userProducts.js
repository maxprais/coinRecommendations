const ROUTES = require('../consts/API');

const express = require('express');
const router = express.Router();

router.get(ROUTES.getProductByUser, function(req, res, next) {
    res.send('respond with a resource');
});

router.post(ROUTES.chooseProduct, function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
