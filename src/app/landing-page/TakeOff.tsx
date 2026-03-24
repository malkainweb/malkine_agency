"use client";

import { passion_one, PPMoriRegular } from "../utils/fonts";
import mobile_jet from "@/../public/malkain_landing_page/mobile_jet.webp";
import destop_jet from "@/../public/malkain_landing_page/destop_jet.webp";
import Image from "next/image";
import LandingAbout from "./About";
import Landing_Services from "./Services";

const TakeOff = () => {
  return (
    <div className="w-full min-h-[200vh]  flex flex-col  ">
      <div className="w-full h-screen sticky flex flex-row sm:flex-col  items-center sm:items-start justify-between top-0 bg-gradient-to-b py-[16vh] px-10  sm:px-3  from-[#AEA49C] to-[#FFF8EC] left-0">
        <div className=" absolute top-0 left-0 w-full h-[30%] sm:h-[20%] bg-gradient-to-b to-transparent from-black" />
        {/* Title */}
        <h2
          className={`${passion_one.className} text-[#2D150A] max-w-sm tracking-[-3.3px] sm:text-center sm:text-[13vw] text-7xl font-normal sm:leading-tight`}
        >
          We help you take off.
        </h2>

        {/* Bottom */}
        <div className="flex flex-col gap-6">
          <hr className="border-[#2D150A] sm:block hidden" />
          <p
            className={`${PPMoriRegular.className} md:max-w-md w-full text-[#1a0f00] text-sm leading-relaxed`}
          >
            At Malkain, we design and build websites that drive results. Each
            project is crafted for performance, aesthetics, and seamless user
            experience. At Malkain, we design and build websites that drive
            results. Each project is crafted for performance, aesthetics, and
            seamless user experience.
          </p>
        </div>
      </div>
      <div className="w-full flex  justify-center items-start sm:items-start  top-0  h-[200vh] sm:h-[150vh] z-10">
        {" "}
        <Image
          src={mobile_jet}
          className="w-full md:hidden h-auto"
          alt="desktop image"
        />
        <Image
          src={destop_jet}
          className="w-[50%] sm:hidden  h-auto"
          alt="desktop image"
        />
      </div>

      <LandingAbout />
      <Landing_Services />
    </div>
  );
};

export default TakeOff;
