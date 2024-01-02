"use client";
import React, { useEffect, useState } from "react";
import { TabAllData, tabMenuList } from "./Section2Data";
import "./style.css";
import Button from "../Components/Button";
import { tabData, tabProp } from "../Components/type";
import Image from "next/image";
const SectionTwo = () => {
  const [currentTabId, setCurrentTabId] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [tabMenu, setTabmenu] = useState<tabProp[]>([]);
  const [TabData, setTabData] = useState<tabData>();

  const handleTab = (id: number, idx: number) => {
    setCurrentTabId(id);
    setActiveTab(idx);
  };
  useEffect(() => {
    const data = tabMenuList;
    setTabmenu(data);
  }, []);

  useEffect(() => {
    const data = TabAllData;
    const tabDataDetail = data?.filter(
      (item, idx) => item?.tid === currentTabId
    );
    setTabData(tabDataDetail[0]);
  }, [currentTabId]);

  console.log("tab data list ", tabMenuList, " tab data: ", currentTabId);

  return (
    <div className="lg:min-h-[100vh] min-h-full w-full flex items-center justify-center lg:mb-0 mb-[64px]">
      <div className="lg:grid lg:grid-cols-8 lg:gap-8 flex flex-col flex-col lg:w-[69.5vw] w-[90vw] lg:min-h-[100vh] min-h-full lg:mt-0">
        <div className="col-span-5 flex flex-col items-start justify-center lg:min-h-full">
          <h6 className="text-[#4D8CFC] font-normal lg:text-[2.5vw] text-[16px]">
            Single Solution to
          </h6>
          <h1 className="text-white lg:text-[2.5vw] text-[20px] font-semibold lg:text-start text-center leading-10 m-0">
            Boost Your Sales and Conversion
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            {tabMenu &&
              tabMenu?.map((tab, idx) => {
                return (
                  <button
                    onClick={() => {
                      handleTab(tab?.id, idx);
                    }}
                    key={idx}
                    id="mui-p-17322-T-1"
                    className={`flex ${
                      activeTab === idx ? "crm-tab-button" : ""
                    } mb-[16px] lg:min-w-[8.5vw] ease-in duration-200 min-w-[27px] border-0 m-0 outline-0 px-[5px] lg:py-[16px] py-[5px] hidden whitespace-normal items-center justify-center flex-col text-white text-center font-[500] leading-[1.25] lg:text-[1vw] text-[9px]`}
                    type="button"
                    role="tab"
                    tabIndex={activeTab === idx ? 0 : -1}
                    style={{
                      display: "inline-flex",
                    }}
                  >
                    <Image
                      className=" block ease-in duration-200 align-middle border-0 max-w-full w-[3.5rem] h-[2.5rem] mb-[0.5rem] mt-[0.7rem] p-0"
                      src={tab?.icon}
                      alt="tab"
                    />
                    {tab?.name}
                  </button>
                );
              })}
          </div>

          <Image
            className={"ease-in duration-200 shadow-xl"}
            src={TabData?.image || ""}
            alt={`${TabData?.tid}`}
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center lg:items-start items-start lg:text-start text-center lg:h-full">
          <h1 className="font-normal lg:mt-0 mt-[16px] text-start flex lg:flex-row flex-col">
            <span className="lg:text-[24px] text-[16px] text-[#4D8CFC]">{TabData?.title1}</span>{" "}
            <span className="lg:text-[24px] text-[20px] text-white">{TabData?.title2}</span>
          </h1>
          <h6 className="lg:text-[16px] text-[12px] leading-[20px] text-start text-white lg:text-start my-4">
            {TabData?.desc}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
