import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImagelinkForm from './components/ImagelinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enabled: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super() 
    this.state = {
      inout: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImagelinkForm />
        {/*
      <facerecognition />
      */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Particles className='particles'
//       params={particlesOptions}/>
//       <Navigation />
//       <Logo />
//       <Rank />
//       <ImagelinkForm />
//       {/*
//       <facerecognition />
//       */}
//     </div>
//   );
// }

export default App;
