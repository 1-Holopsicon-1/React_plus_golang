import React, {Component} from "react";
import {connect, sendMsg} from "./api";
import './App.css';
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHis/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";


class App extends Component{
constructor(props) {
    super(props);
    this.state = {
        chatHistory: []
    }
  }
    componentDidMount(){
        const array = new Uint32Array(1);
        let uid = window.crypto.getRandomValues(array)[0];
        sessionStorage.setItem("uid", uid);
        connect((data)=> {
            //console.log("New Mes", data)
            let {msg, uid} = JSON.parse(data)
            if (uid === undefined){
                uid = -1
            }
           // console.log("MSG UID",msg, uid)
            this.setState(prevState =>({
                chatHistory: [...this.state.chatHistory, {msg: msg, uid: uid}]
            }))
            //console.log(this.state);
        });
    }
  send(msg){
    sendMsg(msg);
  }
  render() {
    return (
      <div className={"App"}>
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
          {/*<button onClick={this.send}>Send</button>*/}
      </div>
    );
  }
}

export default App;
