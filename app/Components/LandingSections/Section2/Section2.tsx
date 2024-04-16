"use client";
import React, { ReactEventHandler, useEffect, useState } from "react";
import { tabMenuList } from "./Section2Data";
import "./style.css";
import { tabProp } from "../../type";
import Images from "../../Images";
import Image from "next/image";

const SectionTwo = () => {
  const [tabMenu, setTabmenu] = useState<tabProp>({
    id: 1,
    icon: Images.LeadScan,
    name: "LeadsScan",
    isActive: false,
    image: Images.tabImage1,
    title1: "Leads to Conversion:",
    title2: "One Platform, Total Control!",
    desc: `Effortlessly generate and gather leads from multiple sources, all in one platform`,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalTime = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % tabMenuList.length;
      setTabmenu(tabMenuList[nextIndex]);
      setCurrentIndex(nextIndex);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="h-full w-full flex gap-4 items-center justify-between lg:px-60 px-4 py-16">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 items-start justify-center h-full">
          <h6 className="text-blue-500 font-normal lg:text-5xl text-3xl">
            Single Solution to
          </h6>
          <h1 className="text-blue-800 lg:text-4xl text-2xl font-semibold text-start m-0 lg:pb-0 pb-4">
            Boost Your Sales & Conversion
          </h1>
          <div className="ease-in duration-200 h-full 2xl:gap-4 gap-2 flex flex-wrap items-center justify-between lg:w-7/12 w-full  lg:pb-0 pb-4">
            {tabMenuList.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`ease-in duration-200 h-full flex flex-col flex-wrap items-center justify-center m-0 p-0 border-b-2 ${
                    currentIndex === idx ? "border-black" : "border-blue-500"
                  }`}
                  onClick={() => {
                    setTabmenu(item);
                    setCurrentIndex(idx);
                  }}
                >
                  <Image
                    src={item.icon || null}
                    alt="tab"
                    className="lg:w-20 w-8"
                  />
                  <h1 className="m-0 p-0 text-gray-800">{item.name}</h1>
                </button>
              );
            })}
          </div>
        </div>
        {tabMenu && (
          <div className="ease-in duration-200 flex lg:flex-row flex-col gap-8 items-center justify-between">
            <Image
              src={tabMenu.image || null}
              alt={tabMenu.name}
              className="lg:w-2/3 ease-in duration-200"
            />
            <div className="flex flex-col gap-4 xl:w-1/3">
              <h1 className="m-0 p-0 text-2xl text-blue-800 font-semibold">
                {tabMenu.title1} {tabMenu.title2}
              </h1>
              <h1 className="m-0 p-0 text-blue-800 text-base">
                {tabMenu.desc}
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
