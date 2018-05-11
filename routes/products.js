const ROUTES = require('../consts/API');

const express = require('express');
const router = express.Router();

const ProductsDalService = require('../dal/productsDal');

router.get(ROUTES.getAllProducts, async (req, res, next) => {
    const productsDalService = new ProductsDalService();
    const allProducts = await productsDalService.getAllProducts();
  console.log('return products', allProducts);
  res.json(allProducts);
});

router.get(ROUTES.getProductById, async (req, res, next) => {
    const productsDalService = new ProductsDalService();
    const product = await productsDalService.getAllProducts();

    res.send(product);
});

router.get(ROUTES.getProductsByState, async (req, res, next) => {
    const productsDalService = new ProductsDalService();
    const products = await productsDalService.getAllProducts();

    res.send(products);
});

router.get(ROUTES.getProductsByUser, async (req, res, next) => {
    const productsDalService = new ProductsDalService();
    const products = await productsDalService.getAllProducts();

    res.send(products);
});

module.exports = router;
