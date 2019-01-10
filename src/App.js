import React from "react";
import Drums from "./drums";
import "./App.scss";

class App extends React.Component {

  render() {
    return (
      <div id="drum-machine">
        <div id="displays"></div>
        <div id="drums">
            <Drums   />
        </div>
      </div>
    );
  }
}

export default App;
  