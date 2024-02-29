import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ScrollText from "./components/ScrollText";
import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturedProjects from "./components/FeaturedProjects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full text-white bg-black">
      <Navbar />
      <LandingPage />
      <ScrollText />
      <About />
      <Eyes />
      <FeaturedProjects />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
