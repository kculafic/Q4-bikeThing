'use strict';

exports.seed = function(knex) {
  return knex('routes_segments').del()
    .then(() => {
      return knex('routes_segments').insert([{
        id: 1,
        trip_id: 1,
        date: '01/01/2017',
        origin: 'Bremerton, WA',
        destination: 'Twanoh State Park, WA',
        total_distance: '22',
        total_elevation: '725',
        waypoints: '',
      }, {
        id: 2,
        trip_id: 1,
        date: '01/02/2017',
        origin: 'Twanoh State Park, WA',
        destination: 'Elma, WA',
        total_distance: '42',
        total_elevation: '1083',
        waypoints: '',
      }, {
        id: 3,
        trip_id: 2,
        date: '01/02/2017',
        origin: 'Poulsbo, WA',
        destination: 'Port Angeles, WA',
        total_distance: '7',
        total_elevation: '900',
        waypoints: '',
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('routes_segments_id_seq', (SELECT MAX(id) FROM routes_segments));"
      );
    });
};
