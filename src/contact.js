import React, {Component} from 'react';

import './contact.css';
import NavbarDefault from './components/navbar/navbar_default';
import insta from './public/materials/instagram.png';
import gmail from './public/materials/gmail.png';

class Contact extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="container">
        <NavbarDefault />
        <div className="jumbotron contact">
        <h1 className="display-4">Oh, another one!</h1>
        <p className="lead">Born somewhere, raised in a bunch of different places</p>
        <p className="lead">
          <a id="link" href="https://www.instagram.com/oh_another_one/" role="button">
            <img src={insta} alt="instagram" width="32px" height="32px"/>
            <span className="link-span">oh_another_one</span>
          </a>
        </p>
        <p className="lead">
          <img src={gmail} alt="gmail" width="32px" height="32px"/>
          <span className="link-span">oh.another.one00@gmail.com</span>
        </p>
        </div>
      </div>
    )
  }
}

export default Contact
