"use client";

import { passion_one, PPMoriRegular } from "../utils/fonts";
import mobile_jet from "@/../public/malkain_landing_page/mobile_jet.webp";
import destop_jet from "@/../public/malkain_landing_page/destop_jet.webp";
import Image from "next/image";

const TakeOff = () => {
  return (
    <div className="w-full h-[200vh] flex flex-col  ">
      <div className="w-full h-screen sticky flex flex-col  justify-between top-0 bg-gradient-to-b py-[16vh]  px-3 from-[#AEA49C] to-[#FFF8EC] left-0">
        <div className=" absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b to-transparent from-black" />
        {/* Title */}
        <h2
          className={`${passion_one.className} text-[#2D150A] tracking-[-3.3px] text-center text-[13vw] font-normal leading-tight`}
        >
          We help you take off.
        </h2>

        {/* Bottom */}
        <div className="flex flex-col gap-6">
          <hr className="border-[#2D150A]" />
          <p
            className={`${PPMoriRegular.className} text-[#1a0f00] text-sm leading-relaxed`}
          >
            At Malkain, we design and build websites that drive results. Each
            project is crafted for performance, aesthetics, and seamless user
            experience. At Malkain, we design and build websites that drive
            results. Each project is crafted for performance, aesthetics, and
            seamless user experience.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center  top-0 h-[100vh] z-10">
        {" "}
        <Image src={mobile_jet} className="w-full h-auto" alt="desktop image" />
      </div>
    </div>
  );
};

export default TakeOff;
