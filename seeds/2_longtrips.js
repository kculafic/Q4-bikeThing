'use strict';

exports.seed = function(knex) {
  return knex('longtrips').del()
    .then(() => {
      return knex('longtrips').insert([{
        id: 1,
        trip_name: 'Pacific Coast',
        origin: 'Seattle, WA',
        destination: 'San Francisco, CA',
        year: '2015',
      }, {
        id: 2,
        trip_name: 'Atlantic Coast',
        origin: 'Portland, ME',
        destination: 'Miami, FL',
        year: '2016',
      }, {
        id: 3,
        trip_name: 'Northern Tier',
        origin: 'Seattle, WA',
        destination: 'New York City',
        year: '2017',
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('longtrips_id_seq', (SELECT MAX(id) FROM longtrips));"
      );
    });
};
