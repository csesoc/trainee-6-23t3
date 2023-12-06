import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const navbar = {
        // backgroundColor: "#49274A",
        margin: "10px 0",
        padding: "0 10%",
        display: "flex",
        justifyContent: "space-between",
    }

    const element = {
        // backgroundColor: "#94618E",
        border: "1px solid #49274A",
        color: "49274A",
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
