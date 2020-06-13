/* eslint-disable no-restricted-syntax */
const http = require('http');
const moment = require('moment');
const app = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on ${port}`));
