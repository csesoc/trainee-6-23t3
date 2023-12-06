import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const navbar = {
        backgroundColor: "#49274A",
        margin: "0 0 10px 0",
        padding: "0 10%",
        display: "flex",
        justifyContent: "space-between",
    }

    const element = {
        backgroundColor: "#F4DECB",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        margin: "10px",
    }

    return (
        <div style={navbar}>
            <div style={element} onClick={() => navigate('/')}>Home</div>
            <div style={element} onClick={() => navigate('/login')}>Login</div>
            <div style={element} onClick={() => navigate('/venues')}>Book Venues</div>
            <div style={element} onClick={() => navigate('/search')}>Find Gigs</div>
        </div>
    )
}

export default Navbar;
