import { gql } from '@apollo/client';
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $isEmployee: Boolean!
    $email: String!
    $password: String!
    $area: ID!
    $userIcon: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      isEmployee: $isEmployee
      email: $email
      password: $password
      area: $area
      userIcon: $userIcon
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
  mutation addTask(
    $name: String!
    $taskDesc: String!
    $isCompleted: Boolean!
    $user: ID!
  ) {
    addTask(
      name: $name
      taskDesc: $taskDesc
      isCompleted: $isCompleted
      user: $user
    ) {
      name
      taskDesc
      isCompleted
      user {
        _id
        firstName
        lastName
        email
        isEmployee
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($taskId: ID!, $isCompleted: Boolean!) {
    updateTask(taskId: $taskId, isCompleted: $isCompleted) {
      name
      taskDesc
      isCompleted
      user {
        _id
        firstName
        lastName
        email
        isEmployee
      }
    }
  }
`;
