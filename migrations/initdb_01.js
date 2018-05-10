const PRODUCTS = [
    {
        name: 'Life Insurance',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }, {
        name: 'Health Points',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }, {
        name: 'Cycle to Work',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }, {
        name: 'Free Chocolate',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }, {
        name: 'Dental Care',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }, {
        name: 'Frontend Development Training',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }
];

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/coinRecommendations');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )`);

    db.run(`INSERT INTO Users (name) VALUES ('John')`);

    db.run(`CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description VARCHAR(255)
    )`);

    const productsStatement = db.prepare(`INSERT INTO Products (name, description) VALUES (?, ?)`);
    PRODUCTS.forEach(product => productsStatement.run(product.name, product.description));
    productsStatement.finalize();

    db.run(`CREATE TABLE IF NOT EXISTS UserProducts (
        user_id INTEGER,
        product_id INTEGER,
        state INTEGER,
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (product_id) REFERENCES Products(id),
        FOREIGN KEY (state) REFERENCES ProductStates(type_id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductStates (
        type_id INTEGER PRIMARY KEY AUTOINCREMENT,
        state TEXT
    )`);

    db.run(`INSERT INTO ProductStates (state) VALUES ('wishlist')`);
    db.run(`INSERT INTO ProductStates (state) VALUES ('purchased')`);
});

db.close();