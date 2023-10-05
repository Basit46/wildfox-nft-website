import React from "react";
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

const App = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto font-SpaceGrotesk">
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Collage />
      <Roadmap />
      <RoadmapsWrapper />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
