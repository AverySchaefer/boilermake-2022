import React, { useState } from "react";
import "./Mainpage.css";
import logo from "./logo.png";

import Modal from "react-modal";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="main">
      <div className="btn-wrapper">
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          Sign up / Sign in
        </button>
      </div>
      <Modal
        isModalOpen={true}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="login-modal"
        closeTimeoutMS={200}
      >
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
      </Modal>
      <a href="/" className="logo">
        <img src={logo} className="logo-img" alt=""></img>
      </a>
    </div>
  );
}
export default MainPage;
