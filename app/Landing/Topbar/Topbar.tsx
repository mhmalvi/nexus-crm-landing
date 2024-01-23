"use client";
import React from "react";
import TopBarImg from "/public/bgImage/Topbar.png";
import { AiOutlinePhone , AiOutlineMail } from "react-icons/ai";

const Topbar = () => {
  return (
    <div
      className="z-20 w-full flex items-center justify-center shadow-md bg-gradient-to-b from-black to-slate-900 px-[12vw]"
      // style={{
      //   background: `url(${TopBarImg.src}) center / cover`,
      // }}
    >
      <div className="w-[100vw] h-[5vh] flex items-center justify-end">
        <div className=" grid grid-cols-2 ">
          <div className="flex w-full justify-end items-center text-right leading-[10px] my-auto text-sm">
            <h1 className="text-white px-4">+611300813316</h1>
            <AiOutlinePhone className="text-white"/>
          </div>
          <div className="flex w-full justify-end items-center text-right leading-[10px] my-auto text-sm">
            <h1 className="text-white px-4">info@quadque.tech</h1>
            <AiOutlineMail className="text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
