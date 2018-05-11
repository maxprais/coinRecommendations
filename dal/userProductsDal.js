const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

class UserProductsDalService {
    constructor() {}

    getProductsByUser() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
              `SELECT id, name, description from Products WHERE user_id = ?`
              const chooseProductStatement =
                db.prepare(`SELECT product_id from UserProducts WHERE user_id = ?`);
              chooseProductStatement.run(userId, productId, stateId);
              chooseProductStatement.finalize();
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