import React from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='element' onClick={() => navigate('/')}>Home</div>
            <div className='element' onClick={() => navigate('/login')}>Login</div>
            <div className='element' onClick={() => navigate('/venues')}>Book Venues</div>
            <div className='element' onClick={() => navigate('/search')}>Find Gigs</div>
        </div>
    )
}

export default Navbar;
