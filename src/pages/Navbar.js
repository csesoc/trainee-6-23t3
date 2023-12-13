import React from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

const Navbar = ({backgroundColour}) => {
    const navigate = useNavigate();

    const navbarStyle = {
        margin: "0",
        padding: "8px 10%",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        top: "0",
        boxSizing: "border-box",
        zIndex: "3",
    }

    if (backgroundColour) {
        navbarStyle["backgroundColor"] = backgroundColour;
    }

    return (
        <div className='navbar' style={navbarStyle}>
            <img src={require("./logo.png")} style={{width: "60px"}} />
            <div className='element' onClick={() => navigate('/')}>
                <img src={require("./home.png")} style={{width: "20px"}} />&nbsp;
                Home
            </div>
            <div className='element' onClick={() => navigate('/venues')}>
                <img src={require("./location.png")} style={{width: "20px"}} />&nbsp;
                Book Venues
            </div>
            <div className='element' onClick={() => navigate('/view-bands')}>
                <img src={require("./microphone.png")} style={{width: "20px"}} />&nbsp;
                View Bands
            </div>
            <div className='element' onClick={() => navigate('/find-gigs')}>Find Gigs</div>
            <div className='element' onClick={() => navigate('/login')}>Login</div>
        </div>
    )
}

export default Navbar;
