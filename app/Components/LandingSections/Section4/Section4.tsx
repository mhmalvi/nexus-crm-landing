"use client";
import React, { useEffect, useState } from "react";
import { companyPhotos } from "./Section4Data";
import Slider from "react-slick";
import Image from "next/image";
import { SliderSettingsProps } from "../../type";
const SectionFour = () => {
  const [slidesToShow, setSlidesToShow] = useState(7);
  const [dimension, setDimension] = useState({
    height: 120,
    width: 120,
  });

  const settings: SliderSettingsProps = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setSlidesToShow(3);
        setDimension({
          height: 60,
          width: 60,
        });
      } else {
        setSlidesToShow(7);
      }
    };

    updateSlidesToShow(); // initial call
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  settings.slidesToShow = slidesToShow;
  return (
    <div className="lg:min-h-[30vh] min-h-[10vh] w-full flex flex-col lg:items-center items-start lg:justify-center justify-start">
      <h1 className="lg:px-0 px-[2.5vh] lg:text-[36px] text-xl w-full lg:px-[12vw] px-[4vw] text-blue-800 font-semibold py-4">
        Our Clients
      </h1>
      <div className="flex flex-col flex-col w-full lg:min-h-[10vh] min-h-[10vh] bg-white opacity-80">
        <div>
          <Slider {...settings}>
            {companyPhotos &&
              companyPhotos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center h-full w-full"
                  >
                    <div className="flex items-center justify-center h-full]">
                      <Image
                        className="m-5"
                        width={dimension.width}
                        height={dimension.height}
                        src={item.image}
                        alt={`${index}`}
                      />
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
