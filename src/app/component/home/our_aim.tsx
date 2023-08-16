"use client";

import React from "react";

const Aim = () => {
  return (
    <>
      <div className="w-full  h-auto  bg-white ">
        <div className="w-full h-auto aim p_r rounded-[1.33vw] bg-black sm:mt-[10vw] sm:rounded-none">
          <div className="w-full  flex items-start pt-[4vw]  relative h-[46.6vw]  sm:h-[92.5vw]">
            <div className="flex flex-col gap-[0.7vw] text-white">
              <p className="nova text-[1.33vw] text-[#D01717] sm:text-[2.5vw] sm:font-[700]">
                OUR AIM
              </p>
              <h3 className="text-[3.33vw] h-fit nova font-bold sm:hidden">
                We provide user centered <br />{" "}
                <span
                  className="underline  underline-offset-4  decoration-[#D01717] "
                  style={{
                    textUnderlineOffset: "1.33vw",
                  }}
                >
                  innovative
                </span>{" "}
                and creative designs.
              </h3>
              <h3 className="text-[6vw] h-fit nova font-bold sm:block hidden">
                We provide user <br /> centered innovative <br /> and creative
                designs.
              </h3>

              <div className="sm:w-[11.25vw] h-[0.55vw] bg-[#D01717] sm:mt-[6vw] hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aim;
