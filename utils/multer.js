const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },

    fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      cb("File Type is not supported", false);
      return;
    }
    cb(null, true);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

module.exports = { upload };
