"use client"
import React from "react";
import crm_show from "../../../public/png/crm_show.png";
import Image from "next/image";
const SectionThree = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-[100vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col flex-col lg:w-[75vw] w-[90vw] lg:min-h-[60vh] min-h-[87vh] lg:mt-0">
        <div className="col-span-5 flex flex-col lg:items-start items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] text-[32px] leading-10">Instant Reports at</h6>
          <h1 className="text-white text-[36px] lg:text-start text-center leading-10 lg:mb-12">
            Your Fingertips
          </h1>
          <p className="text-white lg:w-3/5 w-[90vw] lg:text-[1.2rem] text-[1rem] font-[400] lg:text-start text-center">
            Effortlessly Access Managerial Reports and Save Time.
          </p>
          <p className="text-[#4D8CFC] lg:w-4/6 lg:text-[1.5rem] text-[1rem] font-[400] lg:text-start text-center">
            Get Sales & Revenue Summary, Lead Conversion Rate, Campaigns
            Details, Campaigns Revenue, Lead Quality Ratio, Lead Summary,
            Individual SalesPerson Reports and many more without any effort.
          </p>
        </div>
        <div className="col-span-3 flex flex-col justify-center lg:min-h-full">
          <Image src={crm_show} alt="crm_show" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
