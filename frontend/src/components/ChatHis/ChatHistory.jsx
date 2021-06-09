import React, { Component } from "react"
import "./ChatHS.sass"
import Message from "../Message/Message";

class ChatHS extends Component{
    render(){
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map(obj => {
            if (obj.msg.split(`"`)[1] === "type") {
                return <Message message={"User Joined"}/>
            } else {
                return <Message dataId={obj.msg.split(`"`)[7]} message={obj.msg.split(`"`)[3]}/>
            }

        });
        return(
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    };
}
export default ChatHS;