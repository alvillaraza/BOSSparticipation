const express = require('express');

const Users = require('./users_model.js');
const router = express.Router();
const restricted = require('../auth/restricted-middleware.js');



router.get('/', restricted, (req, res) => {
  Users.get()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the activities"
      });
    });
});

module.exports = router;