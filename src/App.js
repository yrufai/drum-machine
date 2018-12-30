import React, { Component } from 'react';
import './App.scss';
import AudioFiles from "./AudioFiles";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keys: ["Q", "W", "E", "A", "S", "D"],
      sounds: []
    }

  }

  keyPress(event) {
    console.log(event.key)
    let audio1 = document.getElementById("keyq");
    if (event.key === "q" || event.key === "Q") {
      audio1.play();
    }
  };
  clickedq() {
    let audio1 = document.getElementById("keyq");
    audio1.play();
  }
  clickedw() {
    let audio1 = document.getElementById("keyw");
    audio1.play();
  }
  clickede() {
    let audio1 = document.getElementById("keye");
    audio1.play();
  }
  clickeda() {
    let audio1 = document.getElementById("keya");
    audio1.play();
  }
  clickeds() {
    let audio1 = document.getElementById("keys");
    audio1.play();
  }
  clickedd() {
    let audio1 = document.getElementById("keyd");
    audio1.play();
  }
  clickedz() {
    let audio1 = document.getElementById("keyz");
    audio1.play();
  }
  clickedx() {
    let audio1 = document.getElementById("keyx");
    audio1.play();
  }
  clickedc() {
    let audio1 = document.getElementById("keyc");
    audio1.play();
  }

  render() {

    return (
      <div id="drum-machine" onKeyPress={this.keyPress}>
      <AudioFiles />
        <div id="drums">
          <button className="drum-pad" id="Q" onClick={this.clickedq}>Q</button>
          <button className="drum-pad" id="W" onClick={this.clickedw}>W</button>
          <button className="drum-pad" id="E" onClick={this.clickede}>E</button>
          <button className="drum-pad" id="A" onClick={this.clickeda}>A</button>
          <button className="drum-pad" id="S" onClick={this.clickeds}>S</button>
          <button className="drum-pad" id="D" onClick={this.clickedd}>D</button>
          <button className="drum-pad" id="Z" onClick={this.clickedz}>Z</button>
          <button className="drum-pad" id="X" onClick={this.clickedx}>X</button>
          <button className="drum-pad" id="C" onClick={this.clickedc}>C</button>
        </div>
        <div id="display"></div>
      </div>
    );
  }
}

export default App;
