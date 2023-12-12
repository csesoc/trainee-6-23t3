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
            <div className='element' onClick={() => navigate('/')}>Home</div>
            <div className='element' onClick={() => navigate('/venues')}>Book Venues</div>
            <div className='element' onClick={() => navigate('/view-bands')}>View Bands</div>
            <div className='element' onClick={() => navigate('/gigs')}>Find Gigs</div>
        </div>
    )
}

export default Navbar;
