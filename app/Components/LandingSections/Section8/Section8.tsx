"use client";
import React from "react";
import Images from "../../images";
import Image from "next/image";
const SectionEight = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-full w-full flex items-center justify-center lg:mt-0 mt-[64px]">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-around w-full lg:px-[12vw] px-[4vw] lg:min-h-[60vh] min-h-full lg:mt-0">
        <div className="col-span-4 flex flex-col justify-center lg:min-h-full">
          <Image src={Images.stats} alt="stats" className="w-full" />
        </div>
        <div className="col-span-4 flex flex-col lg:items-end items-start justify-center lg:min-h-full lg:mt-0 mt-[32px]">
          <h1 className="text-blue-500 lg:text-[36px] text-xl text-end font-semibold lg:leading-10">
            Why Us?
          </h1>

          <p className="text-blue-800 lg:w-5/6 w-[90vw] text-base lg:text-end text-start my-4">
            Queleads CRM—with its broad coverage, deep features, and intuitive
            UI—can go head to head against any other big brand name when it
            comes to technology and functionality. Where other CRMs use
            predatory business practices and aggressive, multi-year contracts to
            strong arm users into sticking around, we&apos;re so confident in
            the strength of our product that we offer flexible, month-to-month
            subscriptions that can grow with your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
