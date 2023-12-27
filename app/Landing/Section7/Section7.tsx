"use client";
import React from "react";
import advantages from "../../../public/png/advantages.png";
import Image from "next/image";
import Advantages_SVG from "./Advantages_SVG";
const SectionSeven = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-[100vh] w-full flex items-center justify-center section7bg overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col items-center justify-center lg:w-[75vw] w-[90vw] lg:min-h-[60vh] min-h-[90vh] lg:mt-0">
        <div className="lg:col-span-1 flex flex-col lg:items-start items-center justify-center lg:min-h-full">
          <h1 className="text-white lg:text-start text-center text-[32px] lg:m-0 mt-4">
            The 5 greatest benefits{" "}
          </h1>
          <h1 className="text-[#4D8CFC] text-[32px] lg:text-start text-center leading-[40px] lg:mb-12">
            of Queleads CRM
          </h1>
          <p className="text-white lg:w-3/5 w-[90vw] text-[1rem] font-[200] lg:text-start text-center">
            While the benefits vary by department or industry, five benefits of
            CRM platforms that affect every user include :
          </p>
          <ul className="list-inside my-4">
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
        <div className="lg:col-span-1 flex flex-col justify-center lg:min-h-full">
          <div className="">
            <Advantages_SVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
