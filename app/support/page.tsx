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
import "./support.css";

const Support = () => {
  return (
    <div
      className="h-screen flex flex-col items-start justify-center lg:px-60 px-4"
      // style={{
      //   background: `url(${HeroBG.src}) center / cover`,
      // }}
    >
      <div className="w-full my-4 flex lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-center lg:items-start items-center lg:mb-0 mb-4">
          <h1 className="text-4xl py-2">Support</h1>
          <p className="text-base lg:text-start text-center">
            Engage with Queleads&apos;s community of experts for answers.
          </p>
        </div>
        <Button title={"Create Account"} variant={1} />
      </div>
      <h1 className="lg:text-2xl mt-8 text-center w-full">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="w-full my-4 rounded-md overflow-hidden shadow-md backdrop-blur-2xl bg-[#ffffff11] flex flex-col justify-center- items-center">
        <div className="ease-in duration-100 w-full lg:p-8 p-4">
          <Accordion
            className="border-none accordion-section lg:h-[40vh] h-[35vh] overflow-y-scroll "
            collapseAll
          >
            <AccordionPanel className="ease-in duration-100 ">
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0 text-start">
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
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0 text-start">
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
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0 text-start">
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
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0 text-start">
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
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0 text-start">
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
              <AccordionTitle className="px-3 py-4 !mb-4 ease-in duration-100 hover:bg-transparent hover:text-white rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] focus:ring-0 text-start">
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
      <div className="w-full px-3 py-8 rounded-md shadow-md backdrop-blur-2xl bg-[#ffffff11] flex flex-col justify-center items-center lg:mb-0 mb-8">
        <h1 className="text-xl">Support Tickets</h1>
        <p className="text-sm pb-4 lg:text-start text-center">
          Log in to create new tickets and view current support cases.
        </p>
        <a
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
