/* eslint-disable no-undef */
/* eslint-disable camelcase */
const express = require('express');
const { Op } = require('sequelize');
const multer = require('multer');
const { Animal, Request, Favourite } = require('../db/models');
const fileStorageEngine = require('../middlewares/multer');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({
      include: 'User',
    });
    return res.json(animals);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});
const upload = multer({ storage: fileStorageEngine });
router.put('/edit/:id', upload.array('images', 10), async (req, res) => {
  try {
    const {
      name, animal_type, breed, color, age, med_info,
      about, price_category, price, period_category, period, gender,
    } = req.body;
    console.log(req?.files, req?.file);
    // console.log(req.body.images);
    let images = [];
    (req?.files)?.forEach((element) => {
      images.push(element.filename);
    });
    images = JSON.stringify(images);
    await Animal.update(
      {
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
      },
      { where: { id: req.params.id } },
    );
    const animal = await Animal.findByPk(req.params.id);
    res.json(animal);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});
router.post('/new', async (req, res) => {
  try {
    const {
      name,
      animal_type,
      breed,
      color,
      age,
      med_info,
      about,
      images,
      price_category,
      price,
      period_category,
      period,
      gender,
      userId,
    } = req.body;
    const newOwnerAnimal = await Animal.create({
      name,
      animal_type,
      breed,
      color,
      age,
      med_info,
      about,
      images,
      price_category,
      price,
      period_category,
      period,
      gender,
      userId,
    });
    return res.json(newOwnerAnimal);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

// router.get('/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const ownerAnimals = await Animal.findAll({
//       where: { userId },
//     });
//     const animals = JSON.parse(JSON.stringify(ownerAnimals));
//     const ids = animals.map((el) => el.id);
//     const request = await Request.findAll({
//       include: { all: true },
//     });
//     const tmp = JSON.parse(JSON.stringify(request));
//     // console.log(tmp);
//     const requests = tmp.filter((el) => ids.includes(el.animal_id));
//     return res.json({ ownerAnimals, requests });
//   } catch (e) {
//     console.log(e);
//     return res.sendStatus(500);
//   }
// });

router.post('/delete', async (req, res) => {
  try {
    const { animal_id } = req.body;
    console.log(animal_id);
    const animal = await Animal.findOne({
      where: { id: animal_id },
    });
    if (animal) {
      await Request.destroy({ where: { animal_id } });
      await Favourite.destroy({ where: { animal_id } });
      await animal.destroy(); // deletes the row
      return res.sendStatus(200);
    }
    return res.sendStatus(500);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const ownerAnimals = await Animal.findAll({
      where: { userId },
    });
    const animals = JSON.parse(JSON.stringify(ownerAnimals));
    const ids = animals.map((el) => el.id);
    const requests = await Request.findAll({
      where: {
        animal_id: { [Op.in]: ids },
      },
      include: { all: true },
    });
    return res.json({ ownerAnimals, requests });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/:userId/without', async (req, res) => {
  try {
    const { userId } = req.params;
    const withoutOwnerAnimals = await Animal.findAll({
      where: {
        userId: { [Op.ne]: userId },
      },
    });
    return res.json(withoutOwnerAnimals);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});
router.route('/one/:id')
  .get(async (req, res) => {
    console.log(req.params.id);
    const ani = await Animal.findByPk(req.params.id);
    res.json(ani);
  });
module.exports = router;
