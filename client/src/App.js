import './App.css';
import React, { Component } from 'react';
import BookList from './components/BookList/BookList';
import AuthorList from './components/AuthorList/AuthorList';

function App() {
  return (
    <div className="main">
      <BookList />
      <AuthorList />
    </div>
  );
}

export default App;
