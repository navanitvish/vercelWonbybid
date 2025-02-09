import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";

import TestimonialsSection from "./pages/TestimonialsSection";
import HowToPlays from "./pages/HowToPlay";
import HowToDownload from "./pages/HowToDownload";
import FantasyPointSystem from "./pages/Howtobid";
import TipsAndTricksForSuccessOnWonByBid from "./pages/TipsTricks";

import FantasyCricket from "./pages/FantasyCricket";
import TieBreakingInWonByBid from "./pages/TieBreaking";
import FlexibleContestsInWonByBid from "./pages/contestflexible";
import AboutUs from "./pages/AboutUs";
import HackingAwareness from "./pages/Hackingawarens";
import Legality from "./pages/Legality";
import PrivacyPolicy from "./pages/Policyprivacy";
import TermsOfService from "./pages/TermsofService";
import ScrollToTop from "./pages/Scrolltotop";

function App() {
  return (
    <div>
      <Header />
    
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/how-to-play" element={<HowToPlays />} />
          <Route path="/how-to-download" element={<HowToDownload />} />
          <Route path="/points-system" element={<FantasyPointSystem />} />
          <Route
            path="/tips-tricks"
            element={<TipsAndTricksForSuccessOnWonByBid />}
          />
          <Route path="/fantasy-cricket" element={<FantasyCricket />} />
          <Route
            path="/TieBreakingInWonBy"
            element={<TieBreakingInWonByBid />}
          />
          <Route
            path="/contestflexible"
            element={<FlexibleContestsInWonByBid />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/hack" element={<HackingAwareness />} />
          <Route path="/legality" element={<Legality />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofService" element={<TermsOfService />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
