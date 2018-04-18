module.exports = `
scalar Date

type User {
    id: ID!
    login: String!
    avatarUrl: String!
    firstName: String!
    lastName: String!
    birthday: String!
    sex: String!
    email: String!
    token: String!
    friends: [User]
    todos: [Todo]
}

input UserInput {
    login: String!
    avatarUrl: String!
    firstName: String!
    lastName: String!
    birthday: String!
    sex: String!
    email: String!
    token: String!
}

type Todo {
    id: ID!
    title: String!
    priority: Int
    createAt: Int!
    user: User!
    tasks: [Task]
}

input TodoInput {
    title: String!
    priority: Int
    createAt: Int!
}

type Task {
    id: ID!
    title: String!
    isComplete: Boolean!
}

input TaskInput {
    title: String!
    isComplete: Boolean!

}

type Query {
  user(id: ID!): User
  users: [User]
  todo(id: ID!): Todo
  todos: [Todo]
  task(id: ID!): Task
  tasks: [Task]
}

type Mutation {
  createUser(input: UserInput!): User
  removeUser(id: ID!): User



}

schema {
  query: Query
  mutation: Mutation
}
`;

// addFriendForUser(user: ID!, friend: ID!)
// createTodo(user: ID!, input: TodoInput!)
// createTask(todo: ID!, input: TaskInput!)
