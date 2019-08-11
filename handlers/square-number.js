'use strict';

module.exports = (number) => {
  return (req, res, next) => {
    req.number = number * number;
    next();
  };
};
