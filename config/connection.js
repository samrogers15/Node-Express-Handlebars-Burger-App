const util = require('util');
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId} \n`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;