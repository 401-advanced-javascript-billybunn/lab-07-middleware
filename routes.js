'use strict';

const express = require('express');
const router = express.Router();
const randNumLog = require('./handlers/randnum-logger.js');
const raiseError = require('./handlers/raise-error.js');

router.get('/c', randNumLog, (req, res) => {
  res.status(200).send('Route C');
});

router.get('/d', raiseError, (req, res) => {
  res.status(200).send('Route D');
});

module.exports = router;