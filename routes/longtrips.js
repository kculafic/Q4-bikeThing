'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router();


const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    next();
  });
};


router.get('/longtrips', authorize, (_req, res, next) => {
  knex('longtrips')
    .orderBy('id')
    // .orderBy('trip_name')
    .then((rows) => {
      const longtrips = camelizeKeys(rows);

      res.send(longtrips);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/longtrips/:id', authorize, (req, res, next) => {
    knex('longtrips')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const trip = camelizeKeys(row);

      res.send(trip);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/longtrips', authorize, (req, res, next) => {
  const { tripName, origin, destination, year } = req.body;

  if (!tripName || !tripName.trim()) {
    return next(boom.create(400, 'Trip must have a name!'));
  }

  if (!origin || !origin.trim()) {
    return next(boom.create(400, 'Origin must not be blank'));
  }

  if (!destination || !destination.trim()) {
    return next(boom.create(400, 'Destination must not be blank'));
  }

  if (!year || !year.trim()) {
    return next(boom.create(400, 'Year must not be blank'));
  }

  const insertTrip = { tripName, origin, destination, year };

  knex('longtrips')
    .insert(decamelizeKeys(insertTrip), '*')
    .then((rows) => {
      const trip = camelizeKeys(rows[0]);

      res.send(trip);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/longtrips/:id', authorize, (req, res, next) => {
  knex('longtrips')
    .where('id', req.params.id)
    .first()
    .then((trip) => {
      if (!trip) {
        throw boom.create(404, 'Not Found');
      }

      const { tripName, origin, destination, year  } = req.body;
      const updateTrip = {};

      if (tripName) {
        updateTrip.tripName = tripName;
      }

      if (origin) {
        updateTrip.origin = origin;
      }

      if (destination) {
        updateTrip.destination = destination;
      }

      if (year) {
        updateTrip.year = year;
      }

      return knex('longtrips')
        .update(decamelizeKeys(updateTrip), '*')
        .where('id', req.params.id);
    })
    .then((rows) => {
      const trip = camelizeKeys(rows[0]);

      res.send(trip);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/longtrips/:id', (req, res, next) => {
  let trip;

  knex('longtrips')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      trip = camelizeKeys(row);

      return knex('longtrips')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete trip.id;

      res.send(trip);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
