/* eslint-disable camelcase */
const express = require('express');
const { Favourite } = require('../db/models');

const router = express.Router();

router.get('/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const favourites = await Favourite.findAll({
      where: { user_id },
      include: { all: true },
    });
    return res.json(favourites);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { user_id, animal_id } = req.body;
    const [newFavourite, created] = await Favourite.findOrCreate({
      where: { user_id, animal_id },
      defaults: {
        user_id,
        animal_id,
      },
    });
    if (created) {
      return res.json(newFavourite);
    }
    return res.sendStatus(401);
  } catch (e) {
    console.log(e);
  }
});

router.post('/delete', async (req, res) => {
  try {
    const { user_id, animal_id } = req.body;
    const oneFavourite = await Favourite.findOne({
      where: { user_id, animal_id },
    });
    if (oneFavourite) {
      await oneFavourite.destroy(); // deletes the row
      return res.sendStatus(200);
    }
    return res.sendStatus(500);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
