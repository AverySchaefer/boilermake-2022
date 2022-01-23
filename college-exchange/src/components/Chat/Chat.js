import React, { Component } from "react";
import cap from "./chatCap.png";
import "./Chat.css";

export class Chat extends Component {
  render() {
    return (
      <div>
        <img src={cap} alt="cap" className="cap"></img>
      </div>
    );
  }
}

export default Chat;
