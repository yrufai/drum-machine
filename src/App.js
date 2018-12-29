import React, { Component } from 'react';
import './App.scss';
import soundFile1 from "./audio/clap.mp3";
import soundFile2 from "./audio/cymbal8.mp3";

class App extends Component {
  constructor(props) {
    super(props)
    this.keyPress = this.keyPress.bind(this);
    this.clickedd = this.clickedd.bind(this);
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
  clickedd(){
    let audio1 = document.getElementById("keyw");
    document.addEventListener("click", ()=>{
      if(document.querySelector("#W")){
        audio1.play();
      }
    });
  }

  render() {

    return (
      <div id="drum-machine" onKeyPress={this.keyPress}>
        <div id="drums">
          <audio id="keyq">
            <source src={soundFile1} type="audio/mpeg" ></source>
            <source src={soundFile1} type="audio/wav" ></source>
          </audio>
          <audio id="keyw">
            <source src={soundFile2} type="audio/mpeg" ></source>
            <source src={soundFile2} type="audio/wav" ></source>
          </audio>
          <button className="drum-pad" id="Q">Q</button>
          <button className="drum-pad" id="W" onClick={this.clickedd}>W</button>
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
