const express = require('express');
const router = express.Router();

const ROUTES = require('../consts/API');
const UserDalService = require('../dal/userDal');

router.get(ROUTES.getUsers, async (req, res, next) => {
  const userDalService = new UserDalService();
  const users = await userDalService.getUsers();

  res.send(users);
});

module.exports = router;
