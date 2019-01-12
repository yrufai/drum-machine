import React from "react";

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.handlekeyPress = this.handlekeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handlekeyPress);
  }
  handleClick() {
    const audio = document.getElementById(this.props.keyPress);
    audio.currentTime = 0;
    audio.play();
  }
  handlekeyPress(e) {
       
    if (e.keyCode === this.props.keyCode) {
      this.handleClick();
    }
  }
  render() {
    return (
      <div onClick={this.handleClick} className="upper-buttons" >{this.props.keyPress}
        <audio  id={this.props.keyPress} >
          <source src={this.props.url} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}
export default Drum;
