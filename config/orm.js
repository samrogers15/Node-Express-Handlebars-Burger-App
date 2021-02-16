const connection = require('./connection');

function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(ob) {
    const arr = [];

    for (var key in ob) {
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM " + table + ";";
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
        // return connection.query(`SELECT * FROM burgers ORDER BY id ASC`)
    },

    insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        })
        // return connection.query(`INSERT INTO burgers SET ?`, data)
    },

    updateOne: function(table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(result);
        })
        // return connection.query(`UPDATE burgers SET devoured = ? WHERE burger_name = ?`, data, name)
    }
}

module.exports = orm;