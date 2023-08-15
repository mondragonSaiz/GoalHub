import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        secondName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;
