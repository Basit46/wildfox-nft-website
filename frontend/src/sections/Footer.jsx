import React, { useState, useEffect } from "react";
import logo from "../assets/logoft.svg";
import arrow1 from "../assets/arrowup.svg";
import arrow2 from "../assets/ftarrow2.svg";
import discord from "../assets/ds.svg";
import insta from "../assets/ftig.svg";
import twitter from "../assets/fttwt.svg";
import opensea from "../assets/os.svg";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1000 ? setShowArrow(true) : setShowArrow(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className="h-fit pt-[70px] pb-[130px] xmd:pb-[100px]">
      <img className="mx-auto" src={logo} alt="logo" />

      <div className="relative">
        <h1 className="mt-[40px] mb-[20px] font-Gulfs text-white text-[40px] vsm:text-[55px] xmd:text-[84px] leading-[1.1] xmd:leading-[75.6px] text-center">
          FOLLOW US
        </h1>
        <h2 className="font-Gulfs text-[40px] vsm:text-[55px] xmd:text-[84px] leading-[1.1] xmd:leading-[75.6px] text-center">
          ON SOCIAL <br /> MEDIA
        </h2>

        <img
          className="arrow2 hidden xmd:block absolute left-[30px] xl:left-[120px] bottom-[-120px] w-[180.92px]"
          src={arrow2}
          alt="arrow"
        />
      </div>

      <div className="mt-[60px] xmd:mt-[100px] flex justify-center gap-[20px]">
        <a href="#">
          <img src={insta} alt="social icon" />
        </a>
        <a href="https://twitter.com/Basit0282" target="blank">
          <img src={twitter} alt="social icon" />
        </a>
        <a href="#">
          <img src={discord} alt="social icon" />
        </a>
        <a href="#">
          <img src={opensea} alt="social icon" />
        </a>
      </div>

      <ScrollLink
        className={`${
          showArrow ? "opacity-100" : "opacity-0"
        } z-[2] cursor-pointer duration-300 bg-white fixed bottom-[50px] left-[30px] arrow1 w-[64px] h-[64px] rounded-full border-[2px] border-black grid place-items-center`}
        to="nav"
        duration={1000}
        smooth="true"
      >
        <img src={arrow1} alt="arrow" />
      </ScrollLink>
    </footer>
  );
};

export default Footer;
