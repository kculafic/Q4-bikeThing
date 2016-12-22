
exports.up = function(knex) {
 return knex.schema.createTable('longtrips', (table) => {
   table.increments('id');
   table.string('trip_name');
   table.string('origin').notNullable().defaultTo('');
   table.string('destination').notNullable().defaultTo('');
   table.string('year');
  //  table.integer('total_distance').notNullable().defaultTo(0);
  //  table.integer('total_elevation').notNullable().defaultTo(0);
  //  table.text('waypoints').notNullable().defaultTo('');
  //  table.timestamps(true, true);
 });
};

exports.down = function(knex) {
 return knex.schema.dropTable('longtrips');
};
