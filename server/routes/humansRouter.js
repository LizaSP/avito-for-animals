/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const express = require('express');
const { Op } = require('sequelize');
const {
  Babysitter, HumanFavourite, HumanRequest, User,
} = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  try {
    const {
      user_id, animal_type, period_category, price_category, experience,
    } = req.body;
    console.log(req.body);
    const newBabysitter = await Babysitter.create({
      user_id, animal_type, period_category, price_category, experience,
    });
    return res.json(newBabysitter);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/requests/new', async (req, res) => {
  try {
    const {
      owner_id, hunter_id, status, hunter_reply,
    } = req.body;
    // console.log(animal_id, hunter_id, status);
    const [newRequest, created] = await HumanRequest.findOrCreate({
      where: { owner_id, hunter_id },
      defaults: {
        hunter_id,
        owner_id,
        status,
        hunter_reply,
      },
    });
    if (created) {
      return res.json(newRequest);
    }
    return res.sendStatus(500);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/requests/delete', async (req, res) => {
  try {
    const { hunter_id, owner_id } = req.body;
    const oneRequest = await HumanRequest.findOne({
      where: { hunter_id, owner_id },
    });
    // console.log(oneRequest);
    if (oneRequest) {
      await oneRequest.destroy(); // deletes the row
      return res.sendStatus(200);
    }
    // console.log('here!!!!');
    return res.sendStatus(500);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/requests/:id', async (req, res) => {
  try {
    const { id } = req.params; // user_id
    const requests = await HumanRequest.findAll({
      where: { owner_id: id },
      include: { all: true },
      // attributes: ['hunter_id'],
      // include: [['User', 'Animal']],
    });
    // console.log(JSON.parse(JSON.stringify(requests)));
    return res.json(requests);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.route('/hunter/:id')
  .get(async (req, res) => {
    const hunter = await User.findByPk(req.params.id);
    res.json(hunter);
  });

router.post('/favourites/new', async (req, res) => {
  try {
    const { owner_id, hunter_id } = req.body;
    const [newFavourite, created] = await HumanFavourite.findOrCreate({
      where: { owner_id, hunter_id },
      defaults: {
        owner_id,
        hunter_id,
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

router.post('/favourites/delete', async (req, res) => {
  try {
    const { owner_id, hunter_id } = req.body;
    const oneFavourite = await HumanFavourite.findOne({
      where: { owner_id, hunter_id },
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

router.get('/favourites/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const favourites = await HumanFavourite.findAll({
      where: { owner_id: user_id },
      include: { all: true },
    });
    return res.json(favourites);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/offers/:hunter_id', async (req, res) => {
  try {
    const { hunter_id } = req.params;
    const favourites = await HumanRequest.findAll({
      where: { hunter_id },
      include: { all: true },
    });
    return res.json(favourites);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/offers/one/:id', async (req, res) => {
  try {
    const { id } = req.params; // user_id
    const request = await HumanRequest.findOne({
      where: { id },
      include: { all: true, nested: true },
      // include: [['User', 'Animal']],
    });
    return res.json(request);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.patch('/offers/:id/:status', async (req, res) => {
  try {
    const { id, status } = req.params; // user_id
    console.log(id, status);
    // const { status } = req.body; // user_id
    await HumanRequest.update({ status }, { where: { id } });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.patch('/offers/:id/:hunter_reply/hunter_reply', async (req, res) => {
  try {
    const { id, hunter_reply } = req.params; // user_id
    // const { status } = req.body; // user_id
    console.log(id, hunter_reply);

    await HumanRequest.update({ hunter_reply }, { where: { id } });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/:user_id/without', async (req, res) => {
  try {
    const { user_id } = req.params;
    const withoutCurr = await Babysitter.findAll({
      where: {
        user_id: { [Op.ne]: user_id },
      },
      include: { all: true },
    });
    return res.json(withoutCurr);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
