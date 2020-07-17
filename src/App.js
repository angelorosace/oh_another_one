import React from 'react';
import logo from './public/logo/logo_black.svg';
import './App.css';

import NavbarDefault from './components/navbar/navbar_default'

function App() {
  return (
    <div className="container">
      <NavbarDefault />
      <div className="row">
        <div className="col-sm-3"></div>
        <span className="beta">This is a beta! the project, check my art, discover more about me</span>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App;
