import React from "react";
import soundFile1 from "./audio/clap.mp3";
import soundFile2 from "./audio/upbs18.mp3";
import soundFile3 from "./audio/base4.mp3";
import soundFile4 from "./audio/sharp-hard-clap.mp3";
import soundFile5 from "./audio/pop-clap.mp3";
import soundFile6 from "./audio/shortsaxish.mp3";
import soundFile7 from "./audio/real-room-clap.mp3";
import soundFile8 from "./audio/chimmey.mp3";
import soundFile9 from "./audio/cymbal8.mp3";

function AudioFiles(props) {
    return (
        <div >
            <audio className="audio" id="keyw"><source src={soundFile2} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keyq"><source src={soundFile1} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keye"><source src={soundFile3} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keya"><source src={soundFile4} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keys"><source src={soundFile5} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keyd"><source src={soundFile6} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keyz"><source src={soundFile7} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keyx"><source src={soundFile8} type="audio/mpeg" ></source></audio>
            <audio className="audio" id="keyc"><source src={soundFile9} type="audio/mpeg" ></source></audio>
        </div>
    );
}
export default AudioFiles;
