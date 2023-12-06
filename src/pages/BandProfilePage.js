import React from "react";
import Navbar from "./Navbar.js";

const BandProfilePage = () => {
    // purple 94618E dark purple 49274A white F8EEE7 cream F4DECB 
    document.body.style.background = 'linear-gradient(90deg, #ad8df7, #f0a1b9)';
    document.body.style.margin = "0";

    const container = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
        // border: "5px solid orange"
    }

    const column = {
        // border: "5px solid green",
        marginTop: "40px",
    }

    const block = {
        backgroundColor: "#F8EEE7",
        color: "#49274A",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
    }

    const ul = {
        listStyleType: "none",
        margin: "0",
        padding: "0",
    }

    const li = {
        backgroundColor: "#F4DECB",
        margin: "10px",
        padding: "10px",
        color: "#49274A",
        borderRadius: "10px",
    }

    return (
        <div>
            <Navbar />
            <div className="band-container" style={container}>
                <div className="column" style={{...column, width: "300px"}}>
                    <div className="band-block" style={{...block, display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <img src={require("./defaultImage.png")} />
                        <h1>Band Name</h1>
                        <h2>Socials</h2>
                    </div>
                    <div className="band-block" style={block}>
                        <h1>Band Members</h1>
                        <ul style={ul}>
                            <li style={li}>Band Member 1</li>
                            <li style={li}>Band Member 2</li>
                            <li style={li}>Band Member 3</li>
                        </ul>
                    </div>
                </div>
                <div className="column" style={column}>
                    <div className="band-block" style={block}>
                        <h1>Upcoming Performances</h1>
                        <ul style={ul}>
                            <li style={li}>Performance 1</li>
                            <li style={li}>Performance 2</li>
                            <li style={li}>Performance 3</li>
                        </ul>
                    </div>
                    <div className="band-block" style={block}>
                        <h1>Band Information</h1>
                        <p>Hello world</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BandProfilePage;
