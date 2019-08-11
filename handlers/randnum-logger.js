'use strict';

const faker = require('faker');

module.exports = (req, res, next) => {
  console.log(faker.random.number());
  next();
};