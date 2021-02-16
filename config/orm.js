const connection = require('./connection');

module.exports = {
    selectAll() {
        return connection.query(`SELECT * FROM burgers ORDER BY id ASC`)
    },

    insertOne(data) {
        return connection.query(`INSERT INTO burgers SET ?`, data)
    },

    updateOne(data, name) {
        return connection.query(`UPDATE burgers SET devoured = ? WHERE burger_name = ?`, data, name)
    }
}