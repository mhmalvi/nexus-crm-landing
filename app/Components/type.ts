export interface tabProp {
  id: number;
  icon: any;
  name: string;
  isActive: boolean;
}
export interface tabData {
  tid: number;
  image: string;
  title1: string;
  title2: string;
  desc: string;
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
