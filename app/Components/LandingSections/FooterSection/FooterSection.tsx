import Image from "next/image";
import React from "react";

import footerLogo from "/public/png/logo_white.png";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import Button from "../../Button";
import Background from "/public/bgImage/HeroBG.png";
const FooterSection = () => {
  return (
    <div
      className="text-white lg:min-h-[60vh] min-h-[100vh] lg:w-full flex items-center lg:justify-center justify-around"
      style={{
        background: `url(${Background.src}) center / cover`
      }}
    >
      <div className=" flex flex-col justify-center lg:items-start items-center w-full lg:px-[12vw] px-[4vw] lg:min-h-[60vh] min-h-[87vh] lg:mt-0 mt-8">
        <Image src={footerLogo} alt="footer_logo" className="mb-16" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:mb-8">
          <div className=" flex flex-col lg:items-start items-center">
            <h1 className="font-[500] lg:text-base text-2xl lg:mb-0 mb-8">
              Contact Us
            </h1>
            <div className="flex lg:justify-start justify-center lg:w-full my-2">
              <AiOutlinePhone className="scale-x-[-1] w-[20px] h-[20px] lg:mr-4 mr-2" />
              <p className="lg:w-4/5 text-base">+611300813316</p>
            </div>
            <div className="flex lg:justify-start justify-center lg:w-full my-2">
              <AiOutlineMail className="w-[20px] h-[20px] lg:mr-4 mr-2" />
              <p className="lg:w-4/5 text-base">hello@quadque.tech</p>
            </div>
            <div className="flex lg:justify-start justify-center lg:w-full my-2">
              <AiOutlineEnvironment className="w-[20px] h-[20px] lg:mr-4 mr-2" />
              <p className="lg:w-4/5 lg:text-start text-center w-4/5 text-sm">
                Level 1, 7 Greenfield Parade Bankstown, NSW 2200, Australia.
              </p>
            </div>
          </div>
          <div className="lg:flex flex-col justify-between items-center ">
            <h1 className="lg:w-3/5 lg:text-start text-center cursor-pointer h-8 flex justify-center items-center">
              Terms & Conditions
            </h1>
            <h1 className="lg:w-3/5 lg:text-start text-center cursor-pointer h-8 flex justify-center items-center">
              GDPR Policy
            </h1>
            <h1 className="lg:w-3/5 lg:text-start text-center cursor-pointer h-8 flex justify-center items-center">
              Privacy Policy
            </h1>
            <h1 className="lg:w-3/5 lg:text-start text-center cursor-pointer h-8 flex justify-center items-center">
              Refund Policy
            </h1>
            <h1 className="lg:w-3/5 lg:text-start text-center cursor-pointer h-8 flex justify-center items-center">
              About Us
            </h1>
          </div>
          <div className=" flex flex-col justify-between lg:h-[20vh] lg:w-full w-[90vw] overflow-hidden">
            <h1 className="text-xl text-[#4D8CFC] mb-2">Newsletter</h1>
            <form className="flex justify-between items-center bg-[transparent] p-1 border-[1px] rounded-md lg:mb-0 mb-8">
              <input
                type="email"
                className="h-[5vh] pl-4 rounded-[12px] focus:ring-0 w-full border-0 bg-[transparent] text-white "
                placeholder="Join our newsletter."
              />
              <div className=" h-full">
                <Button title="➟" variant={1} type="submit" />
              </div>
            </form>
            <div className="flex flex-col lg:items-end items-center text-center w-full lg:my-2 lg:mb-0 mb-8">
              <h1 className="text-xs font-light	">To know more about us</h1>
              <div className="flex lg:justify-between items-center justify-around lg:w-2/5 lg:h-[5vh] w-1/2">
                <AiOutlineFacebook size={"2em"} />
                <AiOutlineLinkedin size={"2em"} />
                <AiOutlineYoutube size={"2em"} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:h-full lg:flex-row flex-col lg:justify-between lg:items-center text-center lg:w-full">
          <h1 className="font-[200] lg:w-full lg:text-base lg:text-start text-center text-xs lg:mb-0 mb-4 ">
            ©Copyright 2023 Queleads. All rights reserved. Proudly made in
            Australia.
          </h1>
          <h1 className="font-[200] lg:w-full lg:text-base lg:text-end text-center text-xs lg:mb-0 mb-8">
            A product of Quadque Technologies Pty Limited
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
