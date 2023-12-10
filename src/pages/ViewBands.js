import React from "react";
import Navbar from "./Navbar.js";
import styles from "../ViewBands.module.css";

const ViewBands = () => {
    document.body.style.background = "#D3D3D3";
    document.body.style.height = "99vh";
    document.body.style.margin = "0";

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Bands</h1>
                <div className={styles.band}>hi</div>
            </div>
        </div>
    )
}

export default ViewBands;
