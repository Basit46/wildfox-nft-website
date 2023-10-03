import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <div className="max-w-[1400px] mx-auto font-SpaceGrotesk">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
