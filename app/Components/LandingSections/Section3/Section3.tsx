"use client";
import React from "react";
import Images from "../../images"
import Image from "next/image";
const SectionThree = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-full w-full flex items-center justify-center mb-[62px]">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col-reverse w-full lg:px-[12vw] px-[4vw]  min-h-full">
        <div className="col-span-5 flex flex-col lg:items-start justify-center lg:min-h-[30vh]">
          <h6 className="text-blue-500 lg:text-[32px] text-xl font-normal lg:leading-10">
            Instant Reports at
          </h6>
          <h1 className="text-blue-800 lg:text-[36px] text-xl lg:text-start font-semibold lg:leading-10">
            Your Fingertips
          </h1>
          <p className="lg:w-4/6 lg:text-base text-base lg:text-start text-blue-800 mt-8">
            Effortlessly Access Managerial Reports and Save Time. Get Sales &
            Revenue Summary, Lead Conversion Rate, Campaigns Details, Campaigns
            Revenue, Lead Quality Ratio, Lead Summary, Individual SalesPerson
            Reports and many more without any effort.
          </p>
        </div>
        <div className="col-span-3 flex flex-col justify-center lg:min-h-full">
          <Image src={Images.crm_show} alt="crm_show" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
