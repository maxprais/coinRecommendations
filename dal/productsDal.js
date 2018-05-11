const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

class ProductsDalService {
    constructor() {}

    getAllProducts() {
      return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.all('SELECT id, name, description from Products', (err, products) => {
                  resolve(products);
                });
            });
        });
    }

    getProductsById() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.each('SELECT name, description from Products', (err, products) => {
                    resolve(products);
                });
            });
        });
    }

    getProductsByState() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.each('SELECT name, description from Products', (err, products) => {
                    resolve(products);
                });
            });
        });
    }

}

module.exports = ProductsDalService;