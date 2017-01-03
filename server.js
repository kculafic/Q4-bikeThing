'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const users = require('./routes/users');
const jwt = require('jsonwebtoken');

// const routeSegments = require('./routes/routeSegments');
const token = require('./routes/token');
const longtrips = require('./routes/longtrips');
const segments = require('./routes/segments');



const port = process.env.PORT || 8000;

require('dotenv').config();

const path = require('path');
app.disable('x-powered-by');


app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));


app.use(users);
app.use(segments);
app.use(token);
app.use(longtrips);


app.get('env');
// app.use(express.static(path.join('public')));

// Expose public directory to client
app.use(express.static(path.join(__dirname, 'public')));

// Any other pages refer to index.html
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.use((err, _req, res, _next) => {
//   if (err.output && err.output.statusCode) {
//     return res
//       .status(err.output.statusCode)
//       .set('Content-Type', 'text/plain')
//       .send(err.message);
//   }
// });

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});

module.exports = app;
