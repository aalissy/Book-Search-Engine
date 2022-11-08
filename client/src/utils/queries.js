// Importing gql from @apollo/client
import { gql } from "@apollo/client";

// GET_ME query
export const GET_ME = gql`
  {
    me {
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
