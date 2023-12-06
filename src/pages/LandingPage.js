import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function handleClick() {
    console.log('yay');
    navigate('/login')
  }

  return (
  <div class="sec-body">
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
    <div class="login"><p class="login-text" onClick={handleClick}>Login</p></div>
    <div class="title">UNSWGigs</div>
  </div>);
};

export default LandingPage;
