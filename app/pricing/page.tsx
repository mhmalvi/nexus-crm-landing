"use client";
import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { getAllProducts, getProductPrice } from "../Components/API/Api";

const Pricing = () => {
  const [productData, setProductData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await getAllProducts();
        const combinedDataArray = [];

        if (productsResponse) {
          for (const item of productsResponse) {
            const priceResponse = await getProductPrice(item.id);
            combinedDataArray.push({
              product: item,
              price: priceResponse,
            });
          }
        }
        setProductData(combinedDataArray);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[url('/bgImage/HeroBG.png')] bg-cover h-full w-full flex flex-col gap-16 items-start justify-center lg:px-60 px-4 py-16">
      <div className="w-full flex gap-4 lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl text-slate-300">Pricing</h1>
          <p className="text-base lg:text-start text-center text-slate-300">
            Get the best offers of Queleads CRM throughout the period of your
            subscription package.
          </p>
        </div>
        <Button title={"Create Account"} variant={1} />
      </div>
      <div className="text-center w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="m-0 p-0 text-blue-500 text-3xl font-light lg:w-1/3 w-full">
          Subscription
        </h1>
        <p className="m-0 p-0 text-slate-300 2xl:w-1/2 w-full ">
          Choose your desired plan to get access to our content easily. We like
          to offer special offers to our valuable users.
        </p>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-8 ease-in duration-100">
        <div
          className={`flex flex-col border xl:w-1/4 lg:w-1/3 w-full h-5/6 gap-8 rounded-md items-center justify-center px-4 py-16 bg-[#ffffff11] overflow-hidden shadow-md backdrop-blur-2xl ease-in duration-100`}
        >
          <h1 className={`p-0 m-0 text-xl text-slate-300`}>Trial Package</h1>
          <div className="w-full flex flex-col items-center gap-4 p-0 overflow-y-scroll">
            <div className="w-full flex flex-col items-center p-0 m-0">
              <h1
                className={`w-full m-0 p-0 text-xl text-center text-slate-300`}
              >
                <span className="text-3xl">Free /</span> for a month
              </h1>
            </div>
            <h1 className="text-slate-500">Best for - Limited Requirements</h1>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="m-0 p-0 text-slate-300">✔ Lead Generation</h1>
              <h1 className="m-0 p-0 text-slate-300">✔ Data Sync</h1>
              <h1 className="m-0 p-0 text-slate-300">✔ Invite Candidates</h1>
            </div>
          </div>
          <a
            className="w-full flex flex-col"
            href={`http://localhost:3001/register?selected-package=Trial&interval=month`}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <Button variant={1} title="Get Started" />
          </a>
        </div>
        {productData.map((item: any, index: number) => {
          console.log(item);
          return (
            <div
              key={index}
              className={`flex flex-col border xl:w-1/4 lg:w-1/3 w-full h-5/6 gap-8 rounded-md items-center justify-center px-4 py-16 bg-[#ffffff11] overflow-hidden shadow-md backdrop-blur-2xl ease-in duration-100`}
            >
              <div className="absolute h-8 w-32 bg-brand-color top-4 -right-8 rotate-45 flex items-center justify-center">
                <h1 className="m-0 p-0">Save 25%</h1>
              </div>
              <h1 className={`p-0 m-0 text-xl text-slate-300`}>
                {item.product.name} Package
              </h1>
              <div className="w-full flex flex-col items-center gap-4 p-0 overflow-y-scroll">
                {item.price.data.map((items: any, index: number) => {
                  return (
                    <div
                      className="w-full flex flex-col items-center p-0 m-0"
                      key={index}
                    >
                      <h1
                        className={`w-full m-0 p-0 text-xl text-center text-slate-300`}
                      >
                        <span className="text-3xl">
                          $ {items.unit_amount / 100} /
                        </span>{" "}
                        {items.recurring.interval}
                      </h1>
                    </div>
                  );
                })}
                <h1 className="text-slate-500">
                  Best for -{" "}
                  {item.product.name === "Premium"
                    ? "Single Project, Startups"
                    : "Limited Requirements"}
                </h1>
              </div>
              <div>
                {item.product.name === "Premium" && (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="m-0 p-0 text-slate-300">✔ Post Campaigns</h1>
                    <h1 className="m-0 p-0 text-slate-300">
                      ✔ Sales Automation
                    </h1>
                    <h1 className="m-0 p-0 text-slate-300">
                      ✔ High Quality SEO
                    </h1>
                  </div>
                )}
              </div>
              <a
                className="w-full flex flex-col"
                href={`http://localhost:3001/register?selected-package=${item.product.name}&interval=${item.price.data[0].recurring.interval}`}
                target={"_blank"}
              >
                <Button variant={1} title="Get Started" />
              </a>
            </div>
          );
        })}
      </div>
      <div className="w-full bg-orange flex flex-col items-center justify-center bg-[#ffffff11] overflow-hidden shadow-md backdrop-blur-2xl rounded-md p-8 gap-8">
        <h1 className="m-0 text-xl">All Accounts Include</h1>
        <div className="flex flex-wrap gap-y-4 items-center justify-between w-full">
          <p className="lg:w-1/4 w-full text-center">✔ Lead Generation</p>
          <p className="lg:w-1/4 w-full text-center">✔ Website Theme</p>
          <p className="lg:w-1/4 w-full text-center">✔ Client Support </p>
          <p className="lg:w-1/4 w-full text-center">✔ Sales Engagement</p>
          <p className="lg:w-1/4 w-full text-center">✔ Advanced search</p>
          <p className="lg:w-1/4 w-full text-center">✔ Payment Links</p>
          <p className="lg:w-1/4 w-full text-center">✔ Lead Analytics</p>
          <p className="lg:w-1/4 w-full text-center">✔ Help Desk</p>
          <p className="lg:w-1/4 w-full text-center">✔ Sales Automation</p>
          <p className="lg:w-1/4 w-full text-center">✔ Data Sync</p>
          <p className="lg:w-1/4 w-full text-center">✔ Customer Feedbacks</p>
          <p className="lg:w-1/4 w-full text-center">✔ Invite Candidates</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
