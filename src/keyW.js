import React from "react";
import soundFile2 from "./audio/cymbal8.mp3";

function KeyW(props) {
    return (
        <div>
            <audio id="keyw"><source src={soundFile2} type="audio/mpeg" ></source></audio>
            <button className="drum-pad" id="W" onClick={props.clickedw}>W</button>
        </div>
    )
}
export default KeyW;
