import React from "react";

class Piano extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress)
    }

    handleClick(){
        const audio = document.getElementById(this.props.keyPress);
        audio.currentTime = 0;
        audio.play();
        this.props.note(this.props.clipId)
    }

    handleKeyPress(a){
        if(a.keyCode === this.props.keyCode){
            this.handleClick();
        }
    }
    render(){
        return(
            <div onClick={this.handleClick} className={this.props.klass}>
            {this.props.keyPress}
                <audio className="sound" id={this.props.keyPress}>
                    <source src={this.props.url} type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}
export default Piano;