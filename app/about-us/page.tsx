"use client";
import React from "react";
import Button from "../Components/Button";
import Images from "../Components/Images";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[url('/bgImage/HeroBG.png')] bg-cover h-full flex flex-col gap-8 items-start justify-center lg:px-60 px-4 py-16">
      <div className="w-full flex gap-4 lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl text-slate-300">About Us</h1>
          <p className="text-base lg:text-start text-center text-slate-300">
            Engage with Queleads&apos; community to grow your business according
            to the statistics.
          </p>
        </div>
        <Button title={"Create Account"} variant={1} />
      </div>
      <div className="bg-[url('/aboutSectionImages/Top.svg')] bg-cover w-full h-full rounded-md overflow-hidden shadow-md backdrop-blur-2xl flex gap-4 flex-col justify-center items-center lg:px-48 px-4 lg:py-8 py-4">
        <h1 className="lg:text-3xl text-xl text-slate-300">
          Welcome to the future of CRM
        </h1>
        <Image alt="Openthread" src={Images.LogoText} />
        <h1 className="text-justify text-slate-300">
          This is where we redefine the way you manage relationships and empower
          your business with cutting-edge CRM solutions. At Queleads CRM, we
          understand the pivotal role relationships play in the success of any
          enterprise. Our mission is to provide you with a comprehensive
          Customer Relationship Management (CRM) software that not only
          streamlines your processes but also cultivates lasting connections
          with your clients.
        </h1>
      </div>
      <div className="bg-[#ffffff11] w-full rounded-md overflow-hidden shadow-md backdrop-blur-2xl flex flex-wrap gap-16 flex-col justify-center items-center lg:px-20 px-4 lg:py-8 py-4">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="lg:w-5/12 w-full flex flex-col gap-4">
            <h1 className="text-2xl font-semibold underline underline-offset-4 underline-brand-color lg:text-start text-center text-slate-300">
              Our Mission
            </h1>
            <div className="lg:text-start text-justify text-slate-300">
              There&apos;s this notion that to grow a business, you have to be
              ruthless. But we know there&apos;s a better way to grow. One where
              what&apos;s good for the bottom line is also good for customers.
              We believe businesses can grow with a conscience, and succeed with
              a soul — and that they can do it with inbound. That&apos;s why
              we&apos;ve created an ecosystem uniting software, education, and
              community to help businesses grow better every day.
            </div>
          </div>
          <Image
            src={Images.crm_show}
            alt="mission"
            className="lg:w-4/12 w-full"
          />
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-4">
          <Image
            src={Images.aboutVision}
            alt="vision"
            className="lg:w-4/12 w-full"
          />
          <div className="lg:w-5/12 w-full flex flex-col gap-4">
            <h1 className="text-2xl font-semibold underline underline-offset-4 underline-brand-color lg:text-end text-center text-slate-300">
              Our Vision
            </h1>
            <div className="lg:text-end text-justify text-slate-300">
              At Queleads CRM, we envision a world where businesses thrive
              through meaningful connections. Our CRM software is a
              manifestation of this vision, empowering you to build, nurture,
              and leverage relationships for sustainable growth. We believe in
              simplifying complex processes, fostering collaboration, and
              providing actionable insights to drive your success
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="lg:w-5/12 w-full flex flex-col gap-4">
            <h1 className="text-2xl font-semibold underline underline-offset-4 underline-brand-color lg:text-start text-center text-slate-300">
              Our Story
            </h1>
            <div className="lg:text-start text-justify text-slate-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <Image
            src={Images.aboutStory}
            alt="mission"
            className="lg:w-4/12 w-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 pt-4 justify-center items-center">
        <h1 className="text-4xl text-blue-500">Who We Are</h1>
        <div className="flex lg:flex-col flex-col-reverse gap-4 items-center w-full">
          <p className="lg:w-8/12 w-full text-base lg:text-center text-justify text-slate-300">
            Queleads CRM is a dynamic and innovative team dedicated to
            revolutionizing the way businesses interact with their customers.
            With a collective passion for technology and a commitment to
            excellence, we have crafted a powerful CRM software designed to meet
            the unique needs of your organization.
          </p>
          <Image
            alt="Openthread"
            src={Images.aboutWho}
            className="bg-cover w-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 pt-4 justify-center items-center">
        <h1 className="text-4xl text-center text-blue-500">
          Why Choose Queleads CRM
        </h1>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center gap-4">
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <div className="flex lg:gap-16 gap-8">
              <Image src={Images.aboutWhyOne} alt="tailored-solutions" />
              <div className="flex flex-col">
                <h2 className="m-0 p-0 text-2xl text-slate-300">
                  Tailored Solutions
                </h2>
                <h3 className="m-0 p-0 text-base text-slate-300">
                  Our CRM software is customizable to fit the specific
                  requirements of your business. Whether you are a small startup
                  or a large enterprise, we have the tools to adapt to your
                  unique needs.
                </h3>
              </div>
            </div>
            <div className="flex lg:gap-16 gap-8">
              <Image src={Images.aboutWhyTwo} alt="user-friendly-interface" />
              <div className="flex flex-col">
                <h2 className="m-0 p-0 text-2xl text-slate-300">
                  User-Friendly Interface
                </h2>
                <h3 className="m-0 p-0 text-base text-slate-300">
                  We understand the importance of user experience. Our intuitive
                  interface ensures that your team can seamlessly integrate our
                  CRM into their daily operations, increasing efficiency and
                  productivity..
                </h3>
              </div>
            </div>
            <div className="flex lg:gap-16 gap-8">
              <Image src={Images.aboutWhyThree} alt="Advanced-Features" />
              <div className="flex flex-col">
                <h2 className="m-0 p-0 text-2xl text-slate-300">
                  Advanced Features
                </h2>
                <h3 className="m-0 p-0 text-base text-slate-300">
                  Stay ahead of the curve with our state-of-the-art features.
                  From lead management and sales automation to customer service
                  and analytics, Queleads CRM is equipped with the tools you
                  need for success.
                </h3>
              </div>
            </div>
            <div className="flex lg:gap-16 gap-8">
              <Image src={Images.aboutWhyFour} alt="Scalability" />
              <div className="flex flex-col">
                <h2 className="m-0 p-0 text-2xl text-slate-300">Scalability</h2>
                <h3 className="m-0 p-0 text-base text-slate-300">
                  As your business grows, so do your needs. Our CRM software
                  scales with you, providing a reliable foundation for your
                  evolving requirements.
                </h3>
              </div>
            </div>
            <div className="flex lg:gap-16 gap-8">
              {/* Icon */}
              <Image src={Images.aboutWhyFive} alt="Customer-Support" />
              {/* Text */}
              <div className="flex flex-col">
                <h2 className="m-0 p-0 text-2xl text-slate-300">
                  Customer Support
                </h2>
                <h3 className="m-0 p-0 text-base text-slate-300">
                  Your success is our priority. Our dedicated support team is
                  ready to assist you every step of the way, ensuring you get
                  the most out of our CRM software.
                </h3>
              </div>
            </div>
          </div>
          <Image
            src={Images.aboutWhyMain}
            alt="mission"
            className="lg:w-4/12 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
