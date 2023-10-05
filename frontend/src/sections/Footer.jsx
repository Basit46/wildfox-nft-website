import React from "react";
import logo from "../assets/logoft.svg";
import arrow1 from "../assets/arrowup.svg";
import arrow2 from "../assets/ftarrow2.svg";
import discord from "../assets/ds.svg";
import insta from "../assets/ftig.svg";
import twitter from "../assets/fttwt.svg";
import opensea from "../assets/os.svg";

const Footer = () => {
  return (
    <footer className="h-fit pt-[70px] pb-[100px]">
      <img className="mx-auto" src={logo} alt="logo" />

      <div className="relative">
        <h1 className="mt-[40px] mb-[20px] font-Gulfs text-white text-[84px] leading-[75.6px] text-center">
          FOLLOW US
        </h1>
        <h2 className="font-Gulfs text-[84px] leading-[75.6px] text-center">
          ON SOCIAL <br /> MEDIA
        </h2>

        <img
          className="arrow2 absolute left-[120px] bottom-[-120px] w-[180.92px]"
          src={arrow2}
          alt="arrow"
        />
      </div>

      <div className="mt-[100px] flex justify-center gap-[20px]">
        <a href="#">
          <img src={insta} alt="social icon" />
        </a>
        <a href="#">
          <img src={twitter} alt="social icon" />
        </a>
        <a href="#">
          <img src={discord} alt="social icon" />
        </a>
        <a href="#">
          <img src={opensea} alt="social icon" />
        </a>
      </div>

      <div className="fixed bottom-[50px] left-[30px] arrow1 w-[64px] h-[64px] rounded-full border-[2px] border-black grid place-items-center">
        <img src={arrow1} alt="arrow" />
      </div>
    </footer>
  );
};

export default Footer;
