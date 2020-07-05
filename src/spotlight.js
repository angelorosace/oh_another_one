import React, {Component} from 'react';
import './spotlight.css';

import NavbarDefault from './components/navbar/navbar_default';

var data = require('./public/descriptions.json');
var src = "";

class Spotlight extends Component {
  constructor(props) {
    super(props);

    this.state = {src: ""};

    this.get_image = this.get_image.bind(this);
    this.get_photo_title = this.get_photo_title.bind(this);
    this.get_photo_description = this.get_photo_description.bind(this);
  }

  componentDidMount() {
      try{
        src = this.props.location.propsSpotlight.src
        sessionStorage.setItem('src', src);
        this.setState({src: src});
      } catch(e) {
        this.setState({src: sessionStorage.getItem('src')});
      }
  }

  get_image(src){
    if(src.includes("non_squared")){
      var src_splitted = src.split("/");
      var src_pre = src_splitted.slice(0,2).join("/")
      var src_post= src_splitted[3].split(".");
      var src_post_name = src_post[0];
      src_post_name = src_post_name.split("_").slice(0,-2).join("_")
      var src_post_ext = src_post[1];
      return(src_pre+"/spot/"+src_post_name+"_squared."+src_post_ext);
    } else {
        return(src);
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
                  <img className="spotlight_photo rounded" src={require(""+this.get_image(sessionStorage.getItem('src')))} alt="spotlight_photo"/>
                </div>
                <div className="col-lg-3">
                  <div className="card photo_description">
                    <div className="card-body">
                      <h5 className="card-title">{this.get_photo_title(sessionStorage.getItem('src'))}</h5>
                      <p className="card-text">{this.get_photo_description(sessionStorage.getItem('src'))}</p>
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
