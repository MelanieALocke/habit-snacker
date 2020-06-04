import React from 'react';
import './App.css';

import NavBar from "./ui-components/NavBar.js";
import MainContent from "./ui-components/MainContent.js";


function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
