const express = require('express');
const router = require('express').Router();

const Employees = require('./employees-model.js');
// const restricted = require('./auth/restricted-middleware.js');

router.get('/', (req, res) => {
    Employees.get()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send('users not found'));
  });
  

module.exports = router;