const express = require("express");
const multer = require("multer"); // image upload
const sharp = require("sharp"); // image manipulation
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

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
const Media = require("./imageThumbnail.js");

// @Ratna
app.get("/thumbnail", function(req, res) {
  res.render("thumbnail");
});

// @Shawn
app.get("/thumb", (req, res) => {
  if (req.query.src) {
    let image = new Media(req.query.src);
    image.thumb(req, res);
  } else {
    res.sendStatus(403);
  }
});

app.post("/thumbnail", upload, function(req, res, next) {
  console.log(req.file);

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

// function imageMagick(picture.path) {
//   .resize('250', '180', '^')
// .gravity('center')
// .extent(250, 180)
// .write(picture.thumb_path, function (error) {
//    if(error) console.log(error);

// }

// });

app.listen(port, function() {
  console.log(`Server listening on port ${port}...`);
});
