import Image from "next/image";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import FAQ from "../Faqs/Faqs";

const DetailsSection = () => {
  return (
    <>
      <div className="container my-10 flex flex-col gap-y-8 lg:flex-row">
        <div className="w-full max-w-[843px]">
          <div className="relative rounded-[10px]">
            <Image
              width={839}
              height={839}
              unoptimized
              src="/images/image (1).png"
              alt="Task"
              className="rounded-[10px] object-cover"
            />
            <div className="absolute right-8 top-8 flex flex-col gap-2">
              <div className="cursor-pointer">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/ShareFat.svg"
                  alt="Heart"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/ArrowsLeftRight.svg"
                  alt="Heart"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  width={40}
                  height={40}
                  unoptimized
                  src="/images/Heart.svg"
                  alt="Heart"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div>
              <Image
                width={124}
                height={124}
                unoptimized
                src="/images/image (1).png"
                alt="Task"
                className="cursor-pointer rounded-[10px] object-cover"
              />
            </div>
            <div>
              <Image
                width={124}
                height={124}
                unoptimized
                src="/images/image (1).png"
                alt="Task"
                className="cursor-pointer rounded-[10px] object-cover"
              />
            </div>
            <div>
              <Image
                width={124}
                height={124}
                unoptimized
                src="/images/image (1).png"
                alt="Task"
                className="cursor-pointer rounded-[10px] object-cover"
              />
            </div>
            <div>
              <Image
                width={124}
                height={124}
                unoptimized
                src="/images/image (1).png"
                alt="Task"
                className="cursor-pointer rounded-[10px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[509px] flex-shrink-0 lg:pl-10">
          <h1 className="text-xl font-normal text-darkGray">
            Ubeybi Shopping Trolley & High Chair Hygienic Cover - Black
          </h1>
          <p className="my-2 text-xs font-semibold text-[#858585]">
            View all{" "}
            <span className="cursor-pointer text-skyBlue">KinderKraft</span>{" "}
            products.
          </p>
          <div className="my-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[22px] font-semibold leading-6 text-darkGray">
                AED 165
              </h2>
              <p className="items-baseline text-sm font-semibold leading-6 text-[#929391] line-through">
                199
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-orangePeel">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-xs font-normal text-[#5D5E5C]">80</p>
            </div>
          </div>
          <div className="mt-5 flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-[#DAF0DC] px-5 text-sm font-semibold uppercase text-[#464646]">
            Call us to receive your personalized Discount Codes
          </div>
          <div className="mt-2 flex h-[50px] cursor-pointer items-center justify-between rounded-full bg-[#F6F6F6] px-5 text-sm font-semibold text-[#464646]">
            <div>
              <Image
                width={48}
                height={21}
                unoptimized
                src="/images/Icon.png"
                alt="icons"
              />
            </div>
            <p>
              Split in 4 payments. No interest.{" "}
              <span>
                <strong> No late fees.</strong>{" "}
              </span>
            </p>
            <p></p>
          </div>
          <div className="mt-2 flex h-[50px] cursor-pointer items-center justify-between rounded-full bg-[#F6F6F6] px-5 text-sm font-semibold text-[#464646]">
            <div className="flex-shrink-0">
              <Image
                width={48}
                height={21}
                unoptimized
                src="/images/Icon2.png"
                alt="icons"
              />
            </div>
            <p>Find a better price? We'll beat it by 10%.</p>
            <p></p>
          </div>
          <div className="mt-2 flex h-[50px] cursor-pointer items-center justify-between rounded-full bg-[#F6F6F6] px-5 text-sm font-semibold text-[#464646]">
            <div className="flex-shrink-0">
              <Image
                width={48}
                height={21}
                unoptimized
                src="/images/Layer_1.png"
                alt="icons"
              />
            </div>
            <p>
              Deliver to Abu Dhabi Media Co, Abu Dhabi by Tomorrow, <br />{" "}
              January 27 When you order before 12 PM.
            </p>
          </div>
          <div className="mt-2 flex h-[50px] cursor-pointer items-center justify-between rounded-full bg-[#FFF0F5] px-5 text-sm font-semibold text-[#464646]">
            <div>
              <h3 className="text-center text-[29px] font-normal text-darkGray">
                2X
              </h3>
              <p className="text-xs font-semibold text-darkGray">Cashback</p>
            </div>
            <div>
              <p className="font-semibold text-[#00AE42]">Earn AED 5.50</p>
              <p>Earn 2 Points for Every Dirham Spent</p>
            </div>
            <div></div>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-1">
              <p className="text-sm font-medium text-darkGray">Size</p>
              <p className="text-xs font-medium text-skyBlue underline">
                Size Guide
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex h-9 w-10 items-center justify-center rounded-full border border-t-4 border-[#E4E4E4] text-sm font-semibold">
                S
              </div>
              <div className="flex h-9 w-10 items-center justify-center rounded-full border border-t-4 border-[#00AE42] text-sm font-semibold">
                M
              </div>
              <div className="flex h-9 w-10 items-center justify-center rounded-full border border-t-4 border-[#E4E4E4] text-sm font-semibold">
                L
              </div>
              <div className="flex h-9 w-10 items-center justify-center rounded-full border border-t-4 border-[#E4E4E4] text-sm font-semibold">
                Xl
              </div>
              <div className="flex h-9 w-10 items-center justify-center rounded-full border border-t-4 border-[#E4E4E4] text-sm font-semibold">
                XXl
              </div>
              <div className="flex h-9 w-10 items-center justify-center rounded-full border border-t-4 border-[#E4E4E4] text-sm font-semibold">
                XXXl
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1">
            <button className="Linear flex h-[51px] w-full items-center justify-center rounded-full px-10 text-sm font-medium text-white">
              Add to Basket
            </button>

            <div className="flex items-center gap-1">
              <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] text-xl">
                <FaMinus />
              </div>
              <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] text-xl font-semibold">
                20
              </div>
              <div className="flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#F6F6F6] text-xl">
                <FaPlus />
              </div>
            </div>
          </div>
          <button className="But-Btn mt-5 flex h-[51px] w-full items-center justify-center rounded-full border-[3px] border-darkGray px-10 text-sm font-medium text-white">
            But Now
          </button>
          <div className="mt-5 flex items-center">
            <div className="flex size-[98px] cursor-pointer flex-col items-center justify-center border-r-2 border-[#0000001A]">
              <div>
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Package.png"
                  alt="truck"
                />
              </div>
              <p className="text-xs font-medium text-darkGray">Free Shipping</p>
            </div>
            <div className="flex size-[98px] cursor-pointer flex-col items-center justify-center border-r-2 border-[#0000001A]">
              <div>
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Package.png"
                  alt="truck"
                />
              </div>
              <p className="text-xs font-medium text-darkGray">Free Shipping</p>
            </div>
            <div className="flex size-[98px] cursor-pointer flex-col items-center justify-center border-r-2 border-[#0000001A]">
              <div>
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Package.png"
                  alt="truck"
                />
              </div>
              <p className="text-xs font-medium text-darkGray">Free Shipping</p>
            </div>
            <div className="flex size-[98px] cursor-pointer flex-col items-center justify-center">
              <div className="flex-shrink-0">
                <Image
                  width={34}
                  height={34}
                  unoptimized
                  src="/images/Package.png"
                  alt="truck"
                  className="h-full w-full"
                />
              </div>
              <p className="text-xs font-medium text-darkGray">Free Shipping</p>
            </div>
          </div>

          <FAQ title="Highlights">
            <p>
              <strong>Recommended Age:</strong> 0 - 3 years.
            </p>
            <p>
              <strong>Returns:</strong> Eligible for refund within 7 days.
            </p>
            <p>
              <strong>Type:</strong> Cot
            </p>
            <p>Wheeled Bottom</p>
            <p>
              {" "}
              <strong> Color:</strong> Red
            </p>
            <p>
              {" "}
              <strong> W x H x D:</strong> 80cm x 50cm x 5cm
            </p>
            <p>
              {" "}
              <strong> Weight:</strong> 3.9kg
            </p>
            <p>
              {" "}
              <strong> SKU:</strong> a-103297
            </p>
          </FAQ>
          <FAQ title="Features">
            <ul className="list-disc pl-5">
              <li>Side impact protections for the head</li>
              <li>Anatomical head hugger with back support</li>
              <li>6 points belt</li>
              <li>Padded shoulder straps and crotch strap</li>
              <li>Practical height adjustment mechanism for the straps</li>
              <li>Side display for correct use</li>
              <li>Headrest adjustable in 7 heights</li>
            </ul>
          </FAQ>
          <FAQ title="Specification">
            <p>Specifications content goes here...</p>
          </FAQ>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
