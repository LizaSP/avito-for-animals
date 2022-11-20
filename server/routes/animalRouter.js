/* eslint-disable camelcase */
const express = require('express');
const multer = require('multer');
const { Animal } = require('../db/models');
const fileStorageEngine = require('../middlewares/multer');

const upload = multer({ storage: fileStorageEngine });

const router = express.Router();
// для добавления животного
router.post('/addAnimal', upload.array('images', 10), async (req, res) => {
  console.log('qww', req.body);
  const {
    name, animal_type, breed, color, age, med_info,
    about, price_category, price, period_category, period, gender,
  } = req.body;
  // console.log('reqfile', req?.files);
  let images = [];
  (req?.files)?.forEach((element) => {
    images.push(element.filename);
  });
  images = JSON.stringify(images);
  const animal = await Animal.create({
    name,
    images,
    animal_type,
    breed,
    color,
    age,
    med_info,
    about,
    price_category,
    price,
    period_category,
    period,
    gender,
    userId: req.session.user.id,
  });
  res.json(animal);
});

module.exports = router;

//   (req.files).forEach((element) => {
//     Album.create({
//       img: element.filename,
//     });
