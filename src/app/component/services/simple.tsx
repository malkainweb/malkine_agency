"use client";

import React from "react";

const Simple = () => {
  return (
    <>
      <div className="p_r w-full">
        <div className="w-full h-[41vw] sm:h-[64.5vw]  simple_bg flex justify-center items-center relative rounded-[30px]">
          <div className="w-full h-full rounded-[30px] bg-black opacity-[62%] absolute top-0 left-0 z-[1]"></div>
          <p className="text-center sm:hidden nova text-[2.7vw] font-[700] text-white z-[2] sm:text-[5vw]">
            SIMPLE, CLEAN AND MODERN <br /> ALWAYS CONVERTS - MALKAIN
          </p>
          <p className="text-center nova text-[2.7vw] font-[700] text-white z-[2] sm:text-[5vw] hidden sm:block">
            SIMPLE, CLEAN AND <br /> MODERN ALWAYS CONVERTS <br /> - MALKAIN{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Simple;
