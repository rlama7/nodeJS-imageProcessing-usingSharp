/**
 * insertInto.js    - A program to insert value an existing MySQL database.
 * @author            Ratna Lama
 * @date              4/30/2019
 *
 * @description       INSERT INTO <table_name> (column1, column2, column3, ...)
 *                    VALUES (value1, value2, value3, ...);
 */

const faker = require("faker");
faker.locale = "en_US"; //sets locale to US

// Import module
const createConnection = require(__dirname + "/createConnection.js");
const getRandomInt = require(__dirname + "/getRandomInt.js");

// Populate Database using Faker Library
function insertInto() {
  // AUTO POPULATE DATABASE USING FAKER LIBRARY
  let data = [];
  let i;
  for (i = 1; i <= 3; i++) {
    data.push([
      faker.address.streetAddress(),
      faker.address.city(),
      faker.address.state(),
      faker.address.zipCode(),
      getRandomInt(500, 1000), // price
      getRandomInt(300, 1200), // size
      getRandomInt(1, 5), // room
      getRandomInt(1, 3), // bathroom
      faker.image.city(), // fake city image
      getRandomInt(1, 10), // distance
      "house" // type
    ]);
  } // end for loop

  // create database connection
  let db = createConnection();

  // Database query
  let sql =
    "INSERT INTO propertylists (address, city, state, zipcode, price, size, room, bathroom, img, type, distance) VALUES ?";
  db.query(sql, [data], function(err, result, field) {
    if (err) throw err;
    console.log("Values inserted into table successfully...");
  }); // end query

  // END DATABASE CONNECTION
  db.end();
} // end inserInto()

// Export module
module.exports = insertInto;
