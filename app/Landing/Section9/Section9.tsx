"use client";
import React from "react";
import crm_demo from "../../../public/png/Demo.png";
import Button from "../Components/Button";
import Image from "next/image";

const SectionNine = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-[90vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[75vw] w-[90vw] lg:min-h-[60vh] min-h-[90vh] lg:mt-0">
        <div className="col-span-5 flex flex-col justify-center lg:min-h-full">
          <h6 className="lg:text-start text-center text-[#4D8CFC] text-[32px] m-0">Book a free</h6>
          <h1 className="text-white text-[36px] lg:text-start text-center leading-[30px] lg:mb-3 mb-10">
            Demo Now !
          </h1>
          <Image src={crm_demo} alt="QLogo" />
        </div>
        <div className="col-span-3 flex flex-col lg:items-end items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] text-[32px]  lg:w-4/5 w-[90vw] lg:text-start text-center leading-5 mt-10">
            Unlock the Power
          </h6>
          <h1 className="text-white lg:text-[36px] text-[32px] lg:w-4/5 lg:text-start"> Free Demonstration</h1>

          <p className="text-white  lg:w-4/5 text-[1rem] font-[200] lg:text-start text-center my-4">
            To experience the whole platform for free, book a Practical Demo.
          </p>

          <div className="flex justify-center lg:justify-start  lg:w-4/5">
            <Button variant={1} title="Book a practical demo ➟" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
