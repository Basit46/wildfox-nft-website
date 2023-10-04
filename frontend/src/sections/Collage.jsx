import React from "react";
import collage1 from "../assets/collage1.png";
import collage2 from "../assets/collage2.png";
import collage3 from "../assets/collage3.png";

const Collage = () => {
  return (
    <div className="w-full mt-[200px]">
      <div className="w-full h-fit overflow-x-hidden">
        <div className="min-w-[2000px]">
          <img
            className="ml-[-370px] w-[2000px] h-[253.75px]"
            src={collage1}
            alt="collage"
          />
          <img
            className="ml-[-280px] w-[2000px] h-[253.75px] my-[25px]"
            src={collage2}
            alt="collage"
          />
          <img
            className="ml-[-340px] w-[2000px] h-[253.75px]"
            src={collage3}
            alt="collage"
          />
        </div>
      </div>

      {/* Marquees */}
    </div>
  );
};

export default Collage;
