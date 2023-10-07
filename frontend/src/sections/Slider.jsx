import React from "react";
import sticker from "../assets/sticker.svg";

const Slider = () => {
  return (
    <div className="slider w-full overflow-x-hidden py-[15px] vsm:py-[32px] border-b-[#e3e1d7] border-b-[1px]">
      <div className="w-fit flex items-center">
        <div className="w-fit flex gap-[30px] items-center ml-[30px]">
          <p>COLLECTION DROPPING SOON</p>
          <div className="w-[100px] h-[100px] overflow-hidden flex items-center">
            <img src={sticker} alt="sticker" />
          </div>
          <p>COLLECTION DROPPING SOON</p>
          <div className="w-[100px] h-[100px] overflow-hidden flex items-center">
            <img src={sticker} alt="sticker" />
          </div>
          <p>COLLECTION DROPPING SOON</p>
          <div className="w-[100px] h-[100px] overflow-hidden flex items-center">
            <img src={sticker} alt="sticker" />
          </div>
        </div>
        <div className="w-fit flex gap-[30px] items-center ml-[30px]">
          <p>COLLECTION DROPPING SOON</p>
          <div className="w-[100px] h-[100px] overflow-hidden flex items-center">
            <img src={sticker} alt="sticker" />
          </div>
          <p>COLLECTION DROPPING SOON</p>
          <div className="w-[100px] h-[100px] overflow-hidden flex items-center">
            <img src={sticker} alt="sticker" />
          </div>
          <p>COLLECTION DROPPING SOON</p>
          <div className="w-[100px] h-[100px] overflow-hidden flex items-center">
            <img src={sticker} alt="sticker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
