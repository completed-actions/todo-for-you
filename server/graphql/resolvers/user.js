module.exports = {
    friends(user) {
        return user.getFriends();
    },
    todos(user) {
        return user.getTodos();
    }
};
