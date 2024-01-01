"use client";
import React from "react";
import crm_demo from "../../../public/png/Demo.png";
import Button from "../Components/Button";
import Image from "next/image";

const SectionNine = () => {
  return (
    <div className="lg:max-h-[92vh] min-h-[90vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[69.5vw] w-[90vw] lg:max-h-[92vh] min-h-[90vh] lg:mt-0">
        <div className="col-span-5 flex flex-col justify-center lg:min-h-full">
          <h6 className="lg:text-start text-center text-[#4D8CFC] text-[32px] leading-10">Book a free</h6>
          <h1 className="text-white text-[36px] lg:text-start text-center leading-10 font-semibold lg:mb-8 mb-10">
            Demo Now !
          </h1>
          <Image src={crm_demo} alt="QLogo" />
        </div>
        <div className="col-span-3 flex flex-col lg:items-end items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] text-[32px]  lg:w-full w-[90vw] lg:text-start text-center leading-5 ">
            Unlock the Power
          </h6>
          <h1 className="text-white lg:text-[32px] font-semibold text-[32px] lg:w-full lg:text-start"> Free Demonstration</h1>

          <p className="text-white  lg:w-full text-base lg:text-start text-center my-4">
            To experience the whole platform for free, book a Practical Demo.
          </p>

          <div className="flex justify-center lg:justify-start  lg:w-full">
            <Button variant={1} title="Book a practical demo ➟" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
