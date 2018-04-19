const {models} = require('../../models');

module.exports = {
  task(root, {id}) {
    return models.Task.findById(id);
  },
  tasks() {
    return models.Task.all();
  },
  user(root, {id}) {
    return models.User.findById(id);
  },
  users() {
    return models.User.all();
  },
  todo(root, {id}) {
    return models.Todo.findById(id);
  },
  todos() {
    return models.Todo.all();
  }
};
