import React, { Component } from 'react';
import './App.css';
import CoolImageWithBoxButtons from './components/CoolImageWithBoxButtons'

class App extends Component {
  render() {
    return (
      <div className="App">
      <CoolImageWithBoxButtons/>
        {/* <img src={require("./images/IMG_4175.JPG")} alt="no" style={{transform: "rotate(90deg)"}}></img>
        <TopBoxButton
          size={430}
          style={
            {
              position: "absolute",
              transform: "translate(1540px, -1335px)"
            }
          }
        >Work</TopBoxButton> */}
      </div>
    );
  }
}

export default App;
