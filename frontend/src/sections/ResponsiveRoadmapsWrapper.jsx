import React from "react";
import ResponsiveRoadmapBox from "../components/ResponsiveRoadmapBox";
import { roadmaplist } from "../data/roadmaps";

const ResponsiveRoadmapsWrapper = () => {
  return (
    <div className="block xmd:hidden w-full relative h-fit mt-[50px] xmd:mt-[200px] px-[30px] xmd:px-[60px] xl:px-[120px]">
      {roadmaplist.map((item, index) => (
        <ResponsiveRoadmapBox key={index} index={index} item={item} />
      ))}
    </div>
  );
};

export default ResponsiveRoadmapsWrapper;
