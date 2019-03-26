'use strict';

module.exports = (req, res, next) => {
  next('made an error on purpose');
};
