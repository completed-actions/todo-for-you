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
    createAt: Sequelize.DATE
  });

  const Task = sequelize.define('Task', {
    title: Sequelize.STRING,
    isComplete: Sequelize.BOOLEAN
  });

  User.belongsToMany(User, {as: 'Friend', through: 'User_Friends'});
  Todo.belongsTo(User);
  Task.belongsTo(Todo);

  return {
    User, Todo, Task
  };
};
