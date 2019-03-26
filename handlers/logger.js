'use strict';

module.exports = (req, res, next) => {
  console.log(`
method: ${req.method}
path: ${req.path}
time: ${req.requestTime}`);
  next();
};
