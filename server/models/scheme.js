const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    login: Sequelize.STRING,
    avatarUrl: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    birthday: Sequelize.STRING,
    sex: Sequelize.STRING,
    email: Sequelize.STRING,
    token: Sequelize.STRING
  });

  const Todo = sequelize.define('Todo', {
    title: Sequelize.STRING,
    priority: Sequelize.SMALLINT,
    createAt: Sequelize.INTEGER
  });

  const Task = sequelize.define('Task', {
    title: Sequelize.STRING,
    isComplete: Sequelize.BOOLEAN
  });

  User.belongsToMany(User, {as: 'Friends', through: 'User_Friends'});
  Todo.belongsTo(User, {onDelete: 'CASCADE'});
  User.hasMany(Todo);
  Task.belongsTo(Todo, {onDelete: 'CASCADE'});
  Todo.hasMany(Task);

  return {
    User, Todo, Task
  };
};
