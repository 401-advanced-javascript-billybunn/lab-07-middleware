'use strict';

const express = require('express');
const moment = require('moment');
const faker = require('faker');


const app = express();

const PORT = process.env.PORT || 8080;

const recordTime = (req, res, next) => {
  req.requestTime = moment().format('MM/DD/YYYY [at] h:mm:ss a');
  next();
};

const logger = (req, res, next) => {
  console.log(`
method: ${req.method}
path: ${req.path}
time: ${req.requestTime}`);
  next();
};

const randNumLog = (req, res, next) => {
  console.log(faker.random.number());
  next();
};

const notFoundHandler = (req, res, next) => {
  res.status(404).send('Not found');
};

app.use(recordTime);
app.use(logger);

app.get('/a', (req, res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req, res) => {
  res.status(200).send('Route B');
});

app.get('/c', randNumLog, (req, res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req, res) => {
  res.status(200).send('Route D');
});

app.use('*', notFoundHandler);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('There was a server error');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

