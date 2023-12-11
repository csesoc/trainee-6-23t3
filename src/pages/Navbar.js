import React from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <img src={require("./logo.png")} style={{width: "60px"}} />
            <div className='element' onClick={() => navigate('/')}>Home</div>
            <div className='element' onClick={() => navigate('/venues')}>Book Venues</div>
            <div className='element' onClick={() => navigate('/gigs')}>Find Gigs</div>
            <div className='element' onClick={() => navigate('/view-bands')}>View Bands</div>
        </div>
    )
}

export default Navbar;
