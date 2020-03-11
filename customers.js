var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS `customers` ( id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL, active BOOLEAN DEFAULT false) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});