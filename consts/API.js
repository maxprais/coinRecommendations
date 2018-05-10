const ROUTES = {
    getUsers: '/api/users',
    getAllProducts: '/api/products',
    getProductById: '/api/products/:productId',
    getProductByState: '/api/products/:stateId',
    getProductByUser: '/api/products/:userId',
    chooseProduct: '/api/products/choose/:userId/:productId/:stateId'
};

module.exports = ROUTES;