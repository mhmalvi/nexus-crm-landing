import Image from "next/image";
import React from "react";
import FooterBg from "/public/bgImage/Topbar.png";

import footerLogo from "../../../public/png/logo_white.png";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import Button from "../Components/Button";
const FooterSection = () => {
  return (
    <div
      className="text-white lg:min-h-[60vh] min-h-[100vh] lg:w-full flex items-center lg:justify-center justify-around"
      style={{
        background: `url(${FooterBg.src}) center / cover`,
      }}
    >
      <div className=" flex flex-col justify-center lg:w-[69.5vw] w-[90vw] lg:min-h-[60vh] min-h-[87vh] lg:mt-0 ">
        <Image
          src={footerLogo}
          alt="footer_logo"
          className="lg:mb-20 mb-10 lg:mt-0 mt-10"
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:mb-8">
          <div className=" flex flex-col">
            <h1 className="font-[500]">Contact Us</h1>
            <div className="flex w-full my-2">
              <AiOutlinePhone className="w-[20px] h-[20px] mr-4" />
              <p className="w-4/5">+611300813316</p>
            </div>
            <div className="flex w-full my-2">
              <AiOutlineMail className="w-[20px] h-[20px] mr-4" />
              <p className="w-4/5">hello@quadque.tech</p>
            </div>
            <div className="flex w-full mb-2">
              <AiOutlineEnvironment className="w-[20px] h-[20px] mr-4" />
              <p className="w-4/5">
                Level 1, 7 Greenfield Parade Bankstown, NSW 2200, Australia.
              </p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col grid grid-cols-2 lg:gap-4 gap-8 justify-between items-center lg:border-[0px] border-[2px] rounded-[12px] border-[#4D8CFC]">
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer h-10 lg:h-2 flex justify-start items-center">
              Terms & Conditions
            </h1>
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer h-10 lg:h-2 flex justify-start items-center">
              GDPR Policy
            </h1>
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer h-10 lg:h-2 flex justify-start items-center">
              Privacy Policy
            </h1>
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer h-10 lg:h-2 flex justify-start items-center">
              Refund Policy
            </h1>
            <h1 className="col-span-2 lg:text-start text-center cursor-pointer lg:w-2/5 h-10 lg:h-2 flex justify-start items-center">
              About Us
            </h1>
          </div>
          <div className=" flex flex-col justify-between h-[20vh]">
            {/* <form className="flex flex-row justify-between items-center bg-white p-2 rounded-xl">
              <input
                type="email"
                className="lg:w-5/6 h-[5vh] pl-[14px] lg:rounded-r-[12px] rounded-[12px] focus:outline-none text-black"
                placeholder="Join our newsletter."
              />
              <Button title="➟" variant={1} type="submit" />
            </form> */}
            <div className="flex flex-col lg:items-end items-center text-center w-full my-2 ">
              <h1 className="text-xs font-light	">To know more about us</h1>
              <div className="flex lg:justify-between items-center justify-around lg:w-2/5 lg:h-[5vh] w-full">
                <AiOutlineFacebook size={"2em"} />
                <AiOutlineLinkedin size={"2em"} />
                <AiOutlineYoutube size={"2em"} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:h-full h-[12vh] lg:flex-row flex-col lg:justify-between lg:items-center lg:mt-0 mt-10 text-justify">
          <h1 className="font-[200]">
            ©Copyright 2023 Queleads. All rights reserved. Proudly made in
            Australia.
          </h1>
          <h1 className="font-[200]">
            A product of Quadque Technologies Pty Limited
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
