"use client";
import React from "react";
import crm_demo from "../../../public/png/Demo.png";
import Button from "../Components/Button";
import Image from "next/image";

const SectionNine = () => {
  return (
    <div className="lg:max-h-[92vh] min-h-full w-full flex items-center justify-center lg:mt-0 mt-[64px]">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[69.5vw] w-[90vw] lg:max-h-[92vh] min-h-full lg:mt-0">
        <div className="col-span-5 flex flex-col justify-center lg:min-h-full">
          <h6 className="text-start text-[#4D8CFC] lg:text-[32px] text-xl lg:leading-10">Book a free</h6>
          <h1 className="text-white lg:text-[36px] text-xl text-start lg:leading-10 font-semibold mb-8">
            Demo Now !
          </h1>
          <Image src={crm_demo} alt="QLogo" />
        </div>
        <div className="col-span-3 flex flex-col lg:items-end items-center justify-center lg:min-h-full lg:mt-0 mt-8">
          <h6 className="text-[#4D8CFC] lg:text-[32px] text-xl lg:w-full w-[90vw] text-start lg:leading-10 ">
            Unlock the Power
          </h6>
          <h1 className="text-white lg:text-[32px] font-semibold text-xl w-full text-start"> Free Demonstration</h1>

          <p className="text-white w-full text-base text-start my-4">
            To experience the whole platform for free, book a Practical Demo.
          </p>

          <div className="flex flex-col justify-start w-full">
            <Button variant={1} title="Book a practical demo ➟" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
