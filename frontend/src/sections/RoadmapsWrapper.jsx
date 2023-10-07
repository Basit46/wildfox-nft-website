import React from "react";
import RoadmapBox from "../components/RoadmapBox";
import { roadmaplist } from "../data/roadmaps";

const RoadmapsWrapper = () => {
  return (
    <div className="hidden xmd:block w-full relative h-fit xmd:h-[650vh] mt-[50px] xmd:mt-[200px] px-[30px] xmd:px-[60px] xl:px-[120px]">
      <div className="xmd:sticky top-0 h-[100vh] pt-[20px] max-h-[100vh] overflow-hidden">
        {roadmaplist.map((item, index) => (
          <RoadmapBox key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapsWrapper;
