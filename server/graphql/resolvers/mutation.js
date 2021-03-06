const {models} = require('../../models');

module.exports = {
  // User
  createUser(root, {input}) {
    return models.User.create(input);
  },

  removeUser(root, {id}) {
    return models.User.findById(id)
      .then((user) => user.destroy());
  },

  addFriendForUser(root, {userId, friendId}) {
    return Promise.all([
      models.User.findById(userId),
      models.User.findById(friendId)
    ]).then(([user, friend]) => {
      user.addFriend(friend.id);
      return user;
    });
  },

  // Todo
  createTodo(root, {userId, input}) {
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

  updateTodo(root, {id, input}) {
    return models.Todo.findById(id).then((todo) => {
      return todo.update(input);
    });
  },

  removeTodo(root, {id}) {
    return models.Todo.findById(id)
      .then((todo) => todo.destroy());
  },

  // Task
  createTask(root, {todoId, input}) {
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

  updateTask(root, {id, input}) {
    return models.Task.findById(id).then((task) => {
      return task.update(input);
    });
  },

  removeTask(root, {id}) {
    return models.Task.findById(id)
      .then((task) => task.destroy());
  }
};
