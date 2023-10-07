import React, { useEffect, useRef } from "react";
import collage1 from "../assets/collage1.png";
import collage2 from "../assets/collage2.png";
import collage3 from "../assets/collage3.png";
import maskIcon from "../assets/mask.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Collage = () => {
  const collageSection = useRef();
  const collageRef1 = useRef();
  const collageRef2 = useRef();
  const collageRef3 = useRef();

  useEffect(() => {
    gsap.to(collageRef1.current, {
      x: -300,
      scrollTrigger: {
        trigger: collageSection.current,
        scrub: 1,
      },
    });

    gsap.to(collageRef2.current, {
      x: 300,
      scrollTrigger: {
        trigger: collageSection.current,
        scrub: 1,
      },
    });

    gsap.to(collageRef3.current, {
      x: -300,
      scrollTrigger: {
        trigger: collageSection.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={collageSection} className="w-full mt-[100px] xmd:mt-[200px]">
      <div className="w-full h-fit overflow-x-hidden">
        <div className="min-w-[2000px]">
          <img
            ref={collageRef1}
            className="ml-[-370px] w-[2000px] h-[253.75px]"
            src={collage1}
            alt="collage"
          />
          <img
            ref={collageRef2}
            className="ml-[-280px] w-[2000px] h-[253.75px] my-[25px]"
            src={collage2}
            alt="collage"
          />
          <img
            ref={collageRef3}
            className="ml-[-340px] w-[2000px] h-[253.75px]"
            src={collage3}
            alt="collage"
          />
        </div>
      </div>

      {/* Marquees */}
      <div className="relative w-full vsm:mt-[120px] h-[70vh] overflow-y-hidden overflow-x-hidden">
        <div className="marquee absolute bg-[#fbbf2d] left-[-1%] top-[312px] origin-left rotate-[-6deg]">
          <div className="flex">
            <div className="ml-[27px]">
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
            </div>
            <div className="ml-[27px]">
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="marquee absolute bg-[#f8450b] left-[-1%] top-[210px] vsm:top-[160px] origin-left rotate-[6deg]">
          <div className="flex">
            <div className="ml-[27px]">
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
            </div>
            <div className="ml-[27px]">
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
              <div className="w-[58px] h-full flex items-center">
                <img src={maskIcon} alt="mask icon" />
              </div>
              <p>WILD FOX SQUAD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
