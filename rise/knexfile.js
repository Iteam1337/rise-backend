// Update with your config settings.

module.exports = {
  client: 'pg',
  dev: {
    client: 'pg',
    connection: 'postgres://iteamadmin:adminadmin1337@localhost:5432/rise',
    seeds: {
      directory: __dirname + '/lib/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: __dirname + '/lib/seeds',
    },
  },
  prod: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: __dirname + '/lib/seeds',
    },
  },
}
