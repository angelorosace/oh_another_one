import React from 'react';
import logo from './public/logo/logo_black.svg';
import './App.css';

import {useSpring, animated, config} from 'react-spring';
import VisibilitySensor from "./components/visibilitySensor";
import { Spring } from "react-spring/renderprops";

import NavbarDefault from './components/navbar/navbar_default'
import title from './public/materials/titolo.svg'
import one from './public/logo/parti_black/1.svg'
import two from './public/logo/parti_black/2.svg'
import three from './public/logo/parti_black/3.svg'
import four from './public/logo/parti_black/4.svg'
import five from './public/logo/parti_black/5.svg'
import six from './public/logo/parti_black/6.svg'

function App() {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


  const fade = useSpring({
    config: {
      duration: 1500
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <div id="first" className="container-fluid">
      <div id="first" className="container">
        <NavbarDefault />
        <div className="title row">
          <animated.img src={title} alt="title" width="100%" style={fade}/>
        </div>
      </div>
      <div id="second" className="container-fluid">
        <div id="second" className="row">
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => <div style={{ opacity }} className="idea"><span>The Idea</span></div>}
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div id="second" className="blank row" />
        <div id="second" className="row">
          <div className="a d-flex justify-content-center">
          <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={600} from={{opacity: 1}} to={{opacity: isVisible ? 0 : 1}}>
                {({ opacity}) => <img style={{opacity}} src={logo} alt="logo" height="300"/>}
            </Spring>
          )}
          </VisibilitySensor>
          </div>
          <div className="tmp-cont tmp">
          <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={1000} from={{x: '0px', y:'0px'}} to={{opacity: isVisible ? 1 : 0, x:''+(window.innerWidth-(2*(window.innerWidth/7))), y:'0px'}}>
                {({ opacity, x, y }) => <img style={{opacity, transform:'translate3d('+x+',0,0) translate3d(0,'+y+',0)'}} className="tmp" src={five} alt="logo" height="300"/>}
            </Spring>
          )}
          </VisibilitySensor>
          </div>
          <div className="tmp-cont tmp">
          <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={1100} from={{x: '0px', y:'0px'}} to={{opacity: isVisible ? 1 : 0, x:''+(window.innerWidth-(3*(window.innerWidth/7))), y:'-25px'}}>
                {({ opacity, x, y }) => <img style={{opacity, transform:'translate3d('+x+',0,0) translate3d(0,'+y+',0)'}} className="tmp" src={four} alt="logo" height="300"/>}
            </Spring>
          )}
          </VisibilitySensor>
          </div>
          <div className="tmp-cont tmp">
          <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={1200} from={{x: '0px', y:'0px'}} to={{opacity: isVisible ? 1 : 0, x:''+(window.innerWidth-(4*(window.innerWidth/7))), y:'-50px'}}>
                {({ opacity, x, y }) => <img style={{opacity, transform:'translate3d('+x+',0,0) translate3d(0,'+y+',0)'}} className="tmp" src={three} alt="logo" height="300"/>}
            </Spring>
          )}
          </VisibilitySensor>
          </div>
          <div className="tmp-cont tmp">
          <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={1300} from={{x: '0px', y:'0px'}} to={{opacity: isVisible ? 1 : 0, x:''+(window.innerWidth-(5*(window.innerWidth/7))), y:'-100px'}}>
                {({ opacity, x, y }) => <img style={{opacity, transform:'translate3d('+x+',0,0) translate3d(0,'+y+',0)'}} className="tmp" src={two} alt="logo" height="300"/>}
            </Spring>
          )}
          </VisibilitySensor>
          </div>
          <div className="tmp-cont tmp">
          <VisibilitySensor>
          {({ isVisible }) => (
            <Spring delay={1400} from={{x: '0px', y:'0px'}} to={{opacity: isVisible ? 1 : 0, x:''+(window.innerWidth-(6*(window.innerWidth/7))), y:'-150px'}}>
                {({ opacity, x, y }) => <img style={{opacity, transform:'translate3d('+x+',0,0) translate3d(0,'+y+',0)'}} className="tmp" src={one} alt="logo" height="300"/>}
            </Spring>
          )}
          </VisibilitySensor>
          </div>
        </div>
      </div>
      <div id="second" className="blank row" />
    </div>
  );
}

export default App;
