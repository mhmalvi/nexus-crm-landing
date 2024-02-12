export interface tabProp {
  id: number;
  icon: any;
  name: string;
  isActive: boolean;
}
export interface tabData {
  tid: number | undefined;
  image: string | undefined;
  title1: string | undefined;
  title2: string | undefined;
  desc: string | undefined;
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
