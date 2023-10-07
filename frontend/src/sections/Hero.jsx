import React, { useState, useEffect, useRef } from "react";
import imgRoll from "../assets/imgRoll.svg";
import textRoll from "../assets/textRoll.svg";
import { imagesList } from "../data/heroImagesList";
import gsap from "gsap";

const Hero = () => {
  const heroTexts = useRef([]);
  const heroImg = useRef(null);

  //State and UseEffect to change hero image every second
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

  useEffect(() => {
    heroTexts.current.forEach((text, index) =>
      gsap.fromTo(
        text,
        { yPercent: 100 },
        { yPercent: 0, duration: 0.5, delay: index < 1 ? 0.6 : 1.2 }
      )
    );

    gsap.fromTo(
      heroImg.current,
      { yPercent: 100, xPercent: -50 },
      { yPercent: 0, delay: 1.3, duration: 0.9 }
    );
  }, []);

  return (
    <div
      id="hero"
      className="w-full h-[100vh] xmd:h-[756px] overflow-hidden relative bg-[#fbbf2d] pt-[20px] pb-[40px] flex flex-col justify-between"
    >
      <div>
        <div className="overflow-hidden">
          <h1
            ref={(e) => heroTexts.current.push(e)}
            className="w-full font-Gulfs text-[85px] xmd:text-[100px] xl:text-[140px] leading-[1.1] xmd:leading-[124px] tracking-[5px] text-center text-[#f8450b]"
          >
            WILD
            <br className="sm:hidden" />
            FOX
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            ref={(e) => heroTexts.current.push(e)}
            className="w-full font-Gulfs text-[85px] xmd:text-[100px] xl:text-[140px] leading-[1.1] xmd:leading-[124px] tracking-[5px] text-center text-white"
          >
            SQUAD
          </h1>
        </div>
      </div>

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
      <div className="hidden md:block absolute top-[350px] right-[150px] h-[170px] w-[170px]">
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
      <div
        ref={heroImg}
        className="absolute bottom-0 left-[50%] translate-x-[-50%]"
      >
        {imagesList.map((imgSrc, index) => (
          <img
            key={index}
            className={`${
              currImgIndex == index ? "block" : "hidden"
            } opacity-30 xmd:opacity-100 max-w-[90vw] md:max-w-[70vw] xmd:max-w-[600px] `}
            src={imgSrc}
            alt="nft"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
