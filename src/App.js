import React from 'react';
import logo from './public/logo/logo_black.svg';
import './App.css';

import NavbarDefault from './components/navbar/navbar_default'

function App() {
  return (
    <div className="container">
      <NavbarDefault />
      <div className="row">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
