import React, { useState } from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Collage from "./sections/Collage";
import Roadmap from "./sections/Roadmap";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Slider from "./sections/Slider";
import RoadmapsWrapper from "./sections/RoadmapsWrapper";
import ResponsiveRoadmapsWrapper from "./sections/ResponsiveRoadmapsWrapper";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen && "h-[100vh] overflow-y-hidden"
      } max-w-[1400px] w-full mx-auto font-SpaceGrotesk`}
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Slider />
      <About />
      <Collage />
      <Roadmap />
      <RoadmapsWrapper />
      <ResponsiveRoadmapsWrapper />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
