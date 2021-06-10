import ChatHistory from "./components/ChatHis/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import Header from "./components/Header/Header";
import React, { Component } from "react";
import { connect, sendMsg } from "./api";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { chatHistory: [] }
  }

  componentDidMount() {
    const array = new Uint32Array(1);
    let uid = window.crypto.getRandomValues(array)[0]
    sessionStorage.setItem("uid", uid);
    
    connect((data) => {
      let { msg, uid } = JSON.parse(data)
      if (uid === undefined) { uid = -1 }

      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, { msg: msg, uid: uid }]
      }))
    })
  }

  send(msg) {
    sendMsg(msg);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <ChatHistory chatHistory={this.state.chatHistory} />
          <ChatInput send={this.send} />
        </main>
      </div>
    )
  }
}