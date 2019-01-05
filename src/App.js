import React, { Component } from "react";
import "./App.scss";
import AudioFiles from "./AudioFiles";
import $ from "jquery";

class App extends Component {
  keyPress(event) {
    let upCase = event.key.toUpperCase();
    let getId = document.getElementById(upCase);
    $(getId).toggleClass("active");

    if (event.key === "q" || event.key === "Q") {
      return document.getElementById("keyq").play();
    } else if (event.key === "w" || event.key === "W") {
      return document.getElementById("keyw").play();
    } else if (event.key === "e" || event.key === "E") {
      return document.getElementById("keye").play();
    } else if (event.key === "a" || event.key === "A") {
      return document.getElementById("keya").play();
    } else if (event.key === "s" || event.key === "S") {
      return document.getElementById("keys").play();
    } else if (event.key === "d" || event.key === "D") {
      return document.getElementById("keyd").play();
    } else if (event.key === "z" || event.key === "Z") {
      return document.getElementById("keyz").play();
    } else if (event.key === "x" || event.key === "X") {
      return document.getElementById("keyx").play();
    } else if (event.key === "c" || event.key === "C") {
      return document.getElementById("keyc").play();
    } else return null;
  }

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
          <div className="upper-drums">
            <button className="upper-buttons">1</button>
            <button className="upper-buttons">2</button>
            <button className="upper-buttons">3</button>
            <button className="upper-buttons">4</button>
            <button className="upper-buttons">5</button>
          </div>
          <div className="lower-drums">
            <button className="top-buttons">w</button>
            <button className="drum-pad" id="A" onClick={this.clickedq}>
              a
            </button>
            <button className="top-buttons">e</button>
            <button className="drum-pad" id="S" onClick={this.clickedw}>
              s
            </button>
            <button className="drum-pad" id="D" onClick={this.clickede}>
              d
            </button>
            <button className="top-buttons">t</button>
            <button className="drum-pad" id="F" onClick={this.clickeda}>
              f
            </button>
            <button className="top-buttons">y</button>
            <button className="drum-pad" id="G" onClick={this.clickeds}>
              g
            </button>
            <button className="top-buttons">u</button>
            <button className="drum-pad" id="H" onClick={this.clickedd}>
              h
            </button>
            <button className="drum-pad" id="J" onClick={this.clickedz}>
              j
            </button>
            <button className="top-buttons">o</button>
            <button className="drum-pad" id="K" onClick={this.clickedx}>
              k
            </button>
            <button className="top-buttons">p</button>
            <button className="drum-pad" id="L" onClick={this.clickedc}>
              l
            </button>
            <button className="drum-pad" id=";" onClick={this.clickedc}>
              ;
            </button>
          </div>
        </div>
        <div id="display">
        <input type="text-area"></input>
        <input type="range"></input>
        </div>
      </div>
    );
  }
}

export default App;
