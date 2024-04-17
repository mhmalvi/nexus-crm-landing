import React from "react";
import Button from "../Components/Button";
import Images from "../Components/Images";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-[url('/bgImage/HeroBG.png')] bg-cover h-full flex flex-col gap-8 items-start justify-center lg:px-60 px-4 py-16">
      <div className="w-full flex gap-4 lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl text-slate-300">Contact Us</h1>
          <p className="text-base lg:text-start text-center text-slate-300">
            Contact with us to know more about Queleads CRM.Send an email to
            reach us.
          </p>
        </div>
        <a
          href="https://app.queleadscrm.com/register?selected-package=Trial&interval=month"
          rel={"noreferrer"}
          className="ml-5"
        >
          <Button title={"Create Account"} variant={1} />
        </a>
      </div>
      <div className="bg-[#ffffff11] w-full rounded-md overflow-hidden shadow-md backdrop-blur-2xl flex flex-wrap gap-16 justify-between items-center lg:px-8 px-4 lg:py-8 py-4">
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <Image src={Images.contactUs} alt="Contact Us" />
        </div>
        <div className="rounded-md h-full lg:w-5/12 w-full bg-[#ffffff11] backdrop-blur-2xl shadow-md flex flex-col gap-4 lg:px-8 px-4 lg:py-8 py-4">
          <h1 className="m-0 p-0 text-xl">Get in Touch</h1>
          <h1 className="m-0 p-0 text-base">
            Explore our help docs or contact our team.
          </h1>
          <form className="flex flex-col gap-4 m-0 p-0 text-base">
            <div>
              <label className=" mb-2 text-sm font-medium text-slate-300">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-color focus:border-brand-color p-2.5 w-full placeholder:text-slate-300"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                How can we help you?
              </label>
              <input
                type="textarea"
                id="description"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-color focus:border-brand-color p-2.5 w-full placeholder:text-slate-300"
                placeholder="john@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Subject
              </label>
              <textarea
                id="subject"
                className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-color focus:border-brand-color p-2.5 w-full placeholder:text-slate-300"
                placeholder="john@email.com"
                required
                rows={5}
              />
            </div>
            <Button variant={1} title={"Send"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;