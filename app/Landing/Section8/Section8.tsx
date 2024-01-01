"use client";
import React from "react";
import stats from "../../../public/png/stats.png";
import Image from "next/image";
const SectionEight = () => {
  return (
    <div className="lg:min-h-[60vh] min-h-[100vh] w-full flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col justify-around lg:w-[69.5vw] w-[90vw] lg:min-h-[60vh] min-h-[87vh] lg:mt-0">
        <div className="col-span-4 flex flex-col justify-center lg:min-h-full">
          <Image src={stats} alt="stats" className="w-full" />
        </div>
        <div className="col-span-4 flex flex-col lg:items-end items-center justify-center lg:min-h-full">
          <h1 className="text-white text-[36px] text-end font-semibold leading-10">Why Us?</h1>

          <p className="text-white lg:w-5/6 w-[90vw] text-base lg:text-end text-center my-4">
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
