"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categoryList = [
    "Feeding",
    "Skincare",
    "Nursery",
    "Clothes",
    "Diapers",
    "Toys",
    "Gear & Safety",
    "School",
    "Mommy",
    "Outdoor",
  ];

  const Info = [
    "About Us",
    "Contact Us",
    "Our Brands",
    "Media & Press",
    "Blogs",
  ];
  const policies = [
    "Terms & Conditions",
    "Privacy Policy",
    "Shipping Policy",
    "Cancellation & Returns",
  ];

  return (
    <>
      <div className="mt-10 flex items-center justify-center gap-10 bg-[#1C2A54] max-md:py-3 md:h-20">
        <div className="flex h-full cursor-pointer flex-col items-center gap-4 md:flex-row md:px-[30px]">
          <div>
            <Image
              width={40}
              height={40}
              unoptimized
              src="/images/Truck.svg"
              alt="Headset"
              className="h-full w-full"
            />
          </div>
          <h1 className="text-center text-xl font-semibold text-white">
            Free Shipping
          </h1>
        </div>
        <div className="flex h-full cursor-pointer flex-col items-center gap-4 md:flex-row md:px-[30px]">
          <div>
            <Image
              width={40}
              height={40}
              unoptimized
              src="/images/Group 34969.svg"
              alt="Headset"
              className="h-full w-full"
            />
          </div>
          <h1 className="text-center text-xl font-semibold text-white">
            2x Cashback
          </h1>
        </div>
        <div className="flex h-full cursor-pointer flex-col items-center gap-4 md:flex-row md:px-[30px]">
          <div>
            <Image
              width={40}
              height={40}
              unoptimized
              src="/images/Headset.svg"
              alt="Headset"
              className="h-full w-full"
            />
          </div>
          <h1 className="text-center text-xl font-semibold text-white">
            24/7 Support
          </h1>
        </div>
      </div>
      <div className="bg-pureWhite">
        <div className="container py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="md:hidden">
              {[
                { title: "Categories", content: categoryList },
                {
                  title: "Contact",
                  content: (
                    <ul className="my-4 space-y-2">
                      <li className="flex cursor-pointer gap-3 text-xl">
                        <div className="mt-1">
                          <CiLocationOn />
                        </div>
                        <p className="font-normal text-darkBlue">
                          Babystore. c/o Edge Technical Solutions, 1706, Silver
                          Tower, Marasi Dr, Business Bay, Dubai, United Arab
                          Emirates
                        </p>
                      </li>
                      <li className="flex cursor-pointer gap-3 text-xl">
                        <div className="mt-1">
                          <LuPhone />
                        </div>
                        <p className="font-normal text-darkBlue">
                          212 929 9953
                        </p>
                      </li>
                      <li className="flex cursor-pointer gap-3 text-xl">
                        <div className="mt-1">
                          <FaWhatsapp />
                        </div>
                        <p className="font-normal text-darkBlue">
                          +971 55 799 4258
                        </p>
                      </li>
                      <li className="flex cursor-pointer gap-3 text-xl">
                        <div className="mt-1">
                          <FiSend />
                        </div>
                        <p className="font-normal text-darkBlue">
                          info@babystore.ae
                        </p>
                      </li>
                    </ul>
                  ),
                }, // Replace with actual JSX if needed
                { title: "Company Info", content: Info },
                { title: "Shipping & Policies", content: policies },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-300">
                  <h3
                    className="flex cursor-pointer items-center justify-between py-2 text-xl font-semibold text-darkBlue"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <span>
                      {openIndex === index ? "-" : "+"}{" "}
                      {/* Show "+" or "-" based on state */}
                    </span>
                  </h3>
                  {openIndex === index && (
                    <div className="mt-2 space-y-2 text-darkBlue">
                      {Array.isArray(item.content)
                        ? item.content.map((contentItem, idx) => (
                            <p key={idx} className="text-xl font-normal">
                              {contentItem}
                            </p>
                          ))
                        : item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <h2 className="text-3xl font-semibold text-darkBlue">
                Categories
              </h2>
              <ul className="mt-4 space-y-2">
                {categoryList.map((category, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-xl font-normal text-darkBlue"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <h2 className="text-3xl font-semibold text-darkBlue">Contact</h2>
              <ul className="mt-4 space-y-2">
                <li className="flex cursor-pointer gap-3 text-xl">
                  <div className="mt-1">
                    <CiLocationOn />
                  </div>
                  <p className="font-normal text-darkBlue">
                    Babystore. c/o Edge Technical Solutions, 1706, Silver Tower,
                    Marasi Dr, Business Bay, Dubai, United Arab Emirates
                  </p>
                </li>
                <li className="flex cursor-pointer gap-3 text-xl">
                  <div className="mt-1">
                    <LuPhone />
                  </div>
                  <p className="font-normal text-darkBlue">212 929 9953</p>
                </li>
                <li className="flex cursor-pointer gap-3 text-xl">
                  <div className="mt-1">
                    <FaWhatsapp />
                  </div>
                  <p className="font-normal text-darkBlue">+971 55 799 4258</p>
                </li>
                <li className="flex cursor-pointer gap-3 text-xl">
                  <div className="mt-1">
                    <FiSend />
                  </div>
                  <p className="font-normal text-darkBlue">info@babystore.ae</p>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h2 className="text-3xl font-semibold text-darkBlue">
                Company Info
              </h2>
              <ul className="mt-4 space-y-2">
                {Info.map((category, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-xl font-normal text-darkBlue"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <h2 className="text-3xl font-semibold text-darkBlue">
                Shipping & Policies
              </h2>
              <ul className="mt-4 space-y-2">
                {policies.map((category, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-xl font-normal text-darkBlue"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-[60px] flex-shrink-0">
            <Image
              width={324}
              height={88}
              unoptimized
              src="/images/Babystore Logo - Email - 3 1.svg"
              alt="logo"
            />
            <p className="mt-5 text-justify text-base font-normal text-darkBlue">
              Babystore.ae is one of the biggest online store with mother and
              babv products. Having a tagline "From tummv to toddler", we carrv
              a large number of brands with various categories. Our range of
              International brands is of highest aualitv and best suited for
              babv and mommv. We provide free deliver all over UAE which
              includes Dubai. Abu Dhabi. Shariah. Aiman. RAK. Fuiairah and UAO.
              Our range includes evervthing a mom needs herself and her little
              one. from prenatal care to the toddler stage and bevond. We are
              the best Online Shonning Store. and we providing 50k+ Products.
            </p>
          </div>
        </div>
        <div className="bg-white md:h-[60px]">
          <div className="container flex h-full flex-col items-center justify-between gap-y-2 md:flex-row">
            <p className="text-xs font-normal text-darkGray">
              Copyright © 2024 Babystore. All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <p className="cursor-pointer text-xs font-normal text-deepCharcoal underline">
                Promotion
              </p>
              <p className="cursor-pointer text-xs font-normal text-deepCharcoal underline">
                Contact
              </p>
              <p className="cursor-pointer text-xs font-normal text-deepCharcoal underline">
                Frequently Asked Questions
              </p>
            </div>
            <div>
              <Image
                width={400}
                height={40}
                unoptimized
                src="/images/Credit card.png"
                alt="credit card"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
