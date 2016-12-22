
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('username').unique().notNullable().defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.specificType('hashed_password', 'char(60)');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
