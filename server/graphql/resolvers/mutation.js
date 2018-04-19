const {models} = require('../../models');

module.exports = {
  // User
  createUser(root, {input}, context) {
    return models.User.create(input);
  },

  removeUser(root, {id}, context) {
    return models.User.findById(id)
      .then((user) => user.destroy());
  },

  addFriendForUser(root, {userId, friendId}, context) {
    return Promise.all([
      models.User.findById(userId),
      models.User.findById(friendId)
    ]).then(([user, friend]) => {
      user.addFriend(friend.id);
      return user;
    });
  },

  // Todo
  createTodo(root, {userId, input}, context) {
    return models.User.findById(userId).then((user) => {
      return Promise.all([
        user,
        models.Todo.create(input)
      ]);
    }).then(([user, todo]) => {
      user.addTodo(todo);
      return todo;
    });
  },

  updateTodo(root, {id, input}, context) {
    return models.Todo.findById(id).then((todo) => {
      return todo.update(input);
    });
  },

  removeTodo(root, {id}, context) {
    return models.Todo.findById(id)
      .then((todo) => todo.destroy());
  },

  // Task
  createTask(root, {todoId, input}, context) {
    return models.Todo.findById(todoId).then((todo) => {
      return Promise.all([
        todo,
        models.Task.create(input)
      ]);
    }).then(([todo, task]) => {
      todo.addTask(task);
      return task;
    });
  },

  updateTask(root, {id, input}, context) {
    return models.Task.findById(id).then((task) => {
      return task.update(input);
    });
  },

  removeTask(root, {id}, context) {
    return models.Task.findById(id)
      .then((task) => task.destroy());
  }
};
