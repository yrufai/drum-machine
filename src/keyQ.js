import React from "react";
import soundFile1 from "./audio/clap.mp3";

function KeyQ(props) {
    return (
        <div>
            <audio id="keyq"><source src={soundFile1} type="audio/mpeg" ></source></audio>
            <button className="drum-pad" id="Q" onClick={props.clickedq}>Q</button>
        </div>
    )
}
export default KeyQ;