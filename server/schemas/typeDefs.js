const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    isEmployee: Boolean
    userIcon: String
    area: Area
    tasks: [Task]
  }

  type Area {
    _id: ID
    name: String
    supervisor: User
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

  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    purchaseQuantity: Int
  }

  type Order {
    _id: ID
    purchaseDate: String
    product: Product
  }

  type Checkout {
    session: ID
  }

  input ProductInput {
    _id: ID
    name: String
    description: String
    price: Float
    purchaseQuantity: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    areas: [Area]
    area(_id: ID!): Area
    tasks: [Task]
    task(_id: ID!): Task
    products: [Product]
    checkout(products: [ProductInput]): Checkout
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      isEmployee: Boolean!
      email: String!
      password: String!
      area: ID!
      userIcon: String!
    ): Auth
    login(email: String!, password: String!): Auth
    forgotPassword(email: String!, password: String!): Auth
    addTask(
      taskDesc: String!
      name: String!
      isCompleted: Boolean!
      user: ID!
    ): Task
    addArea(name: String!, supervisorID: ID): Area
    AddUserArea(area: ID!, user: ID!): User
    removeTask(taskId: ID!): User
    removeUser(userId: ID!): User
    removeArea(areaId: ID!): Area
    updateTask(taskId: ID!, isCompleted: Boolean!): Task
    # Testing
    # AddUserArea(area: ID!, user: ID!): User
    addOrder(products: [ID]!): Order
  }
`;
module.exports = typeDefs;
