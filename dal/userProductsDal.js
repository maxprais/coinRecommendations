const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

class UserProductsDalService {
  constructor() {}

  getProductsByUser(userId) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all(`SELECT DISTINCT Products.id, Products.name, Products.description, UserProducts.product_id 
        FROM UserProducts 
        JOIN Products ON Products.id = UserProducts.product_id 
        WHERE UserProducts.user_id = ?`, [userId], (err, products) => {
          resolve(products);
        });
      });
    });
  }

  chooseProduct(userId, productId, stateId) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        const chooseProductStatement =
          db.prepare(`INSERT OR REPLACE INTO UserProducts (user_id, product_id, state_id) VALUES (?, ?, ?)`);
        chooseProductStatement.run(userId, productId, stateId);
        chooseProductStatement.finalize();
        resolve({ success: true });
      });
    });
  }

}

module.exports = UserProductsDalService;