const multer = require('multer');
const path = require('path');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../../client/public/images'));
  },
  filename: (req, file, cb) => {
    // console.log(file.mimetype);
    cb(null, `${Date.now()}--${file.originalname}`);
    console.log(file);
  },
});

module.exports = fileStorageEngine;
