import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.js";
import Band from "./Band.js";
import styles from "../ViewBands.module.css";

const ViewBands = () => {
    const navigate = useNavigate();

    document.body.style.background = "#D3D3D3";
    // document.body.style.height = "99vh";
    document.body.style.margin = "0";
    document.body.style.overflow = "auto";

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

    const band3 = {
        name: "BDS",
        memberList: ["John Cook", "Jim", "John", "Sugar", "Gin"],
        information: "Bee tea ass came from a small company, they started with nothing. Gin who was casted just because of his looks, Sugar who left his family and gambled his education just to do what he really wanted to be, RaP mOnStEr who was never have been supported by his parents, Gee Mean who thought himself as ugly and fat, The 22nd english alphabet whose always been part of Bee tea ass but was never shown in any promotions- not until they debut, Hoe seok who seemed to always laugh but never felt as an accomplishment to his father, And Junglebok who was very shy and have saved his parents at a young age by auditioning to companies. Remember the days when they were struggling? They even have to sacrifice and work hard just so they could eat? They were squeezing themselves into one small apartment and have to take responsibilities- the reason why they wrote the song 'Move'. Those times when Gee Mean has to starve himself just because people calls him fat and ugly. That one interview where Sugar said that; it was nice that people listens to their music because The 22nd English Alphabet and Junglebok are good looking...",
        image: "BDS.png",
        performanceList: ["Sydney Opera House", "Mediterranean Sea"],
    }

    const band4 = {
        name: "Radwimps",
        memberList: ["Yojiro Noda", "Akira Kuwahara", "Yusuke Takeda", "Satoshi Yamaguchi"],
        information: "Radwimps is a Japanese rock band renowned for their music, particularly the soundtracks featured in Makoto Shinkai's films including Kimi No Na Wa, Tenki No Ko and Suzume No Tojimari. On 24 August 2016, Radwimps released the soundtrack album Your Name. (君の名は。, Kimi no Na wa.), to the anime film of the same name, directed by Makoto Shinkai. The film was an international success, further boosting the band's global profile and sending them to number two on the Billboard World Albums chart. The record also charted at number 16 on Billboard Heatseekers, and number 15 on Billboard's Soundtrack Albums chart. In their home country of Japan, it was certified Double Platinum by the RIAJ, with over 500,000 copies sold, making it the band's best-selling album. It went on to win the Japan Record Special Award,[28] the Japan Academy Prize for Outstanding Achievement in Music, and Soundtrack Album of the Year at the 31st Japan Gold Disc Awards.",
        image: "Radwimps.png",
        performanceList: ["Sydney", "Japan", "America", "Britain"],
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
                <Band onClick={() => navigate("/band-profile-3")} bandName={band3.name} memberList={band3.memberList} information={band3.information} image={band3.image} performanceList={band3.performanceList} />
                <Band onClick={() => navigate("/band-profile-4")} bandName={band4.name} memberList={band4.memberList} information={band4.information} image={band4.image} performanceList={band4.performanceList} />
            </div>
        </div>
    )
}

export default ViewBands;
