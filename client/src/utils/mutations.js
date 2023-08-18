import { gql } from '@apollo/client';
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $isEmployee: Boolean!
    $email: String!
    $password: String!
    $area: ID!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      isEmployee: $isEmployee
      email: $email
      password: $password
      area: $area
    ) {
      token
      user {
        firstName
        email
        password
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        email
        isEmployee
      }
    }
  }
`;
export const ADD_TASK = gql`
  mutation addTask($name: String!, $taskDesc: String!, $isCompleted: Boolean!) {
    addTask (name: $name, taskDesc: $taskDesc, isCompleted: $isCompleted) {
      name 
      taskDesc
      createdAt
      isCompleted
      user {
        _id
        firstName
        lastName
        email 
        isEmployee
      }
    }
  }` 
