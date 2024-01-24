"use client";
import React from "react";
import HeroBG from "/public/bgImage/HeroBG.png";
import Button from "../Components/Button";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import Link from "next/link";
import "./support.css";

const Support = () => {
  return (
    <div
      className="h-screen flex flex-col items-start justify-center lg:px-[12vw] px-[4vw]"
      style={{
        background: `url(${HeroBG.src}) center / cover`,
      }}
    >
      <div className="w-full my-4 flex justify-between items-center">
        <div>
          <h1 className="text-4xl py-2">Support</h1>
          <p className="text-base">
            Engage with Queleads&apos;s community of experts for answers.
          </p>
        </div>
        <Button title={"Create Account"} variant={1} />
      </div>
      <h1 className="text-2xl mt-8 text-center w-full">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="w-full my-4 rounded-xl overflow-hidden shadow-md backdrop-blur-2xl bg-[#ffffff11] flex flex-col justify-center- items-center">
        <div className="ease-in duration-100 w-full p-8">
          <Accordion
            className="border-none accordion-section h-[40vh] overflow-y-scroll"
            collapseAll
          >
            <AccordionPanel className="ease-in duration-100 ">
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0">
                1. What is CRM?
              </AccordionTitle>
              <AccordionContent className="px-3 pb-4 ease-in duration-100 ">
                <p className="ease-in duration-100  mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="ease-in duration-100  text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0">
                2. Why is CRM important?
              </AccordionTitle>
              <AccordionContent className="px-3 pb-4 ">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0">
                3. What is the advantage of Queleads CRM?
              </AccordionTitle>
              <AccordionContent className="px-3 pb-4">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0">
                4. What does a CRM software do?
              </AccordionTitle>
              <AccordionContent className="px-3 pb-4">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0">
                5. Who is a CRM system for?
              </AccordionTitle>
              <AccordionContent className="px-3 pb-4 ">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0">
                6. What is a cloud based CRM system?
              </AccordionTitle>
              <AccordionContent className="px-3 pb-4 ">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
      <div className="w-full px-3 py-8 rounded-xl shadow-md backdrop-blur-2xl bg-[#ffffff11] flex flex-col justify-center items-center">
        <h1 className="text-xl">Support Tickets</h1>
        <p className="text-sm pb-4">
          Log in to create new tickets and view current support cases.
        </p>
        <a
          className="w-full flex flex-col"
          href="https://app.queleadscrm.com/login"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Button title={"Login"} />
        </a>
      </div>
    </div>
  );
};

export default Support;
