import React from "react";
// Changed Switch to Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
// Importing ApolloClient, InMemoryCache, ApolloProvider, createHttpLink from @apollo/client
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
// Importing setContext from @apollo/client/link/context
import { setContext } from "@apollo/client/link/context";

// Constructing the GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Constructing request middleware that attaches the JWT token to requests as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // Gets the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // Returns the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Sets up our client to execute the `authLink` middleware before making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Added the ApolloProvider
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<SearchBooks />} />
            <Route path="/saved" element={<SavedBooks />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
