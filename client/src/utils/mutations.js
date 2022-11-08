// Importing gql from @apollo/client
import { gql } from "@apollo/client";

// LOGIN_USER mutation
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// ADD_USER mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, password: $password, email: $email)
    token
    user {
      _id
      username
    }
  }
`;

// SAVE_BOOK mutation
export const SAVE_BOOK = gql`
  mutation saveBook($input: bookInput) {
    saveBook(input: $bookInput) {
      _id
      username
      email
      bookcount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

// REMOVE_BOOK mutation
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
