import React from "react";
import ourIcon from "../assets/ourIcon.svg";
import RoadmapBox from "../components/RoadmapBox";
import { roadmaplist } from "../data/roadmaps";

const Roadmap = () => {
  return (
    <div className="mt-[200px] w-full px-[120px]">
      <div className="relative w-full flex justify-between items-end">
        <img
          className="w-[75.38px] absolute left-[-30px] top-0 rotate-[-30deg]"
          src={ourIcon}
          alt="our icon"
        />
        <h1 className="font-Gulfs text-[84px] leading-[75.6px] uppercase">
          Roadmap
        </h1>
        <p className="w-[35%] text-[16.8px] leaading-[23.5px] font-medium">
          This roadmap outlines our goals and where we want to take Wild Fox
          Squad. We have a lot of ideas and concepts that we are working on.
          Join our squad!
        </p>
      </div>

      <div className="mt-[200px]">
        {roadmaplist.map((item, index) => (
          <RoadmapBox key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
