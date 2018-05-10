const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

class UserDalService {
    constructor() {}

    getUsers() {
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                db.each('SELECT name from Users LIMIT 1', (err, users) => {
                    resolve(users);
                });
            });
            db.close();
        });
    }

}

module.exports = UserDalService;