var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "notes_db"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id: " + connection.threadId)
})

module.exports = connection;