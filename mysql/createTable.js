/**
 * createTable.js    - A program to create a table into MySQL database.
 * @author             Ratna Lama
 * @date               4/30/2019
 *
 * @description        CREATE TABLE IF NOT EXISTS <table_name>
 */

// Import Module
const createConnection = require(__dirname + "/createConnection.js");

// Export as module property
exports.property = function() {
  // create database connection
  let db = createConnection();

  // CREATE TABLE propertylists
  let sql =
    "CREATE TABLE IF NOT EXISTS propertylists (id INT PRIMARY KEY AUTO_INCREMENT, address VARCHAR(100), city VARCHAR(100), state VARCHAR(100), zipcode VARCHAR(30), price INT, size INT, room INT, bathroom INT, img VARCHAR(255))";
  db.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log("Table created successfully...");
  });

  // END DATABASE CONNECTION
  db.end();
}; // end function

// Export as module users
//     exports.users = function () {
//     // CREATE TABLE users
//     let sql = "CREATE TABLE IF NOT EXISTS users (pname CHAR(50), age INT, cost REAL, policy_id INT, ssn CHAR(11) NOT NULL, PRIMARY KEY (pname, ssn), FOREIGN KEY (ssn) REFERENCES employees sON DELETE CASCADE)";
//     db.query(sql, function(err, result, fields) {
//         if (err) throw err;
//         console.log('Table created successfully...');
//     });
// } // end function
