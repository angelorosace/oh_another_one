import React, {Component} from 'react';
import './navbar_default.css';
import {Link} from 'react-router-dom';

import logo from '../../public/logo/logo_black.svg';

class NavbarDefault extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler icona" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <img id="navbarlogo" src={logo} className="App-logo" alt="logo"/>
          <ul className="navbar-nav mr-aut navdef">
            <li className="nav-item">
              <Link to={"/"} id='link-txt' className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to={"portfolio"} id='link-txt' className="nav-link">Portfolio</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"about"} id='link-txt' className="nav-link right">About</Link>
            </li>
            <li className="nav-item">
              <Link to={"contact"} id='link-txt' className="nav-link right">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarDefault;
