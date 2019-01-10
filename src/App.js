import React from "react";
import Drums from "./drums";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div id="drum-machine">
        <div id="display"></div>
        <div id="drums">
            <Drums  />
            1
        </div>
      </div>
    );
  }
}

export default App;
