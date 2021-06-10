import React, { Component } from "react"
import Message from "../Message/Message"
import "./ChatHS.sass"

export default class ChatHS extends Component {
    render() {
        const messages = this.props.chatHistory.map(obj => {
            if (obj.msg.split(`"`)[1] === "type") {
                return <Message message={"User Joined"} />
            } else {
                return <Message dataId={obj.msg.split(`"`)[7]} message={obj.msg.split(`"`)[3]} />
            }
        })

        return <div className="ChatHistory">{messages}</div>
    }
}