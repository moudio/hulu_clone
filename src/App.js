import React from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav';
import Results from './Results';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export default App;
