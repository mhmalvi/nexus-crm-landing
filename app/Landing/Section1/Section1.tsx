import React from "react";
import "./section1.css";
import HeroSVG from "./HeroSVG";
import Button from "../Components/Button";
const SectionOne = () => {
  return (
    <div className="lg:min-h-[87vh] min-h-full w-full flex items-center justify-center shadow-xl lg:mt-0 mt-[24px]">
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse justify-around lg:w-[69.5vw] w-[90vw] min-h-[90vh] ">
        <div className="min-h-full flex flex-col lg:items-start items-center justify-center lg:mb-0 mb-2">
          <div className="flex flex-col lg:mb-8 mb-0 min-h-[20vh]">
            <h1 className="lg:text-[4vw] text-[40px] font-bold text-white lg:text-start lg:leading-[4vw] ">
              Easiest Way to
            </h1>
            <h1 className="lg:text-[2.5vw] text-[24px] text-[#4D8CFC] lg:text-start lg:leading-[4vw] leading-[4vw]">
              Skyrocketing Conversions
            </h1>
            <p className="text-white font-light lg:w-4/5 w-[90vw] lg:text-[1vw] lg:text-start text-[16px] lg:pt-0 pt-4">
              Leads from Campaigns, Assign & Manage, Communicate & Update,
              Payment & Beyond.
            </p>
          </div>
          <div className=" w-full h-[15vh] lg:mt-0 mt-[48px]">
            <form className="flex flex-col lg:items-start justify-between h-full">
              <div className="w-full flex flex-col">
                <label className="text-[#c5c5c5] lg:text-[1rem] text-[16px] font-[400] m-0 p-0 lg:text-start ">
                  Just begin with a simple step
                </label>
                <input
                  type="email"
                  className="lg:w-1/2 h-[5vh] pl-[14px] w-[90vw] lg:rounded-r-[12px] rounded-[12px] border-[1px] bg-transparent focus:outline-none active:none text-white"
                  placeholder="Enter your email address"
                />
              </div>
              <Button title="Let's get started ➟" variant={1} />
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
