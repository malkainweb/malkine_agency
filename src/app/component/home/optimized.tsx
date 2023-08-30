"use client";

import React from "react";
import Logo from "../logo";
import Image from "next/image";
import optimized from "../../../../public/home/optimized.webp";

const Optimized = () => {
  return (
    <>
      <div className="w-full  h-auto py-[5vw] bg-white ">
        <div className="w-full h-auto gap-[3vw] py-[7vw] sm:py-[15vw] sm:gap-[5vw] flex-col p_r rounded-[1.33vw] bg-black flex sm:rounded-none">
          {/* first optimized */}
          <div className="w-full flex justify-between items-center">
            <p className="text-[5vw] novabold uppercase text-white text-start sm:text-[8vw]">
              (OPTIMIZED) <br /> DEVELOPMENT
            </p>
            <div className="sm:hidden">
              {" "}
              <Logo />
            </div>
          </div>

          {/* second section */}
          <div className="w-full flex justify-center h-auto">
            <Image
              src={optimized}
              alt="phones together"
              className="w-[50vw] h-fit sm:w-[70vw]"
            />
          </div>

          {/* third section */}
          <div className="w-full flex justify-between h-auto items-center sm:flex-col sm:items-start sm:gap-[5vw]">
            <p className="text-[#C5C5C5] text-start text-[2.13vw] sm:text-[4vw]">
              Lorem ipsum dolor sit amet consectetur. Elit dui <br /> nulla
              gravida volutpat eget tortor proin.{" "}
            </p>
            <div className="w-auto flex gap-[3vw] sm:w-full sm:justify-between">
              {/* <button className="font-[helvetica] h-fit capitalize  text-[1.1vw] font[900]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]  sm:text-[4vw] sm:w-fit sm:py-[3vw] sm:px-[4vw]">
                Check our portfolio
              </button> */}
              <button className="font-[helvetica] h-fit capitalize  text-[1.1vw] font[900]  rounded-[39px] px-[50px] py-[16px] bg-[#232020] text-white hover:bg-[#920808] sm:text-[4vw] sm:w-fit sm:py-[3vw] sm:px-[4vw]">
                Check our portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Optimized;
