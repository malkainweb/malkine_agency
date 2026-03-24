"use client";

import Image from "next/image";
import { passion_one, inter_font, PPMoriRegular } from "../utils/fonts";
import center from "@/../public/malkain_landing_page/center.webp";
import left from "@/../public/malkain_landing_page/left.webp";
import right from "@/../public/malkain_landing_page/right.webp";

const LandingAbout = () => {
  return (
    <div className="w-full bg-black z-10 flex flex-col items-center py-16 sm:py-20 gap-10 px-6">
      {/* Title */}
      <h2
        className={`${passion_one.className} text-[#F8F0E5] font-black text-center text-5xl uppercase leading-[0.8] tracking-[-1.61px]`}
      >
        We Electrify <br /> Your Website
      </h2>

      {/* Fanned cards */}
      <div className="relative w-full max-w-4xl  grid grid-cols-3 gap-8 sm:flex justify-center items-center">
        {/* Left card */}
        <div className="sm:absolute sm:left-[20%] sm:w-[52%] rounded-2xl overflow-hidden origin-center sm:-rotate-6 sm:translate-y-1 sm:translate-x-[-35%]">
          <Image src={left} alt="left" className="w-full h-auto" />
        </div>

        {/* Center card */}
        <div className=" sm:w-[57%] rounded-2xl  overflow-hidden z-10">
          <Image src={center} alt="center" className="w-full h-auto" />
        </div>

        {/* Right card */}
        <div className="sm:absolute sm:right-[20%] sm:w-[52%] rounded-2xl overflow-hidden origin-center sm:rotate-6 sm:translate-y-1 sm:translate-x-[35%]">
          <Image src={right} alt="right" className="w-full h-auto" />
        </div>
      </div>

      {/* Body text */}
      <p
        className={`${PPMoriRegular.className} text-white max-w-md text-center text-sm leading-[1.2]`}
      >
        At Malkain, we design and build websites that drive results. Each
        project is crafted for performance, aesthetics, and seamless user
        experience.
      </p>
    </div>
  );
};

export default LandingAbout;
