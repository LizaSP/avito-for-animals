const express = require('express');
const multer = require('multer');
const { User } = require('../db/models');
const fileStorageEngine = require('../middlewares/multer');

const upload = multer({ storage: fileStorageEngine });
const router = express.Router();

router.route('/profile/:id')
  .get(async (req, res) => {
    const OneRest = await User.findOne({ where: { id: req.params.id } });
    // console.log(OneRest)
    res.json(OneRest);
  });
router.route('/profile/edit')
  .patch(upload.single('images'), async (req, res) => {
    const {
      firstName, lastName, email, gender, phone, info, location, status, websites,
    } = req.body;
    await User.update(
      {
        firstName,
        lastName,
        email,
        gender,
        phone,
        info,
        location,
        status,
        websites,
        avatar: req?.file?.filename,
        role: 'hunter',
      },
      { where: { id: req.session.user.id } },
    );
    const user = await User.findByPk(req.session.user.id);
    console.log(user);
    res.json(user);
  });

router.route('/profile')
  .get(async (req, res) => {
    const OneRest = await User.findOne({ where: { id: req.session.user.id } });
    // console.log(OneRest)
    res.json(OneRest);
  });
module.exports = router;
