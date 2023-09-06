"use client";

import React from "react";
import Logo from "../logo";
import Image from "next/image";
import optimized from "../../../../public/home/optimized.webp";
import Link from "next/link";

const Optimized = () => {
  return (
    <>
      <div className="w-full  h-auto py-[5vw] bg-white ">
        <div className="w-full h-auto  py-[7vw] sm:py-[15vw] sm:gap-[10vw]  flex-col p_r  bg-black flex sm:rounded-none">
          {/* first optimized */}
          <div className="w-full flex justify-between items-start  sm:justify-start">
            <p className="text-[3vw]   novabold uppercase text-white text-start sm:text-[5.5vw]">
              Developing award <br /> winning ideas <br />
              one at a time
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
          <div className="w-full flex justify-between h-auto items-center   sm:flex-col sm:items-start sm:gap-[5vw] sm:justify-start ">
            <p className="text-[#C5C5C5] sm:text-center text-start text-[2.13vw] sm:text-[4vw] sm:hidden">
              Browse through our portfolio and see <br /> why clients work with
              us.
            </p>
            <p className="text-[#C5C5C5] sm:text-start text-start  text-[2.13vw] sm:text-[4vw] hidden sm:block">
              Browse through our portfolio and see why <br />
              clients work with us.
            </p>
            <div className="w-auto flex gap-[3vw] items-center sm:w-full sm:justify-staet">
              {/* <button className="font-[helvetica] h-fit capitalize  text-[1.1vw] font[900]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]  sm:text-[4vw] sm:w-fit sm:py-[3vw] sm:px-[4vw]">
                Check our portfolio
              </button> */}
              <Link
                href={"works"}
                className="font-[helvetica] h-fit capitalize  text-[1.1vw] font[900]  rounded-[39px] px-[50px] py-[16px] bg-[#232020] text-white hover:bg-[#920808] sm:text-[4vw] sm:w-fit sm:py-[3vw] sm:px-[4vw]"
              >
                Check our portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Optimized;
