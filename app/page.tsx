"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionOne from "./Landing/Section1/Section1";
import SectionTwo from "./Landing/Section2/Section2";
import SectionThree from "./Landing/Section3/Section3";
import SectionFour from "./Landing/Section4/Section4";
import SectionFive from "./Landing/Section5/Section5";
import SectionSix from "./Landing/Section6/Section6";
import FooterSection from "./Landing/FooterSection/FooterSection";
import Nav from "./Landing/Nav/Nav";
import ResNav from "./Landing/ResNav/ResNav";
import Topbar from "./Landing/Topbar/Topbar";
import SectionSeven from "./Landing/Section7/Section7";
import SectionEight from "./Landing/Section8/Section8";
import SectionNine from "./Landing/Section9/Section9";
import SectionTen from "./Landing/Section10/SectionTen";
import Image from "next/image";
import qqCrmLogo from "../public/png/Queleads_Logo.png";

const Home = () => {
  const [resNav, setResNav] = useState(false);
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1000) {
      setResNav(true);
      setShowPage(true);
    }
    else if (window.innerWidth > 1000) {
      setShowPage(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setResNav(true);
        // setShowPage(true);
      } else if (window.innerWidth >= 1000) {
        setResNav(false);
        setShowPage(true);
      }
    });
  }, []);

  return (
    <>
      {showPage ? (
        <div className="bgImage ease-in duration-200">
          {resNav ? (
            <ResNav />
          ) : (
            <>
              <Topbar />
              <Nav />
            </>
          )}

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
          <FooterSection />
        </div>
      ) : (
        <div className="ease-in duration-200 flex flex-col items-center justify-center">
        </div>
      )}
    </>
  );
};

export default Home;
