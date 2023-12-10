import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BandProfilePage from "./pages/BandProfilePage";
import ViewBands from "./pages/ViewBands";
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
    performanceList: ["summoners rift", "howling abyss"],
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Hard coded dummy band profiles */}
        <Route path="/band-profile-1" element={<BandProfilePage bandName={band1.name} memberList={band1.memberList} information={band1.information} image={band1.image} />} />
        <Route path="/band-profile-2" element={<BandProfilePage bandName={band2.name} memberList={band2.memberList} information={band2.information} image={band2.image} performanceList={band2.performanceList} />} />
        <Route path="/view-bands" element={<ViewBands />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
