/**
 * createConnection.js    - A program to create a connection to MySQL connection.
 * @author                  Ratna Lama
 * @date                    4/30/2019
 *
 * @description             CREATE a connection to MySQL database
 */

const mysql = require("mysql");

function createConnection() {
  // Create a database Connection
  let connection = mysql.createConnection({
    // localhost
    host: "localhost",
    user: "root",
    password: "",
    database:
      "lamalist" /* uncomment it if creating database for the first time */
  });

  // Connect to MySQL
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL database successfully...");
  });
  return connection;
} // end createConnection()

// Export Module
module.exports = createConnection;
