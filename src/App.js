import React from 'react';
import logo from './public/logo/logo_black.svg';
import './App.css';

import {useSpring, animated, config} from 'react-spring';

import NavbarDefault from './components/navbar/navbar_default'
import title from './public/materials/titolo.svg'
import one from './public/logo/parti_black/1.svg'
import two from './public/logo/parti_black/2.svg'
import three from './public/logo/parti_black/3.svg'
import four from './public/logo/parti_black/4.svg'
import five from './public/logo/parti_black/5.svg'
import six from './public/logo/parti_black/6.svg'

function App() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <div id="first" className="container">
      <NavbarDefault />
      <div className="title row">
        <animated.img src={title} alt="title" width="100%" style={fade}/>
      </div>
      <div className="row">
        The Idea
      </div>
      <div className="row">
          <img src={logo} alt="logo" />
      </div>
      <div className="row">
        The Project
      </div>
    </div>
  );
}

export default App;
