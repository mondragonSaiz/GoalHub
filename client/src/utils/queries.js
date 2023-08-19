import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      name
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

export const QUERY_ME = gql`
  query me {
    me {
      area {
        name
        _id
      }
      userIcon
      isEmployee
      firstName
      lastName
      tasks {
        isCompleted
        name
        taskDesc
        createdAt
      }
    }
  }
`;

export const QUERY_AREA = gql`
query Area($id: ID!){
  area(_id: $id) {
    name
    users {
      firstName
      lastName
      tasks {
        createdAt
        name
        isCompleted
      }
    }
  }
}`;

export const QUERY_AREAS = gql`
  query Areas {
    areas {
      _id
      name
    }
  }
`;
