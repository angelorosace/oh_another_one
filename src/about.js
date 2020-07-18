import React, {Component} from 'react'

import './about.css'
import angelo from './public/materials/angelo.png'
import NavbarDefault from './components/navbar/navbar_default'
import Iframe from 'react-iframe'

import Goodreads from './goodreads.js';

class About extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="container">
        <NavbarDefault />
        <div className="blank" />
        <div className="row">
          <div id="personal-info" className="col-sm-12">
            <div className="row d-flex justify-content-center">
              <img src={angelo} alt="angelo" width="150px" height="150px" />
            </div>
        </div>
        </div>
        <div className="row">
          <div id="project" className="col-sm-12">
            <div className="row">
              <div className="hi">
                <p>Hi, I am Angelo, just <b>another</b> illustrator. I am italian but I currently live in Barcelona.
                I am a full time Bioinformatics Student and a freelance illustrator.</p>
              </div>
            </div>
            <div className="blank" />
            <div className="row">
              <div className="col-sm-6">
                <Iframe url="https://open.spotify.com/embed/artist/0QWrMNukfcVOmgEU0FEDyD" className="playlist" height="400px" allowtransparency="true" allow="encrypted-media"/>
              </div>
              <div className="goodshelf col-sm-6">
                <Goodreads />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
