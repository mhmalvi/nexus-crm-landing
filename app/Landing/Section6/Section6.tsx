"use client";
import React from "react";
import crm_clipart from "../../../public/png/crm_clipart.png";
import Button from "../Components/Button";
import Image from "next/image";

const SectionSix = () => {
  return (
    <div className="lg:min-h-[40vh] min-h-[90vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[69.5vw] w-[90vw] lg:min-h-[40vh] min-h-[90vh] lg:mt-0">
        <div className="col-span-4 flex flex-col justify-center lg:max-w-[60vh]">
          <Image src={crm_clipart} alt="crm_clipart" className="w-full" />
        </div>
        <div className="col-span-4 flex flex-col lg:items-end items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] text-[2vw] lg:w-4/5 w-[90vw] lg:text-right text-center leading-10">
            Already Using
            <span className="text-white text-[36px] font-semibold"> CRM With Near</span> To No
            Results?
          </h6>
          <p className="text-white lg:w-5/6 text-base lg:text-end text-center my-4">
            We will help you solve all your crm challenges. A crm solution can
            grow your company only when you unlock its full potential and use it
            in a proper way. Here are the pain points you might be facing and
            get frustrated.
          </p>
          <ul className="list-inside text-right text-white">
            <li className="my-2 text-base ">
              Difficulties in managing integrations{" "}
              <span className="text-[#4D8CFC]">▣</span>
            </li>
            <li className="my-2 text-base">
              Less return on investment{" "}
              <span className="text-[#4D8CFC]">▣</span>
            </li>
            <li className="my-2 text-base">
              Low customer retention rates{" "}
              <span className="text-[#4D8CFC]">▣</span>
            </li>
            <li className="my-2 text-base">
              Complicated tracking and reporting{" "}
              <span className="text-[#4D8CFC]">▣</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
