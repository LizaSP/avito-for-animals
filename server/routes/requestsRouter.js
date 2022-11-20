/* eslint-disable camelcase */
const express = require('express');
const { Request, Animal, User } = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  try {
    const { animal_id, hunter_id, status } = req.body;
    // console.log(animal_id, hunter_id, status);
    const [newRequest, created] = await Request.findOrCreate({
      where: { animal_id, hunter_id },
      defaults: {
        hunter_id,
        animal_id,
        status,
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

router.post('/delete', async (req, res) => {
  try {
    const { hunter_id, animal_id } = req.body;
    const oneRequest = await Request.findOne({
      where: { animal_id, hunter_id },
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

router.get('/one/:id', async (req, res) => {
  try {
    const { id } = req.params; // user_id
    const request = await Request.findOne({
      where: { id },
      // include: { all: true, nested: true },
      include: [
        {
          model: User,
        },
        {
          model: Animal,
          include: [User],
        }],
    });
    return res.json(request);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // user_id
    const requests = await Request.findAll({
      where: { hunter_id: id },
      include: { all: true, nested: true },
      // include: [['User', 'Animal']],
    });
    return res.json(requests);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/:animal_id/animals', async (req, res) => {
  try {
    const { animal_id } = req.params;
    const requests = await Request.findAll({
      where: { animal_id },
      include: { all: true },
      // include: [['User', 'Animal']],
    });
    console.log(requests);
    return res.json(requests);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.patch('/:id/:status', async (req, res) => {
  try {
    const { id, status } = req.params; // user_id
    console.log(id, status);
    // const { status } = req.body; // user_id
    await Request.update({ status }, { where: { id } });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.patch('/:id/:hunter_reply/hunter_reply', async (req, res) => {
  try {
    const { id, hunter_reply } = req.params; // user_id
    // const { status } = req.body; // user_id
    console.log(id, hunter_reply);

    await Request.update({ hunter_reply }, { where: { id } });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
