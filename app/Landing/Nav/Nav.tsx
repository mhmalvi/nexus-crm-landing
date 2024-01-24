"use client";
import React, { useEffect, useState } from "react";
import "./nav.css";
import Button from "../Components/Button";
import Image from "next/image";
const qqCrmLogo = require("../../../public/png/Queleads_Logo.png");

const Nav = () => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);

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
  // background: linear-gradient(
  //   0deg,
  //   #c2e8fd 0%,
  //   #f7edff 25%,
  //   #c2e8fd 50%,
  //   #f7edff 75%,
  //   #c2e8fd 100%
  // );
  return (
    <>
      <div
        className={`ease-in duration-200 w-full flex items-center justify-center lg:flex hidden`}
      >
        <div
          className={`z-19 shadow-md bg-gradient-to-b from-[#f7edff] to-[#c2e8fd] ease-in duration-200 crm-menu-desktop w-[100vw] h-[8vh] grid grid-cols-12 items-center px-[12vw] ${
            isMenuFixed ? "crm-fixed w-[100vw] " : ""
          }`}
        >
          {/* LOGO */}
          <div className="col-span-2  w-full flex items-center">
            <a href="/">
              <Image
                className="w-full"
                alt="Openthread"
                src={qqCrmLogo || ""}
              />
            </a>
          </div>
          <div className="col-span-2"></div>
          {/* MENU */}
          <div className="col-span-4">
            <ul
              className={`grid grid-cols-4 h-full text-blue-600 gap-2`}
            >
              <li className="flex items-center justify-end cursor-pointer ">
                <p className="hover:scale-[0.95] ease-in duration-200 font-[400] m-0">
                  Pricing
                </p>
              </li>
              <li className="flex items-center justify-end cursor-pointer ">
                <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                  Support
                </p>
              </li>
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
        </div>
      </div>
    </>
  );
};

export default Nav;
