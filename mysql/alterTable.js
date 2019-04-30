/**
 * alterTable.js    - A program to add a column in existing MySQL database.
 * @author            Ratna Lama
 * @date              4/30/2019
 *
 * @description       ALTER TABLE <table_name>
 *                    ADD <column_name> <datatype>;
 */

// Import Module
const createConnection = require(__dirname + "/createConnection.js");

function alterTable() {
  // create database connection
  let db = createConnection();

  // ALTER TABLE employee
  let sql = "ALTER TABLE propertylists ADD type VARCHAR(100)";
  db.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log("Table altered successfully...");
  });

  // END DATABASE CONNECTION
  db.end();
} // end function

// Export as module employee
module.exports = alterTable;
