const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

class UserProductsDalService {
    constructor() {}

    getProductsByUser() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.each('SELECT name from Users LIMIT 1', (err, users) => {
                    resolve(users);
                });
            });
            db.close();
        });
    }

    chooseProduct(userId, productId, stateId) {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                const chooseProductStatement =
                  db.prepare(`INSERT INTO UserProducts (user_id, product_id, state_id) VALUES (?, ?, ?)`);
                chooseProductStatement.run(userId, productId, stateId);
                chooseProductStatement.finalize();
                resolve({ success: true });
            });
            db.close();
        });
    }

}

module.exports = UserProductsDalService;