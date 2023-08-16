import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleUser($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      area
    }
  }
`;
