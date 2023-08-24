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
      _id
      userIcon
      isEmployee
      firstName
      lastName
      email
      tasks {
        _id
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
      _id
      firstName
      userIcon
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
query areas{
  areas {
    _id
     name
    supervisor {
    firstName
    }
    users {
      firstName
      email
      tasks {
        isCompleted
        name
        createdAt
      }
    }
  }
}`;

export const QUERY_ALL_PRODUCTS = gql`
  query allProducts {
    products {
      _id
      name
      description
      price
      purchaseQuantity
    }
  }`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }`;
  
export const DEL_USER = gql`
mutation removeUser($userId: ID!) {
  removeUser(userId: $userId) {
    _id
    firstName
    lastName
    email
  }
}
`;

export const CHANGE_PSWD = gql`
mutation forgotPassword ($email: String!, $password: String!) {
  forgotPassword (email: $email, password: $password) {
    user {
      _id 
      firstName 
      lastName
      email
    }
    token
  }
}`