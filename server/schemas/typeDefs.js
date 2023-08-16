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
    tasks: [Task]
  }

  type Area {
    _id: ID
    name: String
    supervisor: String
    progress: Int
    users: [User]
  }

  type Task {
    _id: ID
    name: String
    taskDesc: String
    createdAt: String
    isCompleted: Boolean
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(email: String!): User
    me: User
    areas: [Area]
    area(_id: ID): Area
    tasks: [Task]
    task(_id: ID): Task
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
    forgotPassword(email: String!, password: String!): Auth
    saveTask(taskDesc: String! , name: String!, isCompleted: Boolean!,  user:ID!): Task
    removeTask(taskId: ID!): User

  }
`;
module.exports = typeDefs;

