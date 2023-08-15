const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    isEmployee: Boolean
    progress: Int
    area: Area
  }

  type Area {
    _id: ID
    name: String
    supervisor: String
    progress: String
    users: [User]
  }

  type Task {
    _id: ID
    name: String
    taskDesc: String
    createdAt: String
    isCompleted: Boolean
    area: Area
    user: User
  }

  # input taskInput {
  #   # _id: ID
  #   name: String
  #   taskDesc: String
  #   createdAt: String
  #   isCompleted: Boolean
  #   user: User
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      isEmployee: Boolean!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    # saveTask(taskInfo: TaskInput!): User
    # removeTask(taskId: ID!): User
  }
`;

module.exports = typeDefs;
