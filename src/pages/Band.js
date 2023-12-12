import React from "react";
import styles from "../Band.module.css";

const Band = ({image, bandName, memberList, information, onClick}) => {
    let members = "";
    if (memberList !== undefined) {
        memberList.forEach((member, index) => {
            index === memberList.length - 1 ? members += member.toString() : members += member.toString() + ", ";
        });
    }

    return (
        <div className={styles.container}>
            { image 
                ? <img src={require("./" + image)} style={{width: "200px", objectFit: "cover"}} />
                : <img src={require("./defaultImage.png")} style={{width: "200px", objectFit: "cover"}} /> }
            <div style={{width: "100%", padding: "20px 0"}}>
                <h2 style={{marginBottom: "0"}}>{ bandName !== undefined ? bandName : "Band Name" }</h2>
                <p style={{color: "lightslategray", marginTop: "0"}}>{memberList !== undefined ? (members) : "members"}</p>
                <br />
                <p style={{fontSize: "1.3em", fontWeight: "500"}}>About</p>
                <p>{information ? (information) : "This band has no information."}</p>
            </div>
            <button className={styles.btn} onClick={onClick}>View</button>
        </div>
    );
}

export default Band;