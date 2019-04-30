const express = require("express");
const multer = require("multer"); // image upload
const sharp = require("sharp"); // image manipulation
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

/**
 * CONFIGURATIONS
 */
app.set("view engine", "ejs"); // set view engine
app.use(bodyParser.urlencoded({ extended: true })); // body-parser
app.use(express.static(__dirname + "/public")); // css

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).single("imageUpload");

/**
 * Import Modules
 */
// const Media = require("./imageThumbnail.js");
const createConnection = require("./mysql/createConnection.js");
// const createDB = require("./mysql/createDB.js");
// const createTable = require("./mysql/createTable.js");
// const alterTable = require("./mysql/alterTable.js");
const insertInto = require("./mysql/insertInto.js");

/**
 * MySQL Database Query Execution
 */
// let db = createConnection();
// createDB();
// createTable.property();
// alterTable();
// insertInto();

//
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Image Processing using NodeJS sharp and multer modules</h1>"
  );
});

app.get("/thumbnail", function(req, res) {
  res.render("thumbnail");
});

app.post("/thumbnail", upload, function(req, res, next) {
  //console.log(req.file);

  // configure sharp
  let width = 50;
  let height = 50;

  sharp(req.file.path)
    .resize(width, height)
    .toFile("public/uploads/thumb/thumb_" + req.file.originalname, function(
      err
    ) {
      if (!err) {
        console.log("sharp worked");
        res.write("File uploaded successfully...");
        res.end();
      } else {
        console.log(err);
      }
    });
});

app.listen(port, function() {
  console.log(`Server listening on port ${port}...`);
});
