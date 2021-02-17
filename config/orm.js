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
        console.log('orm.js console', queryString);
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },

    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log('orm.js console', queryString);
        
        connection.query(queryString, vals, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },

    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log('orm.js console', queryString);

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;