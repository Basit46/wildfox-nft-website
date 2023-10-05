import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import sticker from "./assets/sticker.svg";
import About from "./sections/About";
import Collage from "./sections/Collage";
import Roadmap from "./sections/Roadmap";
import Team from "./sections/Team";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto font-SpaceGrotesk">
      <Navbar />
      <Hero />
      <div className="slider w-full overflow-x-hidden py-[32px] border-b-[#e3e1d7] border-b-[1px]">
        <div className="w-fit flex gap-[30px] items-center">
          <p>COLLECTION DROPPING SOON</p>
          <img src={sticker} alt="sticker" />
          <p>COLLECTION DROPPING SOON</p>
          <img src={sticker} alt="sticker" />
          <p>COLLECTION DROPPING SOON</p>
          <img src={sticker} alt="sticker" />
          <p>COLLECTION DROPPING SOON</p>
          <img src={sticker} alt="sticker" />
          <p>COLLECTION DROPPING SOON</p>
          <img src={sticker} alt="sticker" />
          <p>COLLECTION DROPPING SOON</p>
          <img src={sticker} alt="sticker" />
        </div>
      </div>
      <About />
      <Collage />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
