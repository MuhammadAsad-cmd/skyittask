import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const CustomSwiper = ({ children, className, breakpoints, ...props }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={14}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      freeMode
      speed={1000}
      breakpoints={breakpoints}
      className={`my-10 h-full w-full ${className}`}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
