const path = require('path');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/test_chinchay',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/test'),
    },
    acquireConnectionTimeout: 10000,
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres:12345@localhost/fablab',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/development'),
    },
    acquireConnectionTimeout: 10000,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/test_chinchay',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/production'),
    },
    acquireConnectionTimeout: 10000,
  },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/test_chinchay',
    migrations: {
      directory: path.join(__dirname, '/database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/database/seeds/production'),
    },
    acquireConnectionTimeout: 10000,
  },
};
