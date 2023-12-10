import React from "react";
import Navbar from "./Navbar.js";
import "../BandProfilePage.css";

const BandProfilePage = ({image, bandName, memberList, performanceList, information}) => {
    // purple 94618E dark purple 49274A white F8EEE7 cream F4DECB
    document.body.style.background = "linear-gradient(0deg, #ad8df7, #f0a1b9)";
    document.body.style.height = "99vh";
    document.body.style.margin = "0";

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="column">
                    <div className="block-centered">
                        { image ? <img src={require("./" + image)} /> : <img src={require("./defaultImage.png")} /> }
                        <h1>{ bandName !== undefined ? bandName : "Band Name" }</h1>
                        <h2>Socials</h2>
                        <hr />
                        <div style={{display: "flex"}}>
                            <img alt="twitter" src={require("./twitter.png")} style={{width: "40px", margin: "0 20px"}} />
                            <img alt="facebook" src={require("./facebook.png")} style={{width: "40px", margin: "0 20px"}} />
                            <img alt="instagram" src={require("./instagram.png")} style={{width: "40px", margin: "0 20px"}} />
                        </div>
                    </div>
                    <div className="block">
                        <h1>Band Members</h1>
                        <ul>
                            { memberList ? memberList.map((item, index) => (<li key={index}>{item}</li>)) : <li>No Members</li> }
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <div className="block">
                        <h1>Upcoming Performances</h1>
                        <ul>
                            { performanceList ? performanceList.map((item, index) => (<li key={index}>{item}</li>)) : <li>No Performances</li> }
                        </ul>
                    </div>
                    <div className="block">
                        <h1>Band Information</h1>
                        <p>{ information !== undefined ? information : "Band Information" }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BandProfilePage;
