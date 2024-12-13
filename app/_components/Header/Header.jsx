import Image from "next/image";
import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import { FaAngleDown } from "react-icons/fa6";
import HeartIcon from "../Icons/HeartIcon";
import UserIcon from "../Icons/UserIcon";
import BasketIcon from "../Icons/BasketIcon";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <>
      <section className="h-[60px] w-full bg-lavenderBlush">
        <h1 className="flex h-full items-center justify-center text-2xl font-semibold uppercase leading-[29px] text-pinkRose">
          15% OFF ON 1st 3 ORDERS
        </h1>
      </section>
      <section className="container py-8">
        <div className="flex items-center justify-between gap-5">
          <div className="block cursor-pointer text-3xl lg:hidden">
            <MdOutlineMenu />
          </div>
          <div className="flex-shrink-0">
            <Image
              width={217}
              height={59}
              unoptimized
              src="/images/Babystore Logo - Email - 3 1.svg"
              alt="logo"
              className="h-full w-full"
            />
          </div>

          <form className="mx-auto hidden w-full lg:block">
            <div className="flex rounded-full">
              <label
                htmlFor="search-dropdown"
                className="sr-only mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="z-10 inline-flex h-[60px] flex-shrink-0 items-center rounded-s-full bg-lavenderBlush px-4 py-2.5 text-center text-sm font-medium text-gray-900 outline-none"
                type="button"
              >
                All categories <FaAngleDown />
              </button>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block h-[60px] w-full rounded-e-full border-s-2 bg-lavenderBlush p-2.5 text-sm outline-none placeholder:font-medium placeholder:text-[#1A171880]"
                  placeholder="What are you looking for?"
                  required
                />
                <button
                  type="submit"
                  className="absolute end-0 top-0 flex h-[60px] items-center justify-center rounded-e-full p-2.5 text-sm font-medium"
                >
                  <SearchIcon />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-shrink-0 items-center gap-4">
            <div className="hidden cursor-pointer lg:block">
              <HeartIcon />
            </div>
            <div className="hidden cursor-pointer lg:block">
              <UserIcon />
            </div>
            <div className="cursor-pointer">
              <BasketIcon />
            </div>
          </div>
        </div>
      </section>
      <div className="px-4">
        <form className="mx-auto block w-full lg:hidden">
          <div className="flex rounded-full">
            <label
              htmlFor="search-dropdown"
              className="sr-only mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="z-20 block h-[60px] w-full rounded-full border-s-2 bg-lavenderBlush p-2.5 text-sm outline-none placeholder:font-medium placeholder:text-[#1A171880]"
                placeholder="What are you looking for?"
                required
              />
              <button
                type="submit"
                className="absolute end-0 top-0 flex h-[60px] items-center justify-center rounded-e-full p-2.5 text-sm font-medium"
              >
                <SearchIcon />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Header;
