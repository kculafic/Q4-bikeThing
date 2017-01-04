
exports.up = function(knex) {
  return knex.schema.table('routes_segments', function (t) {
    t.renameColumn('trip_id', 'longtrips_id');
  });
};

exports.down = function(knex) {

};
