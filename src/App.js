import React from "react";
import Drums from "./drums";
import Pianos from "./pianos";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.volumeHandler = this.volumeHandler.bind(this);
    this.noteHandler = this.noteHandler.bind(this);
    this.state = {
      volume: 0.5,
      note: ""
    };
  }

  volumeHandler(e) {
    this.setState({ volume: e.target.value });
  }
  noteHandler(n) {
    this.setState({ note: n });
  }
  render() {
    [].slice.call(document.getElementsByClassName("sound")).forEach(element => {
      element.volume = this.state.volume;
    });
    return (
      <div>
        <div id="drum-machine">
          <div id="display">
            <div className="stateBar">{this.state.note}</div>
            <div className="volume">
              <input
                type="range"
                onChange={this.volumeHandler}
                min="0"
                max="1"
                step="0.01"
                value={this.state.volume}
              />
            </div>
          </div>
          <div id="drums">
            <Drums note={this.noteHandler} />
            <Pianos note={this.noteHandler} />
          </div>
        </div>
        <div id="name"><a href="https://github.com/yrufai" >YAKUBU AHMED EL-RUFAI</a></div>
        </div>
    );
  }
}

export default App;
