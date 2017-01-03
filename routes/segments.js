'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/segments', (_req, res, next) => {
  knex('routes_segments')
    .orderBy('id')
    // .orderBy('trip_name')
    .then((rows) => {
      const segments = camelizeKeys(rows);

      res.send(segments);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/segments/:id', (req, res, next) => {
    knex('routes_segments')
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

router.post('/segments', (req, res, next) => {
  const { date, origin, destination, totalDistance, totalElevation, waypoints } = req.body;

  const segment = { date, origin, destination, totalDistance, totalElevation, waypoints };

  knex('routes_segments')
    .insert(decamelizeKeys(segment), '*')
    .then((rows) => {
      const insertSegment = camelizeKeys(rows[0]);

      res.send(insertSegment);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/segments/:id', (req, res, next) => {
  knex('routes_segments')
    .where('id', req.params.id)
    .first()
    .then((trip) => {
      if (!trip) {
        throw boom.create(404, 'Not Found');
      }

      const { date, origin, destination, distance  } = req.body;
      const updateTrip = {};

      if (date) {
        updateTrip.date = date;
      }

      if (origin) {
        updateTrip.origin = origin;
      }

      if (destination) {
        updateTrip.destination = destination;
      }

      if (distance) {
        updateTrip.distance = distance;
      }

      return knex('routes_segments')
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

router.delete('/segments/:id', (req, res, next) => {
  let trip;

  knex('routes_segments')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      trip = camelizeKeys(row);

      return knex('routes_segments')
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
