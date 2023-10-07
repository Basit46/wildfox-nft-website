import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="question w-full h-fit mb-[30px] bg-[#fffdf1] border-[1px] border-black p-[30px] rounded-[20px]"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="uppercase font-Gulfs text-[17px] vsm:text-[20px] md:text-[30px] xmd:text-[42px] leading-[1.2]">
          {question.text}
        </h1>
        <button>
          <IoIosArrowDown
            className={`${
              isOpen && "rotate-[180deg]"
            } text-[30px] font-extrabold duration-300 ease-in-out`}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "h-[170px] vsm:h-[140px] md:h-[90px]" : "h-0"
        } duration-300 overflow-hidden`}
      >
        <p className="pt-[30px] text-[15.4px] tracking-[-0.154px] leading-[23.1px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores id
          praesentium reprehenderit ab est excepturi nulla provident, delectus
          asperiores nostrum!
        </p>
      </div>
    </div>
  );
};

export default Question;
