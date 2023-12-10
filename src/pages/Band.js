import React from "react";
import { useNavigate } from "react-router-dom";

const Band = ({image, bandName, memberList, information, onClick}) => {
    const navigate = useNavigate();

    const containerStyle = {
        backgroundColor: "#FFF",
        display: "flex",
        gap: "20px",
        margin: "20px 0",
        borderRadius: "10px",
    }

    let members = "";
    if (memberList !== undefined) {
        memberList.forEach((member, index) => {
            index === memberList.length - 1 ? members += member.toString() : members += member.toString() + ", ";
        });
    }

    return (
        <div style={containerStyle}>
            { image 
                ? <img src={require("./" + image)} style={{width: "200px", objectFit: "cover"}} />
                : <img src={require("./defaultImage.png")} style={{width: "200px", objectFit: "cover"}} /> }
            <div style={{width: "100%"}}>
                <h2 style={{marginBottom: "0"}}>{ bandName !== undefined ? bandName : "Band Name" }</h2>
                <p style={{color: "lightslategray", marginTop: "0"}}>{memberList !== undefined ? (members) : "members"}</p>
                <p style={{fontSize: "1.3em", fontWeight: "500"}}>About</p>
                <p>{information ? (information) : "This band has no information."}</p>
            </div>
            <button style={{height: "20px"}} onClick={onClick}>View</button>
        </div>
    );
}

export default Band;