import React from "react";
import Navbar from "./Navbar.js";
import "../BandProfilePage.css";

// purple 94618E dark purple 49274A white F8EEE7 cream F4DECB
const BandProfilePage = ({bandName, memberList, performanceList, information, image}) => {
    document.body.style.background = "linear-gradient(0deg, #ad8df7, #f0a1b9)";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";

    return (
        <div>
            <Navbar backgroundColour={"#6b3c65"} />
            <div className="container">
                <div className="column">
                    <div className="block-centered">
                        { image ? <img src={require("./" + image)} style={{width: "200px"}} /> : <img src={require("./defaultImage.png")} /> }
                        <br />
                        <h1>{ bandName !== undefined ? bandName : "Band Name" }</h1>
                        <br />
                        <h2 style={{marginBottom: "10px"}}>Socials</h2>
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
                            { performanceList 
                                ? performanceList.map((item, index) => (
                                    <li key={index} className="performance">
                                        <p>{item}</p>
                                        <button className="tickets-btn" onClick={() => alert("Booking tickets!")}>Get tickets</button>
                                    </li>
                                )) 
                                : <li>No Performances</li> }
                        </ul>
                    </div>
                    <div className="block">
                        <h1>Band Information</h1>
                        <br />
                        <p>{ information !== undefined ? information : "Band Information" }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BandProfilePage;
