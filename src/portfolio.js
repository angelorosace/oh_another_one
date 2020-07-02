import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import NavbarDefault from './components/navbar/navbar_default';
import logo from './public/logo/logo_white.svg';
import './portfolio.css';

import Photo from './components/photo/photo';

const photo_src = './public/photos/';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoArray : []
    };


    this.getPhotos = this.getPhotos.bind(this);
    this.updatePhotoArray = this.updatePhotoArray.bind(this);
    this.shuffle = this.shuffle.bind(this);

    this.updatePhotoArray(this.getPhotos(require.context('./public/photos', false, /\.(png|jpe?g|svg)$/)));
  }

  updatePhotoArray(images) {
    var src;
    var photos_src_as_of_now = [];
    images.forEach((item, i) => {
      var name_with_ext = item.split("/")[3];
      var splitted_name = name_with_ext.split(".");
      src = photo_src + splitted_name[0] + "." + splitted_name[splitted_name.length-1];
      photos_src_as_of_now.push(src);
    });

    this.state.photoArray = this.shuffle(photos_src_as_of_now);
  }

  shuffle(array) {
    return (array.sort(() => Math.random() - 0.5));
  }

  getPhotos(r) {
    return r.keys().map(r);
  }

  render() {
    return(
      <div className="container">
        <NavbarDefault />
        <div className="row">
          <div id="photos" className="col-sm-12 gallery">
          {
            this.state.photoArray.map((item,i) => {
              return(<Link to={{pathname:"/spotlight",
                                propsSpotlight:{
                                  src:item
                                }
                      }} key={i}>
                      <Photo src={require(""+item)} key={i} />
                    </Link>
              )
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
