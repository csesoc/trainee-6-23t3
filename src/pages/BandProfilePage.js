import React from "react";

const BandProfilePage = () => {
    return (
        <div className="band-container">
            <div className="column" style={{width: "300px"}}>
                <div className="band-block" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <img src={require("./defaultImage.png")} />
                    <h1>Band Name</h1>
                    <h2>Socials</h2>
                </div>
                <div className="band-block">
                    <h1>Band Members</h1>
                    <ul>
                        <li>Band Member 1</li>
                        <li>Band Member 2</li>
                        <li>Band Member 3</li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="band-block">
                    <h1>Upcoming Performances</h1>
                    <ul>
                        <li>Performance 1</li>
                        <li>Performance 2</li>
                        <li>Performance 3</li>
                    </ul>
                </div>
                <div className="band-block">
                    <h1>Band Information</h1>
                    <p>Hello world</p>
                </div>
            </div>
        </div>
    );
}

export default BandProfilePage;
