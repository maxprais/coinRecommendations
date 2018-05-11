const ROUTES = require('../consts/API');

const express = require('express');
const router = express.Router();

const UserProductsDalService = require('../dal/userProductsDal');

router.get(ROUTES.getProductsByUser, async (req, res, next) => {
    const userProductsDalService = new UserProductsDalService();
    const allProducts = await userProductsDalService.getProductsByUser();

    res.send(allProducts);
});

router.post(ROUTES.chooseProduct, async (req, res, next) => {
    const userProductsDalService = new UserProductsDalService();
    const { userId, productId, stateId } = req.params;
    const chooseProductSuccess = await userProductsDalService.chooseProduct(userId, productId, stateId);

    res.json(chooseProductSuccess);
});

module.exports = router;
