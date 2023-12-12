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

    const band1 = {
        name: "Top Gs",
        memberList: ["Isaac", "Eric", "Brian", "Nelson", "Jin"],
        information: "a really cool band",
        image: "logo.png",
    }
    
    const band2 = {
        name: "Pentakill",
        memberList: ["Karthus", "kayle", "morde", "olaf", "sona", "yorick"],
        information: "Pentakill is a virtual heavy metal band associated with the League of Legends universe. Their music is primarily composed and performed by Riot Games' in-house music team but features cameos by various renowned metal musicians. Their second album, Grasp of the Undying, reached Number 1 on the iTunes metal charts in 2017. Their third album III: Lost Chapter was premiered using an interactive 'live' concert.",
        image: "pentakill.png",
        performanceList: ["summoners rift", "howling abyss"],
    }

    return (
        <div>
            <Navbar backgroundColour={"#49274A"} />
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h1>Bands</h1>
                    <input type="text" placeholder="Search" className={styles.searchbar} />
                </div>
                <Band onClick={() => navigate("/band-profile-1")} bandName={band1.name} memberList={band1.memberList} information={band1.information} image={band1.image} />
                <Band onClick={() => navigate("/band-profile-2")} bandName={band2.name} memberList={band2.memberList} information={band2.information} image={band2.image} performanceList={band2.performanceList} />
            </div>
        </div>
    )
}

export default ViewBands;
