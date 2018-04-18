const {models} = require('../../models');

module.exports = {
  task(root, {id}) {
    return models.Task.findById(id);
  },
  tasks(root, args, context) {
    return models.Task.findAll(args, context);
  },
  user(root, {id}) {
    return models.User.findById(id);
  },
  users(root, args, context) {
    return models.User.findAll({}, context);
  },
  todo(root, {id}) {
    return models.Todo.findById(id);
  },
  todos(root, args, context) {
    // offset не давал выводить первую комнату =/
    // добавил сортировку по убыванию
    return models.Todo.findAll({}, context);
  }
};
