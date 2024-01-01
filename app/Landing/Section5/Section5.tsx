"use client";
import React from "react";
import pcphoto from "../../../public/png/pcs.png";
import Button from "../Components/Button";
import Image from "next/image";
const SectionFive = () => {
  return (
    <div className="lg:min-h-[40vh] min-h-[80vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-center items-center lg:w-[69.5vw] w-[90vw] lg:min-h-[30vh] min-h-[80vh] lg:mt-0">
        <div className="col-span-4 flex flex-col lg:items-start items-center justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] text-[32px] lg:w-4/5 w-[90vw] lg:text-start text-center leading-10">
            Never <span className="text-white text-[36px] font-semibold">Used CRM</span> & Not
            Sure About The Potential?
          </h6>

          <p className="text-white lg:w-4/5 lg:text-base lg:text-start text-center my-4">
            The major working and potential of a CRM solution is to maintain a
            better customer interaction, track and monitor their activities in
            order to boost revenues.
          </p>
        </div>
        <div className="col-span-4 flex flex-col justify-center lg:min-h-[30vh]">
          <Image src={pcphoto} alt="pcPhoto" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
