import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative">
      <img src={assets.main_banner_bg} className=" md:block hidden" />
      <img src={assets.main_banner_bg_sm} className="md:hidden w-full" />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-2-80 lg:max-w-105 leading-tight lg:leading-15">
          
          Freshness You Trust, Saving You Love
        </h1>

        <div className="flex items-centermt-6 font-medium mt-4">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-[#4fbf8b] hover:bg-[#44ae7c] transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow "
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>

          <Link
            to={"/products"}
            className="group hidden md:flex item-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore Deals
            <img
              src={assets.black_arrow_icon}
              alt="arrow "
              className=" transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
