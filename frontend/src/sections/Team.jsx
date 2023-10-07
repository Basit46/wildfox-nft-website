import React from "react";
import wild from "../assets/wild.svg";
import mem1 from "../assets/mem1.svg";
import mem2 from "../assets/mem2.svg";
import twt from "../assets/twtLogo.svg";
import ig from "../assets/igLogo.svg";
import sticker from "../assets/sticker2.svg";

const Team = () => {
  return (
    <div
      id="team"
      className="team-section mt-[50px] py-[100px] w-full bg-[#f9f0dc]"
    >
      <div className="mx-auto w-fit relative">
        <h1 className="font-Gulfs text-[84px]">TEAM</h1>
        <img
          className="absolute top-[10px] right-[-50px] rotate-[20deg]"
          src={wild}
          alt="wild text"
        />
      </div>

      <div className="mt-[100px] flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[50px]">
        <div className="member w-[80%] xmd:w-[530px] h-fit xl:h-[779px] flex flex-col items-center xl:items-start justify-between gap-[20px] xl:gap-0 rounded-[20px] p-[30px] xmd:p-[70px] bg-[#fffdf1] border-[1px] border-black ">
          <img className="w-[200px] xmd:w-auto" src={mem1} alt="member" />
          <div>
            <h1 className="font-Gulfs text-[32px] text-center">BASIT</h1>
            <p className="text-[20px] xmd:text-[28px] text-[#727171] text-center">
              DEVELOPER
            </p>
          </div>
          <div className="flex justify-center gap-[20px]">
            <a href="https://twitter.com/Basit0282" target="blank">
              <img src={ig} alt="instagram logo" />
            </a>
            <a href="https://twitter.com/Basit0282" target="blank">
              <img src={twt} alt="twiiter logo" />
            </a>
          </div>
        </div>

        <div className="member w-[80%] xmd:w-[530px] h-fit xl:h-[779px] flex flex-col items-center xl:items-start justify-between gap-[20px] xl:gap-0 rounded-[20px] p-[30px] xmd:p-[70px] bg-[#fffdf1] border-[1px] border-black ">
          <img className="w-[200px] xmd:w-auto" src={mem2} alt="member" />
          <div>
            <h1 className="font-Gulfs text-[32px] text-center">NICK</h1>
            <p className="text-[20px] xmd:text-[28px] text-[#727171] text-center">
              DESIGNER & CO-CREATOR
            </p>
          </div>
          <div className="flex justify-center gap-[20px]">
            <a href="https://twitter.com/Basit0282" target="blank">
              <img src={ig} alt="instagram logo" />
            </a>
            <a href="https://twitter.com/Basit0282" target="blank">
              <img src={twt} alt="twiiter logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="slide mt-[50px] xmd:my-[130px] w-full overflow-hidden border-y-[1px] border-[#bebebe]">
        <div className="w-fit flex items-center">
          <div className="w-fit flex items-center gap-[80px] ml-[80px]">
            <p>10.000 UNIQUE NFT</p>
            <span>
              <img src={sticker} alt="sticker" />
            </span>
            <p>10.000 UNIQUE NFT</p>
            <span>
              <img src={sticker} alt="sticker" />
            </span>
          </div>
          <div className="w-fit flex items-center gap-[80px] ml-[80px]">
            <p>10.000 UNIQUE NFT</p>
            <span>
              <img src={sticker} alt="sticker" />
            </span>
            <p>10.000 UNIQUE NFT</p>
            <span>
              <img src={sticker} alt="sticker" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
