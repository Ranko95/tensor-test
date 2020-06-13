module.exports = (app) => {
  const express = require('express');
  const morgan = require('morgan');
  const path = require('path');

  app.use(morgan('dev'));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(express.static(path.join(__dirname, '..', 'public')));

};
