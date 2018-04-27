const Sequelize = require('sequelize');
const { services: { postgres: config } } = require('config');
const sequelize = new Sequelize(config);

module.exports = { health: sequelize.authenticate.bind(sequelize) };
