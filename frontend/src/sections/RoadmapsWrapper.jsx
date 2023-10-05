import React, { useRef } from "react";
import RoadmapBox from "../components/RoadmapBox";
import { roadmaplist } from "../data/roadmaps";

const RoadmapsWrapper = () => {
  const wrapperRef = useRef();
  return (
    <div
      ref={wrapperRef}
      className="w-full relative h-[650vh] mt-[200px] px-[120px]"
    >
      <div className="sticky top-0 h-[100vh] pt-[20px] max-h-[100vh] overflow-hidden">
        {roadmaplist.map((item, index) => (
          <RoadmapBox
            key={index}
            index={index}
            item={item}
            wrapperRef={wrapperRef}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapsWrapper;
