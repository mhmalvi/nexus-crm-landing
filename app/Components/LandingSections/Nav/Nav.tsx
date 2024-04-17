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
    if (window.innerWidth < 1366) {
      setShowButton(true);
    } else if (window.innerWidth > 1366) {
      setShowButton(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1366) {
        setShowButton(true);
      } else if (window.innerWidth >= 1366) {
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
          className={`z-19 shadow-md bg-gray-900
          crm-menu-desktop ease-in duration-200 w-screen h-[8vh] ${
            showButton ? "flex " : "flex flex-wrap 2xl:gap-8 gap-4"
          } items-center justify-between lg:px-[12vw] px-[4vw] ${
            isMenuFixed ? Draweropen ? "w-[100vw]" : "crm-fixed w-[100vw]"   : ""
          }`}
        >
          {/* LOGO */}
          <Link href="/" className={`w-52 flex items-center`}>
            <Image className="" alt="Openthread" src={qqCrmLogo || ""} />
          </Link>
          {showButton ? (
            <div className="cursor-pointer" onClick={showDrawer}>
              <div className="h-[2px] w-[30px] bg-[#08A0F7]"></div>
              <div className="h-[2px] w-[30px] bg-[#08A0F7] my-[6px]"></div>
              <div className="h-[2px] w-[30px] bg-[#08A0F7]"></div>
            </div>
          ) : (
            <>
              {/* MENU */}
              <ul
                className={`flex flex-wrap 2xl:gap-16 gap-4 h-full text-slate-300 gap-2`}
              >
                <li className="flex items-center justify-end cursor-pointer ">
                  <Link href={"/about-us"}>
                    <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                      About Us
                    </p>
                  </Link>
                </li>
                <li className="flex items-center justify-end cursor-pointer ">
                  <Link href={"/pricing"}>
                    <p className="hover:scale-[0.95] ease-in duration-200 font-[400] m-0">
                      Pricing
                    </p>
                  </Link>
                </li>
                <li className="flex items-center justify-end cursor-pointer ">
                  <Link href={"/support"}>
                    <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                      Support
                    </p>
                  </Link>
                </li>
                <li className="flex items-center justify-end cursor-pointer ">
                  <Link href={"/contact-us"}>
                    <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                      Contact Us
                    </p>
                  </Link>
                </li>
                <li className="flex items-center justify-end cursor-pointer ">
                  <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                    Privacy Policy
                  </p>
                </li>
              </ul>

              {/* LOGIN */}
              <div className="flex items-center justify-end">
                <a
                  href={`http://localhost:3001/register?selected-package=Trial&interval=month`}
                  rel={"noreferrer"}
                  className="ml-5"
                >
                  <Button title="Try for free" variant={1} />
                </a>
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
                <Link href="/" className="w-full" onClick={onClose}>
                  <Image
                    className="w-full h-full"
                    src={qqCrmLogo}
                    alt="QueledsLogo"
                  />
                </Link>
                <div className="text-white">
                  <ArrowRightOutlined size={5} onClick={onClose} />
                </div>
              </div>

              <ul className="text-black flex flex-col items-center justify-around min-h-[25vh] ">
                <Link
                  href={"/about-us"}
                  onClick={onClose}
                  className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer"
                >
                  About Us
                </Link>
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  Pricing
                </li>
                <Link
                  href={"/support"}
                  onClick={onClose}
                  className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer"
                >
                  Support
                </Link>
                <Link href={"/contact-us"}>
                  <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                    Contact Us
                  </li>
                </Link>
                <li className="text-white text-[24px] border-b-[1px] w-full text-center cursor-pointer">
                  Privacy Policy
                </li>
              </ul>

              <div className="flex flex-col gap-2 justify-center items-center mt-10">
                <a
                  className="w-full flex flex-col"
                  href={`http://localhost:3001/register?selected-package=Trial&interval=month`}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <Button title={"Try for free"} width={"full"} />
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
