'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bikeThing_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/bikeThing_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
