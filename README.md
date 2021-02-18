# Node-Express-Handlebars-Burger-App
> This is a repository for an application that allows a user to enter the name of a burger that they like into an input field and create a list of burgers that are stored in a table using the MySQL database. The user enters a burger name and the burger is added to the database along with a boolean value for wether the burger has been devoured or not (true or false). Upon adding the burger, a button is generated next to the burger name that allows a user to select whether or not they want to "devour" the burger. When the burger is devoured, the specific burger shifts lists to be reflected under the "devoured" list and the database is updated to reflect the new boolean value for devoured.
 
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Live Link](#Live-Link)
* [Code Snippet](#code-snippet)
* [Sources](#sources)
* [Contact](#contact)

## General Info
The database was initialized in MySQL through execution of a schema file in the terminal. The application was set up using the MVC design pattern and houses files organized by Model, View, and Controller. The server is initialized using express and the HTML files incorporate MySQL queries through the use of Express-Handlebars. The application is deployed to Heroku and set up with the JawsDB integration.

## Technologies
* Javascript
* HTML/CSS
* JQuery
* Node
* NPM Express
* NPM Express-Handlebars
* NPM MySQL
* NPM dotenv
* Heroku
* MySQL
* MySQL Workbench

## Live Link
[Eat Da Burger App](https://polar-waters-92959.herokuapp.com/)

## Code Snippets

The below example code shows a function that queries the MySQL database to return information on a burger when invoked:
```js
router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log('burger_controller console ', hbsObject);
        res.render("index", hbsObject);
    })
});
```

The below example code shows an ORM function that allows a user to update a burger's devoured status in the MySQL database when invoked:
```js
updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
```

## Sources
Application enabled using the following sources:

* [NPM Express](https://www.npmjs.com/package/express)
* [NPM Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [NPM MySQL](https://www.npmjs.com/package/mysql)
* [NPM dotenv](https://www.npmjs.com/package/dotenv)

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on this project or any other project!

[LinkedIn](https://www.linkedin.com/in/samuelerogers/)

[Portfolio](https://samrogers15.github.io/Current_Portfolio/index.html)