'use strict';

const moment = require('moment');

module.exports = (req, res, next) => {
  req.requestTime = moment().format('MM/DD/YYYY [at] h:mm:ss a');
  next();
};