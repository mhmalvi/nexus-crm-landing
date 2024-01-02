"use client";
import React from "react";
import Advantages_SVG from "./Advantages_SVG";
const SectionSeven = () => {
  return (
    <div className=" lg:min-h-[40vh] min-h-full w-full flex items-center justify-center section7bg overflow-hidden shadow-inner shadow-xl">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col-reverse items-center justify-center lg:w-[69.5vw] w-[90vw] lg:min-h-[30vh] min-h-full lg:mt-0">
        <div className="lg:col-span-1 flex flex-col items-start justify-center lg:min-h-full lg:mb-0 mb-4">
          <h1 className="text-white lg:text-start text-xl text-center lg:text-[32px] font-semibold lg:leading-10">
            The 5 greatest benefits{" "}
          </h1>
          <h1 className="text-[#4D8CFC] lg:text-[32px] text-xl lg:text-start text-center lg:leading-10">
            of Queleads CRM
          </h1>
          <p className="text-white lg:w-4/5 w-[90vw] text-base lg:text-start my-4">
            While the benefits vary by department or industry, five benefits of
            CRM platforms that affect every user include :
          </p>
          <ul className="list-inside text-white">
            <li className="my-2">
              <span className="text-[#4D8CFC]">▣</span> Trustworthy reporting
            </li>
            <li className="my-2">
              <span className="text-[#4D8CFC]">▣</span> Dashboards that visually
              showcase data
            </li>
            <li className="my-2">
              <span className="text-[#4D8CFC]">▣</span> Improved messaging with
              automation
            </li>
            <li className="my-2">
              <span className="text-[#4D8CFC]">▣</span> Simplified collaboration
            </li>
            <li className="my-2">
              <span className="text-[#4D8CFC]">▣</span> Efficiency enhanced by
              automation
            </li>
          </ul>
        </div>
        <div className="lg:col-span-1 flex flex-col justify-center lg:min-h-full min-h-[20vh] w-full lg:mb-0 mb-4">
            <Advantages_SVG />
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
