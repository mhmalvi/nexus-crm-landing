import React from "react";
import Image from "next/image";
import Logo from "../../../public/png/Q-icon.png";
import { competitors } from "./TenData";
const SectionTen = () => {
  return (
    <div className="lg:min-h-[100vh] min-h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col justify-center lg:w-[75vw] w-[90vw] lg:min-h-[100vh] min-h-[90vh] lg:mt-0">
        <h6 className="text-[#4D8CFC] lg:text-[32px] text-[24px] lg:text-start text-center m-0">
          The best deal is here to
        </h6>
        <h1 className="text-white lg:text-[36px] text-[32px] lg:text-start text-center leading-[40px] lg:mb-12">
          Save Your Business
        </h1>
        <p className="text-white lg:w-3/5 w-[90vw] lg:text-[1.2rem] text-[1rem] font-[400] lg:text-start text-center mb-[10px] leading-5">
          Discover Unmatched Value: Compare Our Pricing and Features
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col justify-center items-center lg:border-[2px] border-b-[2px] border-[#4D8CFC] lg:rounded-xl drop-shadow-md lg:w-3/4 w-full">
            <Image src={Logo} alt="logo" className="w-3/5" />
            <p className="lg:text-[2rem]">$3.49/month</p>
          </div>
          <div className=" flex flex-col items-center justify-center lg:mb-0 mb-20">
            {competitors.map((items,index) => {
              return(
                <div key={index} className="lg:w-4/5 w-full flex items-center justify-between border-dashed border-b-[2px] py-2">
                  <Image src={items.image} alt={`${items}`} width={100} height={100}/>
                  <p>{items.title}</p>
                  <p className="text-[#4D8CFC] font-[700]">${items.price}/month</p>
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
