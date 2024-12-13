"use client";
import React from "react";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import CustomSwiper from "../Ui/CustomSwiper/CustomSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CartIcon from "../Icons/CartIcon";
import DollarIcon from "../Icons/DollarIcon";
import { FaStar } from "react-icons/fa6";
import { products } from "@/app/Data/ProductData";
import Image from "next/image";

const EventsProducts = () => {
  const breakpoints = {
    0: { slidesPerView: 1.3 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3.5 },
    1200: { slidesPerView: 5.2 },
  };
  return (
    <>
      <div className="mt-[60px] border-y border-[#1F1F1F0A] pb-[60px]">
        <div className="container pt-16">
          <div className="flex items-center justify-between">
            <h1>Frequently Bought Together</h1>
            <div className="flex items-center gap-2">
              <button className="swiper-button-prev flex size-10 items-center justify-center rounded-full bg-softPink text-white">
                <LeftArrowIcon />
              </button>
              <button className="swiper-button-next flex size-10 items-center justify-center rounded-full bg-softPink text-white">
                <RightArrowIcon />
              </button>
            </div>
          </div>
          <div className="mt-[30px]">
            <CustomSwiper breakpoints={breakpoints}>
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="rounded-lg border-2 border-[#1F1F1F0A]">
                    <div>
                      <Image
                        width={240}
                        height={240}
                        unoptimized
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-[13px] font-normal leading-4 text-deepCharcoal">
                        {product.name}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <div>
                          <p>
                            <span className="text-[10px] font-normal">
                              {" "}
                              AED{" "}
                            </span>{" "}
                            <strong> {product.price} </strong>
                          </p>
                          <p className="text-[#1F1F1F80]">
                            <span className="text-[10px] font-normal">
                              {" "}
                              AED{" "}
                            </span>{" "}
                            <strong className="text-base line-through">
                              {product.originalPrice}
                            </strong>
                          </p>
                        </div>
                        <div className="shadow-btnShadow flex size-[30px] cursor-pointer items-center justify-center rounded bg-white shadow-2xl">
                          <CartIcon />
                        </div>
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <p className="text-xs font-semibold italic leading-3 text-skyBlue">
                          {product.freeDelivery
                            ? "Free Delivery"
                            : "Paid Delivery"}
                        </p>
                        {product.discount && (
                          <p className="text-xs font-bold text-forestGreen">
                            {product.discount}
                          </p>
                        )}
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex h-5 items-center gap-1 overflow-hidden whitespace-nowrap rounded-full bg-orangePeel px-2 text-sm font-semibold text-white">
                          <div className="flex-shrink-0">
                            <DollarIcon />
                          </div>
                          {product.promise}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-orangePeel" />
                          <p className="text-sm font-normal text-[#434343]">
                            {product.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </CustomSwiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsProducts;
