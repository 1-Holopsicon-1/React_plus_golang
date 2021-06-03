import React, {Component} from "react";
import "./ChatInput.sass"

class ChatInput extends Component{
    render() {
        return (
            <div className={"ChatInput"}>
                <input onKeyDown={this.props.send} placeholder="Type your message..."/>
            </div>
        );
    }
}

export default ChatInput;