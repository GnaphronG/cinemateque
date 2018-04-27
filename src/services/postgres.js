const Sequelize = require('sequelize');
const logger = require('../lib/logger');
const {
  services: { postgres: config },
} = require('config');
const sequelize = new Sequelize(
  Object.assign({ logging: logger.debug.bind(logger) }, config)
);

module.exports = { health: sequelize.authenticate.bind(sequelize) };
