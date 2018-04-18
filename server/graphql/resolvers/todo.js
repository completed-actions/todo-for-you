module.exports = {
    user(todo) {
        return todo.getUser();
    },
    tasks(todo) {
        return todo.getTasks();
    }
};
