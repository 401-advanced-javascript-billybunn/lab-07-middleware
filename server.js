'use strict';

const express = require('express');
const app = express();
const faker = require('faker');

const PORT = process.env.PORT || 3000;

const routes = require('./routes.js');
const logger = require('./handlers/logger.js');
const recordTime = require('./handlers/record-time.js');
const squareAndAttach = require('./handlers/square-number.js');
const errorHandler = require('./handlers/500.js');
const notFoundHandler = require('./handlers/404.js');

app.use(express.json());
app.use(recordTime);
app.use(logger);
app.use(routes);

app.get('/a', (req, res) => {
  res.status(200).send('Route A');
});

app.get('/b', squareAndAttach(faker.random.number()), (req, res) => {
  res.status(200).send(req.number.toString());
});

app.use('*', notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
