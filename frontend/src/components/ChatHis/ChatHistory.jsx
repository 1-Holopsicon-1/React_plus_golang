import React, { Component } from "react"
import "./ChatHS.sass"
import Message from "../Message/Message";

class ChatHS extends Component{
    render(){
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);
        return(
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    };
}
export default ChatHS;