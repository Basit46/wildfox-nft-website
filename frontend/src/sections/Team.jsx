import React from "react";
import wild from "../assets/wild.svg";
import mem1 from "../assets/mem1.svg";
import mem2 from "../assets/mem2.svg";
import twt from "../assets/twtLogo.svg";
import ig from "../assets/igLogo.svg";

const Team = () => {
  return (
    <div className="mt-[50px] py-[100px] w-full bg-[#f9f0dc]">
      <div className="mx-auto w-fit relative">
        <h1 className="font-Gulfs text-[84px]">TEAM</h1>
        <img
          className="absolute top-[10px] right-[-50px] rotate-[20deg]"
          src={wild}
          alt="wild text"
        />
      </div>

      <div className="mt-[100px] flex justify-center gap-[50px]">
        <div className="member w-[530px] h-[779px] flex flex-col justify-between rounded-[20px] p-[70px] bg-[#fffdf1] border-[1px] border-black ">
          <img src={mem1} alt="member" />
          <div>
            <h1 className="font-Gulfs text-[32px] text-center">BASIT</h1>
            <p className="text-[28px] text-[#727171] text-center">DEVELOPER</p>
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

        <div className="member w-[530px] h-[779px] flex flex-col justify-between rounded-[20px] p-[70px] bg-[#fffdf1] border-[1px] border-black ">
          <img src={mem2} alt="member" />
          <div>
            <h1 className="font-Gulfs text-[32px] text-center">NICK</h1>
            <p className="text-[28px] text-[#727171] text-center">
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
    </div>
  );
};

export default Team;
