import React, {Component} from "react";
import "./ChatInput.sass"
import { BoxArrowInRight } from 'react-bootstrap-icons';

class ChatInput extends Component{
    constructor(props) {
        super(props);
        this.btnHand = this.btnHand.bind(this)
        this.inputHand = this.inputHand.bind(this)
    }
    btnHand(){
        let text = document.querySelector("#inpt")
        this.props.send(text.value)
        text.value = ""
    }

    inputHand(event){
        if (event.code === "Enter"){
            let text = document.querySelector("#inpt")
            this.props.send(text.value)
            text.value = ""
        }

    }
    render() {
        return (
            <div className="ChatInput">
                <input id="inpt" onKeyDown={this.inputHand} placeholder="Type your message..."/>
                <div id="btn" onClick={this.btnHand}><BoxArrowInRight className="btn_send"/></div>
            </div>
        );
    }
}

export default ChatInput;