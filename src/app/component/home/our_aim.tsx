"use client";

import React from "react";

const Aim = () => {
  return (
    <>
      <div className="w-full  h-auto  bg-white ">
        <div className="w-full h-auto aim p_r rounded-[1.33vw] bg-black">
          <div className="w-full  flex items-start pt-[4vw]  relative h-[46.6vw]">
            <div className="flex flex-col gap-[0.7vw] text-white">
              <p className="nova text-[1.33vw] text-[#D01717] ">OUR AIM</p>
              <h3 className="text-[3.33vw] h-fit nova font-bold">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aim;
