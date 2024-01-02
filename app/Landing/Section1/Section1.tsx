import React from "react";
import "./section1.css";
import HeroSVG from "./HeroSVG";
import Button from "../Components/Button";
const SectionOne = () => {
  return (
    <div className="lg:min-h-[87vh] min-h-[95vh] w-full flex items-center justify-center shadow-xl">
      <div className="lg:grid lg:grid-cols-2 flex flex-col flex-col-reverse lg:w-[69.5vw] w-[90vw] min-h-full">
        <div className="min-h-full flex flex-col lg:items-start items-center justify-center ">
          <div className="flex flex-col mb-8">
            <h1 className="lg:text-[4vw] text-[40px] font-bold text-white lg:text-start lg:leading-[4vw] ">
              Easiest Way to
            </h1>
            <h1 className="lg:text-[2.5vw] text-[24px] text-[#4D8CFC] lg:text-start lg:leading-[4vw] leading-[3.5vw]">
              Skyrocketing Conversions
            </h1>
            <p className="text-white lg:w-4/5 w-[90vw] lg:text-[1vw] lg:text-start text-[12px] lg:pt-0 pt-5">
              Leads from Campaigns, Assign and Manage, Communicate & Update,
              Payment and Beyond.
            </p>
          </div>
          <div className=" w-full h-[15vh] ">
            <form className="flex flex-col lg:items-start justify-between h-full">
              <div className="w-full flex flex-col">
                <label className="text-[#c5c5c5] lg:text-[1rem] text-[16px] font-[400] m-0 p-0 lg:text-start ">
                  Just begin with a simple step
                </label>
                <input
                  type="email"
                  className="lg:w-1/2 h-[5vh] pl-[14px] w-[90vw] lg:rounded-r-[12px] rounded-[12px]"
                  placeholder="Enter your email address"
                />
              </div>
              <Button title="Let's get started ➟" variant={1} />
            </form>
          </div>
        </div>
        <div className="lg:min-h-full flex lg:items-center items-start justify-center min-h-1/2 lg:mt-0 ">
          <HeroSVG />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
