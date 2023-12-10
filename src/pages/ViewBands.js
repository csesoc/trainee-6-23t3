import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";
import Band from "./Band.js";
import styles from "../ViewBands.module.css";

const ViewBands = () => {
    const navigate = useNavigate();

    document.body.style.background = "#D3D3D3";
    document.body.style.height = "99vh";
    document.body.style.margin = "0";

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Bands</h1>
                <Band onClick={() => navigate("/band-profile-1")} memberList={["Isaac", "Eric", "Brian", "Nelson", "Jin"]} information={"a really cool band"} image={"logo.png"} />
                <Band onClick={() => navigate("/band-profile-2")} memberList={["Karthus", "kayle", "morde", "olaf", "sona", "yorick"]} image={"pentakill.png"}/>
            </div>
        </div>
    )
}

export default ViewBands;
