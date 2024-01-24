"use client";
import React from "react";
import pcphoto from "/public/png/pcs.png";
import Button from "../../Button";
import Image from "next/image";
const SectionFive = () => {
  return (
    <div className="lg:min-h-[40vh] min-h-full w-full flex items-center justify-center lg:my-0 my-[64px]">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col-reverse justify-center items-center w-full lg:px-[12vw] px-[4vw] lg:min-h-[40vh] min-h-full lg:mt-0">
        <div className="col-span-4 flex flex-col items-start justify-center lg:min-h-full">
          <h6 className="text-blue-500 lg:text-[32px] text-xl lg:w-4/5 w-[90vw] text-start lg:leading-10">
            Never Used CRM & Not Sure{" "}
            <span className="text-blue-800 lg:text-[36px] text-xl font-semibold">
              About The Potential?
            </span>
          </h6>

          <p className="text-blue-800 lg:w-4/5 lg:text-base text-start my-4">
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
