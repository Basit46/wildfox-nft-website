import React, { useState, useEffect } from "react";
import imgRoll from "../assets/imgRoll.svg";
import textRoll from "../assets/textRoll.svg";
import { imagesList } from "../data/heroImagesList";

const Hero = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < imagesList.length) {
        setCurrImgIndex(i);
        i++;
      } else {
        setCurrImgIndex(0);
        i = 1;
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      id="hero"
      className="w-full h-[756px] relative bg-[#fbbf2d] pt-[20px] pb-[40px] flex flex-col justify-between"
    >
      <h1 className="w-full font-Gulfs text-[140px] leading-[124px] tracking-[5px] text-center">
        <span className="text-[#f8450b]">WILDFOX</span>{" "}
        <span className="text-white">SQUAD</span>
      </h1>

      <div className="w-full px-[27px] flex justify-between items-end font-bold">
        <p>
          A NEW WAVE <br /> OF COLLECTIBLES IS <br /> ABOUT TO HIT THE <br />
          BLOCKCHAIN.
        </p>
        <ul>
          <li className="text-end">
            <a href="https://twitter.com/Basit0282" target="blank">
              Twitter
            </a>
          </li>
          <li className="text-end">
            <a href="https://twitter.com/Basit0282" target="blank">
              Instagram
            </a>
          </li>
          <li className="text-end">
            <a href="https://twitter.com/Basit0282" target="blank">
              Discord
            </a>
          </li>
        </ul>
      </div>

      {/* Rolling stamp   */}
      <div className="absolute top-[350px] right-[150px] h-[170px] w-[170px]">
        <div className="relative">
          <img className="absolute top-0 left-0" src={imgRoll} alt="img" />
          <img
            className="rolling-img absolute top-[9px] left-[9.5px]"
            src={textRoll}
            alt="img"
          />
        </div>
      </div>

      {/* Changing main image */}
      {imagesList.map((imgSrc, index) => (
        <img
          key={index}
          className={`${
            currImgIndex == index ? "block" : "hidden"
          } absolute max-w-[600px] bottom-0 left-[50%] translate-x-[-50%]`}
          src={imgSrc}
          alt="nft"
        />
      ))}
    </div>
  );
};

export default Hero;
