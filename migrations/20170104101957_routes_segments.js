exports.up = function(knex) {
  return knex.schema.createTable('routes_segments', (table) => {
    table.increments('id');
    table.integer('trip_id').notNullable().references('id').inTable('longtrips').index().onDelete('CASCADE');
    table.date('date');
    table.string('origin').notNullable().defaultTo('');
    table.string('destination').notNullable().defaultTo('');
    table.integer('total_distance').notNullable().defaultTo(0);
    table.integer('total_elevation').notNullable().defaultTo(0);
    table.text('waypoints').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('routes_segments');
};
