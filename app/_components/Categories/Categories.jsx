"use client";
import Image from "next/image";
import React from "react";
import CustomSwiper from "../Ui/CustomSwiper/CustomSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Categories = () => {
  const categories = [
    { title: "Gear", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Nursery", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Feeding", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Diapering", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Toys", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Skincare", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Outdoor", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "School", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Mommy", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Party", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "Fashion", imgSrc: "/images/Stroller Clean.H03 1.png" },
    { title: "SALE", imgSrc: "/images/Stroller Clean.H03 1.png" },
  ];

  const breakpoints = {
    0: { slidesPerView: 3 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 7 },
    1200: { slidesPerView: 10 },
  };

  return (
    <>
      <div className="container">
        <CustomSwiper breakpoints={breakpoints}>
          {categories.map((category, index) => (
            <SwiperSlide
              key={index}
              className="flex cursor-pointer flex-col items-center justify-center text-center"
            >
              {/* Outer Container */}
              <div className="mx-auto flex h-[99px] w-[99px] flex-col items-center justify-center rounded-full border bg-lavenderBlush p-3">
                {/* Image Container */}
                <Image
                  src={category.imgSrc}
                  alt={category.title}
                  unoptimized
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </div>
              {/* Text */}
              <p className="mt-3 text-base font-medium text-deepCharcoal">
                {category.title}
              </p>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </>
  );
};

export default Categories;
