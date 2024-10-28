// connection.js
const knex = require('knex')
const config = require('./knexfile.js')

const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = connection
