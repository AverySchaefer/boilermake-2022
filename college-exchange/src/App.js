import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Mainpage from "./components/Mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Chat from "./components/Chat";
import ListOnItem from "./components/ListOnItem";
import UserProfile from "./components/UserProfile/UserProfile";

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Mainpage />

        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/listOnItem" element={<ListOnItem />} />

          <Route path="/userProfile" element={<UserProfile />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
