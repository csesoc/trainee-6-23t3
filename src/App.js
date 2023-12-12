import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BandProfilePage from "./pages/BandProfilePage";
import ViewBands from "./pages/ViewBands";
import VenuePage from "./pages/VenuePage";
import "./App.css";

function App() {
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
    performanceList: ["Summoners Rift", "Howling Abyss", "Twisted Treeline"],
  }

  const band3 = {
    name: "BDS",
    memberList: ["John Cook", "Jim", "John", "Sugar", "Gin"],
    information: "Bee tea ass came from a small company, they started with nothing. Gin who was casted just because of his looks, Sugar who left his family and gambled his education just to do what he really wanted to be, RaP mOnStEr who was never have been supported by his parents, Gee Mean who thought himself as ugly and fat, The 22nd english alphabet whose always been part of Bee tea ass but was never shown in any promotions- not until they debut, Hoe seok who seemed to always laugh but never felt as an accomplishment to his father, And Junglebok who was very shy and have saved his parents at a young age by auditioning to companies. Remember the days when they were struggling? They even have to sacrifice and work hard just so they could eat? They were squeezing themselves into one small apartment and have to take responsibilities- the reason why they wrote the song 'Move'. Those times when Gee Mean has to starve himself just because people calls him fat and ugly. That one interview where Sugar said that; it was nice that people listens to their music because The 22nd English Alphabet and Junglebok are good looking."
      + "And he thought that it was at least enough. Do you remember when Hoeseok was supposed to be the vocalist and The 22nd English Alphabet is the rapper, but he chose to rap instead and learn it because The 22nd English Alphabet wants to be a Vocalist. It was The 22nd English Alphabet's dream and Hoeseok loves his dongsaeng that much he would sacrifice. Other fan base were accusing them for plagiarism just because they had the smallest detail whose the same with other big K-pop group which is actually just a coincidence. There was a time when Sugar packed 300 gifts and letters just to give to their 300 fans who will attend at their mini fan meetings. So why do people judge them so quickly? Did you know that Gee Mean came all the way to Seoul from Busan just to persuade his dreams? Did you know that The 22nd English Alphabet lived with his grandma gor almost half of his life making him innocent from what else is out there in our world? Did you know that Junglebok set aside his embarrassment just to meet the others expectations? Yes, he is the golden maknae, but he suffers too when he see his hyungs having a hard time, he cries. And there was a time when Gee Mean caught him crying and the reason is because he misses his family. Junglebok often cry secretly so that his hyungs wouldn't worry."
      + "Did you know that Gin auditioned to make his mother proud of him and so that his mom would have something to brag off to those judgmental neighbors they have. He worked hard on his vocals yet people called him talentless. Did you know that RaP mOnStEr worked hard just to produce songs yet there was a time when his mom ruined his computer and broke his mike so he could focus on studying? Did you know that Hoeseok auditioned because he wanted his father to be proud of him? Because he felt like he was a disappointment? Those rookie days where they only listen to the awardings and be amazed by their seniors. They can't do anything but to watch those idols who receives the awards."
      + "The days when they were happy with just 300 views on YouTube, mini fangatherings, small numbers of followers, and one Daesang award. They were contented. And now they've reached to the top and became more successful. From 150 fans to 16M and counting, From a small practice room to a bigger one, From cramped dorm with roommates to big dorm with each of them having a room, From one daesang award to more awards and they've even won on BBMAs. Bea Tea Ass never expected this before their fourth year anniversary, they've come so far- so far that the only chance we have to see them is to go to their concertor (NEVER) meet them along the street with 0.01% chance. But really ARMPITs! We've came this far fam, let's love them and give them our support till the end! I wanted to thank y'all. I love you fam! I love Bee tea ass. Let's stay together until the end. If you believe in what I've said. If you believe in 1! 2! 3! A true ARMPIT shall stink",
    image: "BDS.png",
    performanceList: ["Antarctica", "Mediterranean Sea"],
  }

  const band4 = {
    name: "Radwimps",
    memberList: ["Yojiro Noda", "Akira Kuwahara", "Yusuke Takeda", "Satoshi Yamaguchi"],
    information: "Radwimps is a Japanese rock band renowned for their music, particularly the soundtracks featured in Makoto Shinkai's films including Kimi No Na Wa, Tenki No Ko and Suzume No Tojimari. On 24 August 2016, Radwimps released the soundtrack album Your Name. (君の名は。, Kimi no Na wa.), to the anime film of the same name, directed by Makoto Shinkai. The film was an international success, further boosting the band's global profile and sending them to number two on the Billboard World Albums chart. The record also charted at number 16 on Billboard Heatseekers, and number 15 on Billboard's Soundtrack Albums chart. In their home country of Japan, it was certified Double Platinum by the RIAJ, with over 500,000 copies sold, making it the band's best-selling album. It went on to win the Japan Record Special Award,[28] the Japan Academy Prize for Outstanding Achievement in Music, and Soundtrack Album of the Year at the 31st Japan Gold Disc Awards.",
    image: "Radwimps.png",
    performanceList: ["Sydney", "Japan", "America", "Britain"],
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Hard coded dummy band profiles */}
        <Route path="/band-profile-1" element={<BandProfilePage bandName={band1.name} memberList={band1.memberList} information={band1.information} image={band1.image} />} />
        <Route path="/band-profile-2" element={<BandProfilePage bandName={band2.name} memberList={band2.memberList} information={band2.information} image={band2.image} performanceList={band2.performanceList} />} />
        <Route path="/band-profile-3" element={<BandProfilePage bandName={band3.name} memberList={band3.memberList} information={band3.information} image={band3.image} performanceList={band3.performanceList} />} />
        <Route path="/band-profile-4" element={<BandProfilePage bandName={band4.name} memberList={band4.memberList} information={band4.information} image={band4.image} performanceList={band4.performanceList} />} />
        <Route path="/view-bands" element={<ViewBands />} />
        <Route path="/venues" element={<VenuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
