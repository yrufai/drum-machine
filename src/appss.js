import React, { Component } from "react";

import $ from "jquery";

class Appss extends Component {


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
      <div id="drum-machines" onKeyPress={this.keyPress}>
        <AudioFiles />
        <div id="drumsj">
          <div className="jupper-drums">
            <button className="upper-buttons">1</button>
            <button className="upper-buttons">2</button>
            <button className="upper-buttons">3</button>
            <button className="upper-buttons">4</button>
            <button className="upper-buttons">5</button>
          </div>
          <div className="lower-drumsj">
            <button className="top-buttonsj">w</button>
            <button className="drum-padj" id="A" onClick={this.clickedq}>
              a
            </button>
            <button className="top-buttonsj">e</button>
            <button className="drum-padj" id="S" onClick={this.clickedw}>
              s
            </button>
            <button className="drum-padj" id="D" onClick={this.clickede}>
              d
            </button>
            <button className="top-buttonsj">t</button>
            <button className="drum-padj" id="F" onClick={this.clickeda}>
              f
            </button>
            <button className="top-buttonsj">y</button>
            <button className="drum-padj" id="G" onClick={this.clickeds}>
              g
            </button>
            <button className="top-buttonsj">u</button>
            <button className="drum-padj" id="H" onClick={this.clickedd}>
              h
            </button>
            <button className="drum-padjj" id="J" onClick={this.clickedz}>
              j
            </button>
            <button className="top-buttons">o</button>
            <button className="drum-pad" id="K" onClick={this.clickedx}>
              k
            </button>
            <button className="top-buttonsj">p</button>
            <button className="drum-padj" id="L" onClick={this.clickedc}>
              l
            </button>
            <button className="drum-padj" id=";" onClick={this.clickedc}>
              ;
            </button>
          </div>
        </div>
        <div id="displayj">
        <input type="text-areaj"></input>
        <input type="range" id="range" min={0} max={100} step={1} onChange={()=>{
          const vlume = document.getElementById("rangej").value;
          document.querySelectorAll("audioj").forEach((a)=>{
            a.volume = 0.01 * vlume;
          })
        }}></input>
        </div>
      </div>
    );
  }
}

export default Appss;