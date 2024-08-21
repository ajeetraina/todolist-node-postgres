const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.default.database, config.default.username, config.default.password, {
  host: config.default.host,
  dialect: 'postgres', // Explicitly specify the dialect as 'postgres'
});

module.exports = sequelize;