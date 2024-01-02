"use client";
import React, { useEffect, useState } from "react";
import "./nav.css";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Button from "../Components/Button";
const qqCrmLogo = require("../../../public/png/Queleads_Logo.png");

const ResNav = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [Draweropen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(!Draweropen);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define the scroll position where you want the menu to become fixed
      const scrollThreshold = 45; // Adjust this value based on your needs
      setIsMenuFixed(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`ease-in duration-200 w-full bg-white relative shadow-[0px_0px_25px_-10px_rgba(0,0,0,0.8)] ${
          isMenuFixed && !Draweropen ? "crm-fixed" : ""
        }`}
      >
        <nav className="ease-in duration-200 flex justify-between items-center px-[10px] py-[1px] ">
          <div className="w-[50%]">
            <a className="" href="/">
              <Image
                className="w-full h-full"
                src={qqCrmLogo}
                alt="QueledsLogo"
              />
            </a>
          </div>

          <div className="cursor-pointer" onClick={showDrawer}>
            <div className="h-[2px] w-[30px] bg-[#08A0F7]"></div>
            <div className="h-[2px] w-[30px] bg-[#08A0F7] my-[6px]"></div>
            <div className="h-[2px] w-[30px] bg-[#08A0F7]"></div>
          </div>
        </nav>
      </div>

      <Drawer
        className=" !z-[100001]"
        // headerStyle={{ display: "none" }}
        title={null}
        closeIcon={true}
        placement="left"
        onClose={onClose}
        open={Draweropen}
        width={"100%"}
        styles={{
          header: {
            display: "none",
          },
        }}
      >
        <div>
          <div className="flex justify-between items-center p-2">
            <div className="w-[50%]">
              <Image
                className="w-full h-full"
                src={qqCrmLogo}
                alt="QueledsLogo"
              />
            </div>
            <div className="text-black">
              <CloseOutlined onClick={onClose} />
            </div>
          </div>
          <div>
            <ul className="my-10">
              <li>
                <a className="w-full mt-10" href="/" target="_blank">
                  <button className="flex items-center justify-center text-[16px] font-[700] cursor-pointer w-full px-[20px] py-[10px] rounded-[12px] !bg-[#4D8CFC]">
                    <span
                      className="bg-white block rounded-[50%] mr-[8px] w-[15px] h-[15px]"
                      style={{
                        animation:
                          "2s ease 0s infinite normal none running pulse",
                      }}
                    ></span>
                    Live Product Demo
                  </button>
                </a>
              </li>
            </ul>
            <ul className="text-black flex flex-col items-center justify-around min-h-[25vh] ">
              <li className="text-[#4D8CFC] text-[24px] border-b-[2px] w-full text-center cursor-pointer">
                Pricing
              </li>

              <li className="text-[#4D8CFC] text-[24px] border-b-[2px] w-full text-center cursor-pointer">
                Contact Us
              </li>

              <li className="text-[#4D8CFC] text-[24px] border-b-[2px] w-full text-center cursor-pointer">
                Resources
              </li>

              <li className="text-[#4D8CFC] text-[24px] border-b-[2px] w-full text-center cursor-pointer">
                Book a Demo
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center mt-10">
            <a className="w-full" href="/">
              <button className="w-full text-[16px] !bg-[#4D8CFC] px-[20px] py-[10px] rounded-[12px] font-[700]">
                Free forever
              </button>
            </a>
            <a
              className="w-full"
              href="https://app.queleadscrm.com/register"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button title={"Register"} width={"full"} />
            </a>
            <a
              className="w-full"
              href="https://app.queleadscrm.com/login"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button title={"Login"} width={"full"} />
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ResNav;
