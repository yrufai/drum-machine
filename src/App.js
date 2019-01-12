import React from "react";
import Drums from "./drums";
import Pianos from "./pianos"
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        <div id="drums">
            <Drums   />
            <Pianos />
        </div>
      </div>
    );
  }
}

export default App;
  