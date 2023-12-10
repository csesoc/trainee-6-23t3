import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BandProfilePage from "./pages/BandProfilePage";
import ViewBands from "./pages/ViewBands";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/band-profile" element={<BandProfilePage />} />
        <Route path="/view-bands" element={<ViewBands />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
