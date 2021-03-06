const config = require('@iteam/config')({
  file: `${__dirname}/../config.json`,
  defaults: {
    PORT: 4000,
    POSTGRES: {
      USER: 'iteamadmin',
      PASSWORD: 'adminadmin1337',
      DATABASE: 'rise',
      PORT: 5432,
      HOST: 'localhost',
      MAX: 20,
      timeout: 30000,
    },
    JWT_PRIVATE_KEY: 'jwtdevkey',
  },
})

export default {
  PORT: config.get('PORT'),
  POSTGRES: config.get('POSTGRES'),
  JWT_SECRET: config.get('jwtPrivateKey')
}