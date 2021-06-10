import React, { Component } from "react";
import "./Message.sass"

class Message extends Component{
    render() {
        let element = (<div className="hidden"></div>)
        
        if (this.props.message !== undefined) {
        element = (<div id={this.props.dataId} className={'message ' + (this.props.dataId !== sessionStorage.getItem('uid') ? 'notMyMsg' : 'myMsg')}>
            {this.props.message}
            <span className="msgTime">
                {new Date().getHours() + ':' + new Date().getMinutes()}
            </span>
        </div>)}

        return (<>{element}</>)
    }
}

export default Message;