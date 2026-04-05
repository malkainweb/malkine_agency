"use client";

import Image from "next/image";
import {
  passion_one,
  inter_font,
  PPMoriRegular,
  SFProDisplay_medium,
} from "../../utils/fonts";
import center from "@/../public/malkain_landing_page/center.webp";
import left from "@/../public/malkain_landing_page/left.webp";
import right from "@/../public/malkain_landing_page/right.webp";

const LandingAbout = () => {
  return (
    <div className="w-full bg-black z-10 flex flex-col items-center py-16 sm:py-20 gap-10 px-6">
      {/* Title */}
      <h2
        className={`${SFProDisplay_medium.className} text-[#F8F0E5] font-black text-center text-4xl uppercase leading-[0.8]`}
      >
        Our TEAM
      </h2>

      {/* Fanned cards */}
      {/* <div className="relative w-full max-w-4xl  grid grid-cols-3 gap-8 sm:flex justify-center items-center">
       
        <div className="sm:absolute sm:left-[20%] sm:w-[52%] rounded-2xl overflow-hidden origin-center sm:-rotate-6 sm:translate-y-1 sm:translate-x-[-35%]">
          <Image src={left} alt="left" className="w-full h-auto" />
        </div>

       
        <div className=" sm:w-[57%] rounded-2xl  overflow-hidden z-10">
          <Image src={center} alt="center" className="w-full h-auto" />
        </div>


        <div className="sm:absolute sm:right-[20%] sm:w-[52%] rounded-2xl overflow-hidden origin-center sm:rotate-6 sm:translate-y-1 sm:translate-x-[35%]">
          <Image src={right} alt="right" className="w-full h-auto" />
        </div>
      </div> */}

      {/* Video */}
      <div className="relative w-full rounded-xl overflow-hidden">
        <video
          src="/malkain_landing_page/team_video_compressed.mp4"
          className="w-full h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Body text */}
      <p
        className={`${PPMoriRegular.className} text-white max-w-md text-center text-base leading-[1.2]`}
      >
        We don{"'"}t build websites to win design awards. We build them to make
        you money. Every layout, every button, every pixel on your store is
        engineered to turn traffic into revenue and browsers into repeat buyers.
      </p>
    </div>
  );
};

export default LandingAbout;
