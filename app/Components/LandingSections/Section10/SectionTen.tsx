import React, { useEffect, useState } from "react";
import Image from "next/image";
import Images from "../../images";
import { competitors } from "./TenData";
const SectionTen = () => {
  const [imgWidth, setImgWidth] = useState(100);
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setImgWidth(50);
      } else {
        setImgWidth(100);
      }
    };

    updateSlidesToShow(); // initial call
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  return (
    <div className="lg:min-h-[92vh] min-h-[90vh] bg-gradient-to-b from-gray-800 to-gray-900 w-full flex items-center justify-center lg:mt-0 mt-16">
      <div className="flex flex-col justify-center w-full lg:px-[12vw] px-[4vw] lg:min-h-[92vh] min-h-[90vh]">
        <h6 className="text-slate-300 lg:text-[32px] text-xl text-start m-0">
          The best deal is here to
        </h6>
        <h1 className="text-blue-500 lg:text-[36px] text-xl text-start lg:leading-10 font-semibold mb-4 ">
          Save Your Business
        </h1>
        <p className="text-slate-300 lg:w-3/5 w-[90vw] lg:text-[1.2rem] text-base text-start mb-[10px] lg:leading-10">
          Discover Unmatched Value: Compare Our Pricing and Features
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="flex flex-col justify-center items-center border-[2px] border-violet-500 rounded-md drop-shadow-md lg:w-3/4 lg:h-full w-full">
            <Image src={Images.Logo} alt="logo" className="w-3/5" />
            <p className="lg:text-[2rem] text-slate-300">$3.49/month</p>
          </div>
          <div className=" flex flex-col items-center justify-center lg:mb-0 mb-16">
            {competitors.map((items, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-4/5 w-full flex items-center justify-between border-dashed border-b-[2px] border-blue-800 lg:py-2 py-0.5"
                >
                  <Image
                    src={items.image}
                    alt={`${items}`}
                    width={imgWidth}
                    height={imgWidth}
                  />
                  <p className="text-slate-300 text-base">{items.title}</p>
                  <p className="text-blue-500 text-base">
                    ${items.price}/month
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTen;
