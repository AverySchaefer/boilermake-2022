import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-wrapper">
          <form className="login-box">
            <p1>Email</p1>
            <input
              className="email-text"
              type="email"
              name="email"
              placeholder="email"
              required
            />
            <p1>Password</p1>
            <input
              className="password-text"
              type="password"
              name="pwd"
              placeholder="password"
              required
            />
          </form>
          <button className="login-btn">Login</button>
          <button className="password-btn">Forgot Password?</button>
        </div>
      </div>
    );
  }
}

export default Login;
