import React from "react";
import wfs from "../assets/wfs.svg";
import Question from "../components/Question";
import { questionsList } from "../data/questions";

const FAQ = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#f9f0dc] px-[70px] pb-[100px] flex justify-between">
      <div className="relative">
        <h1 className="font-Gulfs text-[84px] leading-[1]">FAQ</h1>
        <img
          className="absolute top-[15px] left-[-50px] rotate-[-20deg]"
          src={wfs}
          alt="wfs text"
        />
      </div>
      <div className="mt-[20px] w-[73%]">
        {questionsList.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
