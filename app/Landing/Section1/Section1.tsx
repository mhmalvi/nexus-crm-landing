import React from "react";
import "./section1.css";
import HeroSVG from "./HeroSVG";
import Button from "../Components/Button";
import HeroBG from "/public/bgImage/HeroBG.svg";
const SectionOne = () => {
  return (
    <div
      className="lg:min-h-[87vh] min-h-full w-full flex items-center justify-center shadow-xl  "
      style={{
        background: `url(${HeroBG.src}) center / cover`,
      }}
    >
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse justify-around lg:w-full lg:px-[12vw] px-[4vw] w-full min-h-[90vh] ">
        <div className="min-h-full flex flex-col lg:items-start items-center justify-center lg:mb-0 mb-2">
          <div className="flex flex-col lg:mb-8 mb-0 min-h-[20vh]">
            <h1 className="lg:text-[4vw] text-[40px] font-bold text-white lg:text-start lg:leading-[4vw] ">
              Easiest Way to
            </h1>
            <h1 className="lg:text-[2.5vw] text-[24px] text-blue-500 lg:text-start lg:leading-[4vw] leading-[4vw]">
              Skyrocketing Conversions
            </h1>
            <p className="text-white font-light lg:w-4/5 w-[90vw] lg:text-[1vw] lg:text-start text-[16px] lg:pt-0 pt-4">
              Leads from Campaigns, Assign & Manage, Communicate & Update,
              Payment & Beyond.
            </p>
          </div>
          <div className=" w-full h-[15vh] lg:mt-0 mt-[48px]">
            <form className="flex flex-col lg:items-start justify-between h-full">
              <Button title="Start Now ➟" variant={1} />
            </form>
          </div>
        </div>
        <div className="lg:min-h-full flex lg:items-center items-start justify-center min-h-1/2 lg:mb-0">
          <HeroSVG />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
