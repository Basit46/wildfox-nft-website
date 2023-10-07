import React from "react";
import badge from "../assets/badge.png";

const ResponsiveRoadmapBox = ({ item, index }) => {
  return (
    <div className="roadmap-box relative mb-[30px] w-full h-[80vh] xmd:h-[600px] bg-white border-[2px] border-black rounded-[20px] flex flex-col xmd:flex-row gap-[20px] xmd:gap-[60px] p-[25px] xmd:p-0 justify-center items-center">
      {/* Done badge */}
      <img
        className={`${
          item.isDone !== "1" && "hidden"
        } absolute top-0 right-0 w-[149.13px] h-[149.13px] xmd:w-[250px] xmd:h-[250px]`}
        src={badge}
        alt="badge"
      />

      <img
        className="w-[200px] h-[200px] xmd:w-[400px] xmd:h-[400px]"
        src={item.img}
        alt="roadmap image"
      />

      <div className="w-full h-fit xmd:h-[70%] xmd:w-[41%] xmd:border-l-[3px] xmd:border-l-[black]/50 xmd:pl-[50px] xmd:py-[50px] flex flex-col justify-between">
        <div
          className={`${
            item.isDone === "1" ? "bg-[#e7f6e5]" : "bg-[#feeade]"
          } mx-auto xmd:mx-0 w-fit py-[16px] px-[20px] rounded-[100px] flex items-center gap-[15px]`}
        >
          <span
            className={`${
              item.isDone === "1" ? "bg-[#29af51]" : "bg-[#ff1515]"
            } px-[16px] py-[5px] rounded-[100px] text-white text-[21px] leading-[16.8px]`}
          >
            {index + 1 < 10 ? "0" + (index + 1) : index + 1}
          </span>
          <span
            className={`${
              item.isDone === "1" ? "text-[#15ce56]" : "text-[#ff1515]"
            } text-[16.8px] xmd:text-[23.8px] leading-[13.44px] font-bold`}
          >
            {item.month} 2024
          </span>
        </div>

        <h1 className="my-[10px] xmd:my-0 text-center xmd:text-left text-shadow font-Gulfs text-[28px] xmd:text-[37.8px] leading-[1.2]">
          {item.title}
        </h1>
        <p className="text-center xmd:text-left text-[16.8px] leading-[23.52px]">
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default ResponsiveRoadmapBox;
