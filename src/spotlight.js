import React, {Component} from 'react';
import './spotlight.css';

import NavbarDefault from './components/navbar/navbar_default';
import { Redirect } from 'react-router-dom';

var data = require('./public/descriptions.json');

const pre_src_squared= "./public/photos/"
const pre_src_non_squared= "./public/spot/"

class Spotlight extends Component {
  constructor(props) {
    super(props);

    this.state = {src: ""};

    this.get_image = this.get_image.bind(this);
    this.get_photo_title = this.get_photo_title.bind(this);
    this.get_photo_description = this.get_photo_description.bind(this);
  }

  get_image(src){
    var splitted_src = src.split("/")
    if(splitted_src[2].includes("non_squared")){
      var src_post= splitted_src[2].split(".");
      var src_post_name = src_post[0];
      src_post_name = src_post_name.split("_").slice(0,-2).join("_")
      var src_post_ext = src_post[1];
      return(pre_src_non_squared+src_post_name+"_squared."+src_post_ext)
    } else if (splitted_src[2] == "portfolio"){
        return("redirect")
    } else {
      return(pre_src_squared+splitted_src[2])
    }
  }

  get_photo_title(src){
    var arr = src.split("/")
    arr = arr.pop().split(".")
    return(data[arr[0]]["title"])
  }

  get_photo_description(src){
    var arr = src.split("/")
    arr = arr.pop().split(".")
    return(data[arr[0]]["description"])
  }

  render(){
    if (this.get_image(this.props.match.url) == "redirect") {
        return(<Redirect to={{ pathname: "/portfolio"}}/>)
    }
    return (
      <div className="container-fluid">
      <div className="container">
        <NavbarDefault />
      </div>
      <div className="container-fluid">
        <div className="row space"></div>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="row h-100">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                  <span className="helper" />
                  <img className="spotlight_photo rounded" src={require(""+this.get_image(this.props.match.url))} alt="spotlight_photo"/>
                </div>
                <div className="col-lg-3">
                  <div className="card borders border-bottom-0 border-left-0 photo_description">
                    <div className="card-body">
                      <h5 className="card-title">{this.get_photo_title(this.props.match.url)}</h5>
                      <p className="card-text">{this.get_photo_description(this.props.match.url)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
      </div>
      </div>
    )
  }
}

export default Spotlight;
