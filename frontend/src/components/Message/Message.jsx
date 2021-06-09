import React, { Component } from "react";
import "./Message.sass"

class Message extends Component{
    render() {
        return <div id={this.props.dataId} className="Message">{this.props.message}</div>
    }
}

export default Message;