const GraphQLDate = require('graphql-date');

const query = require('./query');
const mutation = require('./mutation');
const user = require('./user');
const todo = require('./todo');
const task = require('./task');

module.exports = {
  Query: query,
  Mutation: mutation,
  User: user,
  Todo: todo,
  Task: task,
  Date: GraphQLDate
};
