import React from "react";
import "./LandingPage.css";
import Navbar from "./Navbar.js";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    console.log('yay');
    navigate('/login')
  }

  return (
  <div class="sec-body">
    <Navbar backgroundColour={"#49274A"} />
    <div class="background">
      <div class="needle"></div>
      <div class="record">
        <div class="purple circle">
          <div class="black circle">
            <div class="white circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class='description'>Find Music on Campus</div>

    <div class="login">
      <p class="btn" onClick={handleClick}>Login</p>
      {/* <button class="btn">Login2</button> */}
    </div>
    <div class="title">UNSWGigs</div>
  </div>);
};

export default LandingPage;
