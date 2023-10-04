import React from "react";
import about from "../assets/aboutIcon.svg";
import emoji1 from "../assets/emoji1.svg";
import emoji2 from "../assets/emoji2.svg";
import emoji3 from "../assets/emoji3.svg";
import arrow from "../assets/aboutarrow.svg";

const About = () => {
  return (
    <div className="about-section w-full min-h-[60vh] my-[80px]">
      <img className="mx-auto mb-[40px]" src={about} alt="about text" />
      <div className="relative">
        <h1 className="flex items-center gap-[20px] justify-center">
          <span className="text-border">10,000</span>{" "}
          <img className="emoji" src={emoji1} alt="emoji" />
          <span>UNQIUE WILD</span>
        </h1>

        <h1 className="my-[5px] flex items-center gap-[20px] justify-center">
          <span>FOX NFT LIVING</span>
          <img className="emoji" src={emoji2} alt="emoji" />{" "}
          <span className="text-border">ON THE</span>
        </h1>

        <h1 className="flex items-center gap-[20px] justify-center">
          <span className="text-border">ETHEREUM</span>
          <img className="emoji" src={emoji3} alt="emoji" />
          <span>BLOCKCHAIN</span>
        </h1>

        {/* Arrow */}
        <img
          className="absolute bottom-[-100%] right-[60px]"
          src={arrow}
          alt="arrow"
        />
      </div>
      <p className="w-[674px] mx-auto mt-[40px] text-[#333] text-center text-[16.8px] font-medium leading-[23.5px]">
        Welcome to our Wild Fox Squad! Meet our collection of 10k unique Wild
        Foxes. Support and join our community, crazy adventures and fantastic
        prizes are waiting for you.
      </p>
    </div>
  );
};

export default About;
