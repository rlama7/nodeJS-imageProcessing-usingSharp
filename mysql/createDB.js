/**
 * server.js    - A program to create a MySQL database.
 * @author        Ratna Lama
 * @date          4/30/2019
 *
 * @description   CREATE DATABASE IF NOT EXISTS <database_name>
 *
 */

// Module Imports
const createConnection = require(__dirname + "/createConnection.js");

function createDB() {
  // create database connection
  let db = createConnection();

  // make database
  let sql = "CREATE DATABASE IF NOT EXISTS lamaList";
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Database Created Successfully!");
  });

  // END DATABASE CONNECTION
  db.end();
} // end createDB()

// Export modules
module.exports = createDB;
