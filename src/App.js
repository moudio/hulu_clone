import React from 'react';
import Header from './Header';
import './App.css';
import Nav from './Nav';
import Results from './Results';
import { useState } from 'react';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
