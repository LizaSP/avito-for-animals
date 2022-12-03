const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const { User } = require('../db/models');
const fileStorageEngine = require('../middlewares/multer');

const upload = multer({ storage: fileStorageEngine });

const router = express.Router();

router.post('/signup', upload.single('images'), async (req, res) => {
  const {
    firstName, lastName, email, password, gender, phone, info, location, status, websites,
  } = req.body;
  if (firstName && lastName && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          firstName,
          lastName,
          email,
          password: await bcrypt.hash(password, 10),
          gender,
          phone,
          info,
          location,
          status,
          websites,
          avatar: req?.file?.filename,
          role: 'hunter',
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.patch('/roleChange', async (req, res) => {
  const { role, id } = req.body;
  const changedRole = await User.update({ role }, {
    where: { id },
    returning: true,
    plain: true,
  });
  // console.log(changedRole[1]);
  const sessionUser = JSON.parse(JSON.stringify(changedRole[1]));
  delete sessionUser.password;
  req.session.user = sessionUser;
  return res.json(sessionUser);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
