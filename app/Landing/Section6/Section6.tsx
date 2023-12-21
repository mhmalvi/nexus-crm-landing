"use client";
import React from "react";
import crmclipart from "../../../public/png/crm_clipart.png";
import Button from "../Components/Button";
import Image from "next/image";

const SectionSix = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-[90vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[75vw] w-[90vw] lg:min-h-[60vh] min-h-[90vh] lg:mt-0">
        <div className="col-span-4 flex flex-col justify-center lg:min-h-full">
          <Image src={crmclipart} alt="QLogo" />
        </div>
        <div className="col-span-4 flex flex-col lg:items-end items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] text-[32px] lg:w-3/5 w-[90vw] lg:text-right text-center leading-10">
            Already Using
            <span className="text-white text-[36px]">{" "}CRM With Near</span> To No
            Results?
          </h6>

          <p className="text-white lg:w-5/6 text-[1rem] font-[200] lg:text-end text-center">
            We will help you solve all your crm challenges. A crm solution can
            grow your company only when you unlock its full potential and use it
            in a proper way. Here are the pain points you might be facing and
            get frustrated.
          </p>
          <ul className="list-inside text-right my-4">
            <li className="my-2">Difficulties in managing integrations <span className="text-[#4D8CFC]">▣</span></li>
            <li className="my-2">Less return on investment <span className="text-[#4D8CFC]">▣</span></li>
            <li className="my-2">Low customer retention rates <span className="text-[#4D8CFC]">▣</span></li>
            <li className="my-2">Complicated tracking and reporting <span className="text-[#4D8CFC]">▣</span></li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <Button variant={1} title="Boost Your Sales Funnel ➟" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
