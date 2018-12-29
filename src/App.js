import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.keyPress = this.keyPress.bind(this);
    
  }

  keyPress(key){
    let style = {
        background: "#FFF00"
    }
    document.querySelector("#Q").style = style
    console.log(key.key)
    };
  

  render() {
    
    return (
      <div id="drum-machine">
        <div id="drums">
          <button className="drum-pad" id="Q" href="#" onKeyPress={this.keyPress} onClick={yes=>{console.log('yes')}}>Q</button>
          <button className="drum-pad" id="W">W</button>
          <button className="drum-pad" id="E">E</button>
          <button className="drum-pad" id="A">A</button>
          <button className="drum-pad" id="S">S</button>
          <button className="drum-pad" id="D">D</button>
          <button className="drum-pad" id="Z">Z</button>
          <button className="drum-pad" id="X">X</button>
          <button className="drum-pad" id="C">C</button>
        </div>
        <div id="display"></div>
      </div>
    );
  }
}

export default App;
