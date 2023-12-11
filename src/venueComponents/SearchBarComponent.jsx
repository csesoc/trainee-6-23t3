import React, {useState} from 'react'
// import {FaSearch} from "react-icons/fa";
import "./SearchBarComponent.css";

export const SearchBarComponent = ({setResults}) => {
    const [input, setInput] = useState("");

    const options = [
        { name: 'UNSW Quad'},
        { name: 'UNSW Garden'},
        { name: 'UNSW Roundhouse'},
        { name: 'UNSW House'},
        { name: 'UNSW Flat'},
        { name: 'UNSW Area'},
        { name: 'UNSW Music Theatre'},
        { name: 'UNSW House'},
        { name: 'UNSW House'},
        { name: 'UNSW House'},
        { name: 'UNSW House'},
        
      ];

    const fetchData = (value) => {
        const results = options.filter((place) => {
            return place && value && place.name && place.name.toLowerCase().includes(value);
        });

        setResults(results);
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

  return (
    <div className="input-wrapper">
        <img src={require("../icons/Location Image.png")} alt="Location Icon" id = "icon-img" />
        <input placeholder="Type to search..." value={input} onChange={e => handleChange(e.target.value) }/>
    </div>
  )
}
