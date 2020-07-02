import React, {Component} from 'react';
import './photo.css';

class Photo extends Component{
  constructor(props) {
    super(props);

    this.setScale = this.setScale.bind(this);
  }

  setScale(){
    var scales = ["img20","img25","img30","img23", "img35"];
    return scales[Math.trunc(Math.random()*scales.length)]
  }

  render(){
    return(
       <img src={this.props.src} alt="photo" className={"photo rounded img-fluid "+this.setScale()}/>
    );
  }
}

export default Photo;
