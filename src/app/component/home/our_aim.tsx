"use client";

import React from "react";
import Logo from "../logo";
import Image from "next/image";
import optimized from "../../../../public/home/optimized.webp";

const Aim = () => {
  return (
    <>
      <div className="w-full  h-auto py-[5vw] bg-white ">
        <div className="w-full h-auto gap-[3vw] py-[7vw] flex-col p_r rounded-[1.33vw] bg-black flex sm:rounded-none">
          {/* first optimized */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[5vw] novabold uppercase text-white text-start ">
              (OPTIMIZED) <br /> DEVELOPMENT
            </p>
            <Logo />
          </div>

          {/* second section */}
          <div className="w-full flex justify-center h-auto">
            <Image
              src={optimized}
              alt="phones together"
              className="w-[50vw] h-fit"
            />
          </div>

          {/* third section */}
          <div className="w-full flex justify-between h-auto items-center">
            <p className="text-[#C5C5C5] text-start text-[2.13vw]">
              Lorem ipsum dolor sit amet consectetur. Elit dui <br /> nulla
              gravida volutpat eget tortor proin.{" "}
            </p>
            <div className="w-auto flex gap-[3vw]">
              <button className="font-[helvetica] h-fit capitalize  text-[1.1vw] font[900] sm:hidden rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
                Check our portfolio
              </button>
              <button className="font-[helvetica] h-fit capitalize  text-[1.1vw] font[900] sm:hidden rounded-[39px] px-[50px] py-[16px] bg-[#232020] text-white hover:bg-[#920808]">
                Check our portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aim;
