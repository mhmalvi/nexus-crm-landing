"use client";
import React, { useEffect, useState } from "react";
import "./nav.css";
import Button from "../Components/Button";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <>
      <div
        className={`ease-in duration-200 w-full flex items-center justify-center `}
      >
        <div
          className={`ease-in duration-200 crm-menu-desktop w-[100vw] h-[8vh] grid grid-cols-8 gap-4 px-[2.5vw] ${
            isMenuFixed ? "crm-fixed w-[100vw] " : ""
          }`}
        >
          <div className="col-span-1  w-full flex items-center">
            <a href="/">
              <Image
                className="w-full"
                alt="Openthread"
                src={qqCrmLogo || ""}
              />
            </a>
          </div>

          <div className="col-span-2  w-full flex items-center justify-evenly">
            <Button title={"⚪ Live Product Demo"} variant={1} />
            <Button title={"Free Forever"} variant={1} />
          </div>
          <div className="col-span-3">
            <ul
              className={`grid grid-cols-4 h-full ${
                isMenuFixed ? "text-black" : "text-white"
              } gap-2`}
            >
              <li className="flex items-center justify-end cursor-pointer ">
                <p className="hover:scale-[0.95] ease-in duration-200 font-[400] m-0">
                  Pricing
                </p>
              </li>
              <li className="flex items-center justify-end cursor-pointer ">
                <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                  Contact Us
                </p>
              </li>
              <li className="flex items-center justify-end cursor-pointer ">
                <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                  Resources
                </p>
              </li>
              <li className="flex items-center justify-end cursor-pointer ">
                <p className="hover:scale-[0.95] ease-in-out duration-200 font-[400] m-0">
                  Book a Demo
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1 flex items-center justify-between">
            <a
              href="https://app.queleadscrm.com/register"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <Button title={"Register"} />
            </a>
            <a
              href="https://app.queleadscrm.com/login"
              target={"_blank"}
              rel={"noreferrer"}
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
