"use client";
import React from "react";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import Image from "next/image";
import CustomSwiper from "../Ui/CustomSwiper/CustomSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      reviews: "837 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Millon Zahino",
      profession: "Behavioral Science",
      avatar: "/images/Millon Zahino.png",
    },
    {
      id: 2,
      reviews: "524 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Anna Smith",
      profession: "Marketing Specialist",
    },
    {
      id: 3,
      reviews: "524 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Anna Smith",
      profession: "Marketing Specialist",
    },
    {
      id: 4,
      reviews: "524 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Anna Smith",
      profession: "Marketing Specialist",
    },
    {
      id: 5,
      reviews: "524 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Anna Smith",
      profession: "Marketing Specialist",
    },
    {
      id: 6,
      reviews: "524 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Anna Smith",
      profession: "Marketing Specialist",
    },
    {
      id: 7,
      reviews: "524 Reviews",
      content:
        "The customer service team reached out and assisted me with my problems just as I was about to deactivate my account. I'm glad I gave them a chance because my experience on the platform has significantly improved since I did.",
      customerImage: "/images/Layer 9.png",
      name: "Anna Smith",
      profession: "Marketing Specialist",
    },
  ];

  const breakpoints = {
    0: { slidesPerView: 1.2 },
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 3 },
    1200: { slidesPerView: 3.5 },
  };
  return (
    <>
      <div className="container pt-10">
        <div className="flex items-center justify-between">
          <h1>Reviews</h1>
          <div className="flex items-center gap-2">
            <button className="swiper-button-prev flex size-10 items-center justify-center rounded-full bg-softPink text-white">
              <LeftArrowIcon />
            </button>
            <button className="swiper-button-next flex size-10 items-center justify-center rounded-full bg-softPink text-white">
              <RightArrowIcon />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <CustomSwiper breakpoints={breakpoints}>
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className={`relative h-[436px] rounded-[30px] bg-[#F470AB1A] p-5`}
              >
                <div className="absolute right-5 top-6">
                  <Image
                    width={172}
                    height={110}
                    unoptimized
                    src="/images/Millon Zahino.png"
                    alt="kill"
                  />
                </div>
                <div className="inline-flex h-[42px] cursor-pointer items-center justify-center rounded-full bg-[#F470AB33] px-5 text-[13px] font-normal leading-4 text-black">
                  {testimonial.reviews}
                </div>
                <p className="mt-8 text-xl font-normal leading-6">
                  {testimonial.content}
                </p>
                <div className="mt-2.5 inline-flex h-[42px] cursor-pointer items-center justify-center rounded-full bg-[#F470AB33] px-5 text-[13px] font-semibold leading-4 tracking-wider text-black">
                  Read More
                </div>
                <p className="my-[22px] border-t-2 border-[#F470AB33]"></p>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      width={60}
                      height={60}
                      unoptimized
                      src={testimonial.customerImage}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-base font-normal">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </>
  );
};

export default Reviews;
