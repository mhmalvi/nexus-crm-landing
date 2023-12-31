"use client";
import React from "react";
import TopBarImg from "/public/bgImage/Topbar.png";
import { AiOutlinePhone , AiOutlineMail } from "react-icons/ai";

const Topbar = () => {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        background: `url(${TopBarImg.src}) center / cover`,
      }}
    >
      <div className="w-[100vw] h-[5vh] px-[2.5vw] grid grid-cols-12 gap-4">
        <div className="col-span-9"></div>
        <div className="col-span-3 grid grid-cols-2 gap-2">
          <div className="flex w-full justify-end items-center text-right leading-[10px] my-auto ">
            <h1 className="text-white px-4">+611300813316</h1>
            <AiOutlinePhone />
          </div>
          <div className="flex w-full justify-end items-center text-right leading-[10px] my-auto ">
            <h1 className="text-white px-4">info@quadque.tech</h1>
            <AiOutlineMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
