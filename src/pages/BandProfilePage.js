import React from "react";

const BandProfilePage = () => {
    document.body.style.backgroundColor = "#94618E";
    document.body.style.margin = "1%";

    const container = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }

    const column = {
        // border: "5px solid green"
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
    }

    return (
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
    );
}

export default BandProfilePage;
