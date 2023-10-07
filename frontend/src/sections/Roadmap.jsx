import React from "react";
import ourIcon from "../assets/ourIcon.svg";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="mt-[50px] vsm:mt-[200px] w-full h-fit px-[30px] xmd:px-[60px] xl:px-[120px]"
    >
      <div className="relative w-full flex flex-col gap-[10px] vsm:gap-[20px] xm:gap-0 xl:flex-row xl:justify-between xl:items-end">
        <img
          className="w-[75.38px] absolute left-[-30px] top-0 rotate-[-30deg]"
          src={ourIcon}
          alt="our icon"
        />
        <h1 className="font-Gulfs text-[45px] vsm:text-[55px] xmd:text-[84px] leading-[75.6px] uppercase">
          Roadmap
        </h1>
        <p className="w-[80%] xmd:w-[35%] text-[16.8px] leaading-[23.5px] font-medium">
          This roadmap outlines our goals and where we want to take Wild Fox
          Squad. We have a lot of ideas and concepts that we are working on.
          Join our squad!
        </p>
      </div>
    </div>
  );
};

export default Roadmap;
