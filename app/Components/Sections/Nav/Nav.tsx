"use client";
import React, { useEffect, useState } from "react";
import "./nav.css";
import Button from "../../Button";
import { Drawer } from "antd";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";

import Link from "next/link";
const qqCrmLogo = require("/public/png/Queleads_Logo.png");

const Nav = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [Draweropen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(!Draweropen);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setShowButton(true);
    } else if (window.innerWidth > 1000) {
      setShowButton(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setShowButton(true);
      } else if (window.innerWidth >= 1000) {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define the scroll position where you want the menu to become fixed
      const scrollThreshold = 47; // Adjust this value based on your needs
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
        className={`ease-in duration-200 w-full flex items-center  justify-center lg:flex`}
      >
        <div
          className={`z-19 shadow-md bg-gradient-to-b from-[#f7edff] to-[#c2e8fd] crm-menu-desktop ease-in duration-200 w-[100vw] h-[8vh] ${
            showButton ? "flex justify-between" : "grid"
          } grid-cols-12 items-center lg:px-[12vw] px-[4vw] ${
            isMenuFixed ? `${Draweropen ? "" : "crm-fixed"} w-[100vw] ` : ""
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className={`col-span-2 lg:w-full w-1/2 flex items-center`}
          >
            <Image className="w-full" alt="Openthread" src={qqCrmLogo || ""} />
          </Link>

          {showButton ? (
            <div className="cursor-pointer" onClick={showDrawer}>
              <div className="h-[2px] w-[30px] bg-[#08A0F7]"></div>
              <div className="h-[2px] w-[30px] bg-[#08A0F7] my-[6px]"></div>
              <div className="h-[2px] w-[30px] bg-[#08A0F7]"></div>
            </div>
          ) : (
            <>
              {/* BLANK SPACE */}
              <div className="col-span-2"></div>
              {/* MENU */}
              <div className="col-span-4">
                <ul className={`grid grid-cols-4 h-full text-blue-600 gap-2`}>
                  <li className="flex items-center justify-end cursor-pointer ">
                    <p className="hover:scale-[0.95] ease-in duration-200 font-[400] m-0">
                      Pricing
                    </p>
                  </li>
                  <Link href={"/support"}>
                    <li className="flex items-center justify-end cursor-pointer ">
                      <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                        Support
                      </p>
                    </li>
                  </Link>
                  <li className="flex items-center justify-end cursor-pointer ">
                    <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                      Contact Us
                    </p>
                  </li>
                </ul>
              </div>
              {/* LOGIN */}
              <div className="col-span-4 flex items-center justify-end">
                <Button title={"⚪ Live Product Demo"} variant={1} />
                <a
                  href="https://app.queleadscrm.com/login"
                  rel={"noreferrer"}
                  className="ml-5"
                >
                  <Button title={"Login"} />
                </a>
              </div>
            </>
          )}
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
              body: {
                backgroundColor: "#1F0145",
              },
            }}
          >
            <div className="h-full w-full flex flex-col justify-between">
              <div className="flex justify-between items-center p-2">
                <div className="w-full">
                  <Image
                    className="w-full h-full"
                    src={qqCrmLogo}
                    alt="QueledsLogo"
                  />
                </div>
                <div className="text-white">
                  <ArrowRightOutlined size={5} onClick={onClose} />
                </div>
              </div>
              {/* <div> */}
              {/* <ul className="my-10">
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
            </ul> */}
              <ul className="text-black flex flex-col items-center justify-around min-h-[25vh] ">
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  Pricing
                </li>
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  Resources
                </li>
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  Contact Us
                </li>
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  About Us
                </li>
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  Book a Demo
                </li>
              </ul>
              {/* </div> */}
              <div className="flex flex-col gap-2 justify-center items-center mt-10">
                {/* <a className="w-full" href="/">
              <button className="w-full text-[16px] !bg-[#4D8CFC] px-[20px] py-[10px] rounded-[12px] font-[700]">
                Free forever
              </button>
            </a> */}
                <a
                  className="w-full flex flex-col"
                  href="https://app.queleadscrm.com/requisition"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button title={"Requisition"} width={"full"} />
                </a>
                <a
                  className="w-full flex flex-col"
                  href="https://app.queleadscrm.com/login"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button title={"Login"} width={"full"} />
                </a>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Nav;
