"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import CustomSwiper from "../Ui/CustomSwiper/CustomSwiper";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import Image from "next/image";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/image 1.png",
      category: "High Chair",
      date: "Jun 21, 2021 • 5 min read",
      title: "What to look in a baby high chair?",
      description:
        "As a parent, finding the right babysitting chair to ensure your child will be safe and comfortable while caring for another individual can be daunting. To assist you in this important task, this article will provide helpful information outlining the features to look for and consider when choosing a family-friendly babysitting chair. By taking the time to review the variety of options on the market carefully, you can make an informed decision that is best suited for your child and your family.",
    },
    {
      id: 2,
      image: "/images/image 1.png",
      category: "Baby Safety",
      date: "Aug 12, 2021 • 3 min read",
      title: "Essential tips for baby safety at home",
      description:
        "Ensuring your baby's safety at home involves identifying potential hazards and creating a safe environment. This guide outlines critical safety tips and measures you can take to protect your baby from common household dangers.",
    },
    {
      id: 3,
      image: "/images/image 1.png",
      category: "Parenting Tips",
      date: "May 10, 2021 • 7 min read",
      title: "How to manage work-life balance as a parent?",
      description:
        "Balancing work and family life can be challenging for parents. This article explores strategies and practical advice for maintaining a healthy balance between professional and family responsibilities.",
    },
    {
      id: 4,
      image: "/images/image 1.png",
      category: "Parenting Tips",
      date: "May 10, 2021 • 7 min read",
      title: "How to manage work-life balance as a parent?",
      description:
        "Balancing work and family life can be challenging for parents. This article explores strategies and practical advice for maintaining a healthy balance between professional and family responsibilities.",
    },
    {
      id: 5,
      image: "/images/image 1.png",
      category: "Parenting Tips",
      date: "May 10, 2021 • 7 min read",
      title: "How to manage work-life balance as a parent?",
      description:
        "Balancing work and family life can be challenging for parents. This article explores strategies and practical advice for maintaining a healthy balance between professional and family responsibilities.",
    },
    {
      id: 6,
      image: "/images/image 1.png",
      category: "Parenting Tips",
      date: "May 10, 2021 • 7 min read",
      title: "How to manage work-life balance as a parent?",
      description:
        "Balancing work and family life can be challenging for parents. This article explores strategies and practical advice for maintaining a healthy balance between professional and family responsibilities.",
    },
    {
      id: 7,
      image: "/images/image 1.png",
      category: "Parenting Tips",
      date: "May 10, 2021 • 7 min read",
      title: "How to manage work-life balance as a parent?",
      description:
        "Balancing work and family life can be challenging for parents. This article explores strategies and practical advice for maintaining a healthy balance between professional and family responsibilities.",
    },
    {
      id: 8,
      image: "/images/image 1.png",
      category: "Parenting Tips",
      date: "May 10, 2021 • 7 min read",
      title: "How to manage work-life balance as a parent?",
      description:
        "Balancing work and family life can be challenging for parents. This article explores strategies and practical advice for maintaining a healthy balance between professional and family responsibilities.",
    },
  ];

  const breakpoints = {
    0: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.5 },
    1200: { slidesPerView: 3.2 },
  };
  return (
    <>
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <h1>Read Our Latest Blogs</h1>
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
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id} className="rounded bg-[#FFF0F566] p-2">
                <div className="">
                  <Image
                    height={213}
                    width={391}
                    unoptimized
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full rounded"
                  />
                </div>
                <div className="mt-2">
                  <div className="inline-flex h-5 cursor-pointer items-center justify-center rounded bg-hotPink p-1.5 text-xs font-medium text-white">
                    {post.category}
                  </div>
                  <p className="mt-1.5 text-xs font-medium leading-[18px]">
                    {post.date}
                  </p>
                  <h4 className="mt-1 text-base font-semibold leading-[21px] text-black">
                    {post.title}
                  </h4>
                  <p className="line-clamp-2 text-xs font-normal leading-5 text-[#00000080]">
                    {post.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </>
  );
};

export default Blogs;
