"use client"
import React from "react";
import TopBarImg from "/public/bgImage/Topbar.png";
const Topbar = () => {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        background: `url(${TopBarImg.src}) center / cover`,
      }}
    >
      <div className="w-[95vw] h-[5vh] grid grid-cols-8 gap-4">
        <div className="col-span-4"></div>
        <div className="col-span-2 grid grid-cols-2 gap-4 ">
          <div className="grid-cols-1 text-right leading-[10px] my-auto ">
            <h6 className="text-white font-[100] text-xs m-0 p-0">Call Us</h6>
            <h1 className="text-white">+01765276560</h1>
          </div>
          <div className="grid-cols-1 text-right leading-[10px] my-auto">
            <h6 className="text-white font-[100] text-xs m-0 p-0">Email Us</h6>
            <h1 className="text-white">info@quadque.tech</h1>
          </div>
        </div>
        <div className="col-span-2 grid">
          <div className="grid-cols-1 text-right leading-[10px] my-auto ">
            <h6 className="text-white font-[100] text-xs m-0 p-0">Language</h6>
            <h1 className="text-white">Eng/Bn</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
