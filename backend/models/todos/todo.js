// Import the sequelize instance
const sequelize = require('./index');

// Define the Todo model
const Todo = sequelize.define('Todo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  completed: Sequelize.BOOLEAN,
});

// Sync the Todo model with the database
Todo.sync();

module.exports = Todo;
