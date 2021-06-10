import { ChevronRight, EmojiSmile } from 'react-bootstrap-icons'
import React, {Component} from "react"
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import "./ChatInput.sass"

export default class ChatInput extends Component{
    constructor(props) {
        super(props);
        this.btnHand = this.btnHand.bind(this)
        this.inputHand = this.inputHand.bind(this)
    }

    btnHand() {
        let text = document.querySelector("#inpt")
        if (text.value === '') return

        this.props.send(text.value)
        text.value = ""
    }

    inputHand(event) {
        if (event.code === "Enter"){
            let text = document.querySelector("#inpt")
            if (text.value === '') return
            this.props.send(text.value)
            text.value = ""
        }
    }

    emojiToggleHand(event) {
        document.querySelector('.emojiMarkt').classList.toggle('hidden')
    }

    emojiHandler(emoji, event) {
        document.querySelector("#inpt").value = document.querySelector("#inpt").value + emoji.native
    }

    render() {
        return (
            <div className="ChatInput">
                <div className="emojiAndInput">
                    <EmojiSmile onClick={this.emojiToggleHand} className="smile"/>
                    <div className="emojiMarkt hidden">
                        <Picker theme="dark" onClick={this.emojiHandler}/>
                    </div>
                    <input id="inpt" placeholder="Message" onKeyDown={this.inputHand}/>
                </div>
                <div id="btn" onClick={this.btnHand}><ChevronRight className="btn_send"/></div>
            </div>
        )
    }
}