import "./App.css";
import React from "react";
import BookList from "./components/BookList/BookList";
import AuthorList from "./components/AuthorList/AuthorList";
import AddBook from "./components/BookList/AddBook";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <BookList />
        <AuthorList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
