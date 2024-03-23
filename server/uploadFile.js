const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "image"));
  },
  filename: function (req, file, cb) {
    const image = Date.now() + "-" + file.originalname;
    req.body.image = image;
    cb(null, image);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
