import React, { Component } from 'react';
import './App.scss';
import AudioFiles from "./AudioFiles";
import $ from "jquery";


class App extends Component {

  keyPress(event) {
    let upCase = event.key.toUpperCase()
    let getId = document.getElementById(upCase);
    $(getId).toggleClass("active");

    if (event.key === "q" || event.key === "Q") {
      return document.getElementById("keyq").play()
    } else if (event.key === "w" || event.key === "W") {
      return document.getElementById("keyw").play()
    } else if (event.key === "e" || event.key === "E") {
      return document.getElementById("keye").play()
    } else if (event.key === "a" || event.key === "A") {
      return document.getElementById("keya").play()
    } else if (event.key === "s" || event.key === "S") {
      return document.getElementById("keys").play()
    } else if (event.key === "d" || event.key === "D") {
      return document.getElementById("keyd").play()
    } else if (event.key === "z" || event.key === "Z") {
      return document.getElementById("keyz").play()
    } else if (event.key === "x" || event.key === "X") {
      return document.getElementById("keyx").play()
    } else if (event.key === "c" || event.key === "C") {
      return document.getElementById("keyc").play()
    } else return null;
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