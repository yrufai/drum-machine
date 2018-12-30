import React, { Component } from 'react';
import './App.scss';
import AudioFiles from "./AudioFiles";
import KeyQ from './keyQ';
import KeyW from './keyW';

class App extends Component {
  constructor(props) {
    super(props)
    this.keyPress = this.keyPress.bind(this);
    this.clickedq = this.clickedq.bind(this);
    this.clickedw = this.clickedw.bind(this);
    this.state = {
      keys: ["Q","W","E","A","S","D"],
      sounds: []
    }

  }

  keyPress(event) {
    console.log(event.key)
    let audio1 = document.getElementById("keyq");
    if(event.key === "q" || event.key === "Q"){
      audio1.play();
    }
  };
  clickedq(){
    let audio1 = document.getElementById("keyq");
    audio1.play();
  }
  clickedw(){
    let audio1 = document.getElementById("keyw");
    audio1.play();
  }
  clickede(){
    let audio1 = document.getElementById("keye");
    audio1.play();
  }
  clickeda(){
    let audio1 = document.getElementById("keya");
    audio1.play();
  }

  render() {

    return (
      <div id="drum-machine" onKeyPress={this.keyPress}>
        <div id="drums">
        <KeyQ  clickedq={this.clickedq} />
        <KeyW  clickedw={this.clickedw} />
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
