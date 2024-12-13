"use client";
import React, { useState } from "react";

const FAQ = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="my-2 overflow-hidden rounded-xl bg-[#F6F6F6]">
      <button
        onClick={toggle}
        className="flex w-full justify-between bg-[#F6F6F6] px-4 py-3 text-left focus:outline-none"
      >
        <span className="text-sm font-medium">{title}</span>
        <svg
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="px-8 py-2">{children}</div>
      </div>
    </div>
  );
};

export default FAQ;
