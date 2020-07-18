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
          <div id="personal-info" className="border col-sm-4">
            <div className="row d-flex justify-content-center">
              <img src={angelo} alt="angelo" width="150px" height="150px" />
            </div>
            <div className="row info">
              <div>
                <p>Angelo Rosace</p>
                <p>31 . 12 . 1996</p>
                <p>Italian based in Barcelona</p>
                <p>Freelance Illustrator</p>
                <p>Master student in Bioinformatics for Health Science</p>
              </div>
            </div>
          </div>
          <div id="project" className="col-sm-8">
            <div className="row border">
              <h1>The project</h1>
            </div>
            <div className="blank" />
            <div className="row">
              <div className="col-sm-6">
                <Iframe url="https://open.spotify.com/embed/artist/0QWrMNukfcVOmgEU0FEDyD" className="playlist" height="380" allowtransparency="true" allow="encrypted-media"/>
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
