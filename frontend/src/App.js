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
        connect((msg)=> {
            console.log("New Mes")
            this.setState(prevState =>({
                chatHistory: [...this.state.chatHistory, msg]
            }))
            console.log(this.state);
        });
    }
  send(event){
    if(event.code === "Enter"){
        sendMsg(event.target.value);
        event.target.value = "";
    }
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
