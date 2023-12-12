import React, { useState } from "react";
import Navbar from "./Navbar.js";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

  };

  return (
    <div className="login-page">
      <Navbar backgroundColour={"#49274A"} />
      <img src={require("../images/disc img.png")} alt="Record Background" id="disc-img" />
    
      <div id="main-box" className="login-box">
        <div id="heading-box">
          <h1>Login</h1>
          <p>Enter your credentials to log in.</p>
        </div>

        <div className="box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
