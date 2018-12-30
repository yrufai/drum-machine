import React from "react";
import soundFile3 from "./audio/checkpoint-hit.mp3";
import soundFile4 from "./audio/clock.mp3";
import soundFile5 from "./audio/middle-bap.mp3";
import soundFile6 from "./audio/shortsaxish.mp3";
import soundFile7 from "./audio/smatter4-zap.mp3";
import soundFile8 from "./audio/tinynote.mp3";
import soundFile9 from "./audio/upbs3.mp3";

function AudioFiles(props) {
        return (
            <div>
                <audio id="keye"><source src={soundFile3} type="audio/mpeg" ></source></audio>
                <audio id="keya"><source src={soundFile4} type="audio/mpeg" ></source></audio>
                <audio id="keys"><source src={soundFile5} type="audio/mpeg" ></source></audio>
                <audio id="keyd"><source src={soundFile6} type="audio/mpeg" ></source></audio>
                <audio id="keyz"><source src={soundFile7} type="audio/mpeg" ></source></audio>
                <audio id="keyx"><source src={soundFile8} type="audio/mpeg" ></source></audio>
                <audio id="keyc"><source src={soundFile9} type="audio/mpeg" ></source></audio>
            </div>
        );
}
export default AudioFiles;
