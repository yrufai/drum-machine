import React from "react";
import Piano from "./piano";

const pianoNotes = [
    {
    keyCode: 65,
    keyPress: 'a',
    id: 'C',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note1o.mp3",
    class: "white "
  },{
    keyCode: 87,
    keyPress: 'w',
    id: 'C#',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note2o.mp3",
    class: "black w"
  },{
    keyCode: 83,
    keyPress: 's',
    id: 'D',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note3o.mp3",
    class: "white"
  },{
    keyCode: 69,
    keyPress: 'e',
    id: 'D#',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note4o.mp3",
    class: "black e"
  },{
    keyCode: 68,
    keyPress: 'd',
    id: 'E',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note5o.mp3",
    class: "white"
  },{
    keyCode: 70,
    keyPress: 'f',
    id: 'F',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note6o.mp3",
    class: "white"
  },{
    keyCode: 84,
    keyPress: 't',
    id: 'F#',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note7o.mp3",
    class: "black t"
  },{
    keyCode: 71,
    keyPress: 'g',
    id: 'G',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note8o.mp3",
    class: "white"
  },{
    keyCode: 89,
    keyPress: 'y',
    id: 'G#',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note9o.mp3",
    class: "black y"
  },{
    keyCode: 72,
    keyPress: 'h',
    id: 'A',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note10o.mp3",
    class: "white"
  },{
    keyCode: 85,
    keyPress: 'u',
    id: 'A#',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note11o.mp3",
    class: "black u"
  },{
    keyCode: 74,
    keyPress: 'j',
    id: 'B',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note12o.mp3",
    class: "white"
  },{
    keyCode: 75,
    keyPress: 'k',
    id: 'High C',
    url: "http://www.telacommunications.com/nutshell/music/sounds-mp3/note1t.mp3",
    class: "white"
  },{
    keyCode: 79,
    keyPress: 'o',
    id: 'High C#',
    url:"http://www.telacommunications.com/nutshell/music/sounds-mp3/note2t.mp3",
    class: "black o"
  },{
    keyCode: 76,
    keyPress: 'l',
    id: 'High D',
    url:"http://www.telacommunications.com/nutshell/music/sounds-mp3/note3t.mp3",
    class: "white"
  },{
    keyCode: 80,
    keyPress: 'p',
    id: 'High D#',
    url:"http://www.telacommunications.com/nutshell/music/sounds-mp3/note4t.mp3",
    class: "black p"
  },{
    keyCode: 186,
    keyPress: ';',
    id: 'High E',
    url:"http://www.telacommunications.com/nutshell/music/sounds-mp3/note5t.mp3",
    class: "white"
  }]

  class Pianos extends React.Component{
      render(){
          return(
              <div className="lower-drums">
              {pianoNotes.map(a=>(
                  <Piano note={this.props.note} clipId={a.id} key={a.id} keyCode={a.keyCode} url={a.url} keyPress={a.keyPress} klass={a.class} />
              )) }
              </div>
          )
      }
  }

export default Pianos;















