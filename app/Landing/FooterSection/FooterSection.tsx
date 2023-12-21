import Image from "next/image";
import React from "react";
import FooterBg from "/public/bgImage/Topbar.png";

import footerLogo from "../../../public/png/logo_white.png";
import {
  AiFillEnvironment,
  AiFillMail,
  AiFillPhone,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Button from "../Components/Button";
const FooterSection = () => {
  return (
    <div
      className="lg:min-h-[60vh] min-h-[100vh] lg:w-full flex items-center lg:justify-center justify-around"
      style={{
        background: `url(${FooterBg.src}) center / cover`,
      }}
    >
      <div className=" flex flex-col justify-center lg:w-[75vw] w-[90vw] lg:min-h-[60vh] min-h-[87vh] lg:mt-0 ">
        <Image src={footerLogo} alt="footer_logo" className="lg:mb-20 mb-10 lg:mt-0 mt-10" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:mb-16">
          <div className=" flex flex-col">
            <h1 className="font-[500]">Contact Us</h1>
            <div className="flex w-full my-2">
              <AiFillEnvironment className="w-[20px] h-[20px] mr-4" />
              <p className="w-4/5">
                Level 1, 7 Greenfield Parade Bankstown, NSW 2200, Australia.
              </p>
            </div>
            <div className="flex w-full mb-2">
              <AiFillMail className="w-[20px] h-[20px] mr-4" />
              <p className="w-4/5">hello@quadque.tech</p>
            </div>
            <div className="flex w-full">
              <AiFillPhone className="w-[20px] h-[20px] mr-4" />
              <p className="w-4/5">+61405899496</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col grid grid-cols-2 lg:gap-4 gap-8 justify-between items-center lg:border-[0px] border-[2px] rounded-[12px] border-[#4D8CFC]">
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer">Terms & Conditions</h1>
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer ">GDPR Policy</h1>
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer ">Privacy Policy</h1>
            <h1 className="lg:w-2/5 lg:text-start text-center cursor-pointer ">Refund Policy</h1>
            <h1 className="col-span-2 lg:text-start text-center cursor-pointer lg:w-2/5">About Us</h1>
          </div>
          <div className=" flex flex-col justify-between">
            <div className="flex flex-col lg:items-start items-center text-center w-full my-2">
              <h1 className="font-[500]">To know more about us</h1>
              <div className="flex lg:justify-between items-center justify-around lg:w-2/5 w-full">
                <AiFillFacebook className="w-[50px] h-[50px] " />
                <AiFillLinkedin className="w-[50px] h-[50px]" />
                <AiFillYoutube className="w-[50px] h-[50px]" />
              </div>
            </div>
            <form className="flex lg:flex-row flex-col justify-between">
              <input
                type="email"
                className="lg:w-3/4 h-[5vh] pl-[14px] w-[90vw] lg:rounded-r-[12px] rounded-[12px] mb-4"
                placeholder="Join our newsletter."
              />
              <Button title="Join Now" type="submit" />
            </form>
          </div>
        </div>
        <div className="lg:flex lg:h-full h-[15vh] lg:flex-row flex-col lg:justify-between lg:items-center lg:mt-0 mt-10 text-justify">
          <h1 className="font-[200]">
            ©Copyright 2023 Queleads. All rights reserved. Proudly made in
            Australia.
          </h1>
          <h1 className="font-[200]">A product of Quadque Technologies Pty Limited</h1>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
