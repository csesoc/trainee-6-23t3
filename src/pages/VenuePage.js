import React, { useState } from "react";
import {SearchBarComponent} from "../venueComponents/SearchBarComponent"
import { SearchResults } from "../venueComponents/SearchResults";
import Navbar from "./Navbar.js";
import './VenuePage.css';

const VenuePage = () => {
    const [results, setResults] = useState([]);

    return <div className="venue-page">
        <Navbar />
        <img src={require("../images/disc img.png")} alt="Record Background" id = "disc-img" />
        
        <div id = "main-box">
            <div id = "heading-box">
                <h1>Start Booking a Gig</h1>
                <p>Find a venue that suits you.</p>
            </div>

            <div class = "box">
                <h1>Venues</h1>
                <div className="search-bar-container">
                    <SearchBarComponent setResults={setResults} />
                    <SearchResults results = {results}/> 
                </div>     
            </div>

            <div class = "box">
                <h1>Select Date</h1>
                <div id = "search-box">
                    <img src={require("../icons/Calender Icon.png")} alt="Calender Icon" id = "icon-img" />
                    <input type="date" id="date-picker"/>
                </div>
            </div>

            <div id = "two-box">
                <div id = "half-box">
                    <h1>Start Time</h1>
                    <div id="search-box">
                        <input type="time" id="time-picker"/>
                    </div>
                </div>
                
                <div id = "half-box">
                    <h1>End Time</h1>
                    <div id= "search-box">
                        <input type="time" id="time-picker"/>
                    </div>
                </div>
            </div>  

            <button id="book-box">
                <h1>Book</h1>
            </button>  
        </div>
    </div>
};

export default VenuePage