import { StaticImageData } from "next/image";

export interface tabProp {
  id: number;
  icon: StaticImageData;
  name: string;
  isActive: boolean;
  image: StaticImageData;
  title1: string ;
  title2: string ;
  desc: string ;
}

export interface SliderSettingsProps {
    className: string;
    centerMode: boolean;
    infinite: boolean;
    autoplay: boolean;
    speed: number;
    arrows: boolean;
    autoplaySpeed: number;
    slidesToShow?: number;
  }
