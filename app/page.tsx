"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import SectionTwo from "./Components/Sections/Section2/Section2";
import SectionOne from "./Components/Sections/Section1/Section1";
import SectionThree from "./Components/Sections/Section3/Section3";
import SectionFour from "./Components/Sections/Section4/Section4";
import SectionSix from "./Components/Sections/Section6/Section6";
import SectionFive from "./Components/Sections/Section5/Section5";
import SectionSeven from "./Components/Sections/Section7/Section7";
import SectionEight from "./Components/Sections/Section8/Section8";
import SectionTen from "./Components/Sections/Section10/SectionTen";
import SectionNine from "./Components/Sections/Section9/Section9";
// import Landing from

const Home = () => {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setShowPage(true);
    } else if (window.innerWidth > 1000) {
      setShowPage(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
      } else if (window.innerWidth >= 1000) {
        setShowPage(true);
      }
    });
  }, []);

  return (
    <>
      {showPage ? (
        <div className="bgImage ease-in duration-200">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
          <SectionEight />
          <SectionNine />
          <SectionTen />
        </div>
      ) : (
        <div className="h-screen w-screen ease-in duration-200 flex flex-col items-center justify-center">
          <Spin
            size="large"
            style={{
              color: "00dbde",
            }}
          />
        </div>
      )}
    </>
  );
};

export default Home;
