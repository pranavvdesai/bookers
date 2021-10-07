import './App.css';
import React from 'react';
import BookList from './components/BookList/BookList';
import AuthorList from './components/AuthorList/AuthorList';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()

});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="main">
      <BookList />
      <AuthorList />
    </div>
    </ApolloProvider>
  );
}

export default App;
