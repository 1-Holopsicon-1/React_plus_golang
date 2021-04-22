import React, {Component} from "react";
import {connect, sendMsg} from "./api";

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    connect()
  }
  send(){
    console.log("Hello");
    sendMsg("Hello");
  }
  render() {
    return (
      <div className={"App"}>
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default App;
