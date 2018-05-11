const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

class ProductsDalService {
    constructor() {}

    getAllProducts() {
      return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT id, name, description from Products', (err, products) => {
                  console.log('products', products);
                  resolve(products);
                });
            });
            db.close();
        });
    }

    getProductsById() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.each('SELECT name, description from Products', (err, products) => {
                    resolve(products);
                });
            });
            db.close();
        });
    }

    getProductsByState() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.each('SELECT name, description from Products', (err, products) => {
                    resolve(products);
                });
            });
            db.close();
        });
    }

}

module.exports = ProductsDalService;