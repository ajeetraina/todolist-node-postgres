const Sequelize = require('sequelize');
const sequelize = require('../index');

const Todo = sequelize.define('Todo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  completed: Sequelize.BOOLEAN,
}, {});

module.exports = Todo;
