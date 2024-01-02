"use client";
import React from "react";
import crm_clipart from "../../../public/png/crm_clipart.png";
import Button from "../Components/Button";
import Image from "next/image";

const SectionSix = () => {
  return (
    <div className="lg:min-h-[40vh] min-h-[90vh] w-full flex items-center justify-center lg:mb-0 mb-10">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[69.5vw] w-[90vw] lg:min-h-[40vh] min-h-[90vh] lg:mt-0">
        <div className="col-span-4 flex flex-col justify-center lg:max-w-[60vh]">
          <Image src={crm_clipart} alt="crm_clipart" className="w-full" />
        </div>
        <div className="col-span-4 flex flex-col lg:items-end items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] lg:text-[32px] text-xl lg:w-4/5 w-[90vw] lg:text-right text-start lg:leading-10">
            Already Using CRM{" "}
            <span className="text-white lg:text-[36px] text-xl font-semibold">
              With Near To No Results?
            </span>
          </h6>
          <p className="text-white lg:w-5/6 text-base lg:text-end text-start my-4">
            We will help you solve all your crm challenges. A crm solution can
            grow your company only when you unlock its full potential and use it
            in a proper way. Here are the pain points you might be facing and
            get frustrated.
          </p>
          <ul className=" flex flex-col lg:items-end items-start w-full list-inside lg:text-right text-white">
            <li className="my-2 text-base flex lg:flex-row flex-row-reverse">
              <span className="px-2">Difficulties in managing integrations</span> 
              <span className="text-[#4D8CFC]">▣</span>
            </li>
            <li className="my-2 text-base flex lg:flex-row flex-row-reverse">
              <span className="px-2">Less return on investment</span>
              <span className="text-[#4D8CFC]">▣</span>
            </li>
            <li className="my-2 text-base flex lg:flex-row flex-row-reverse">
            <span className="px-2">Low customer retention rates</span>
              <span className="text-[#4D8CFC]">▣</span>
            </li>
            <li className="my-2 text-base flex lg:flex-row flex-row-reverse">
            <span className="px-2">Complicated tracking and reporting</span>
              <span className="text-[#4D8CFC]">▣</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
