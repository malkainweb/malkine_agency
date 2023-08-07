"use client";

import React from "react";

const Aim = () => {
  return (
    <>
      <div className="w-full  h-auto  bg-white ">
        <div className="w-full h-auto aim p_r rounded-[20px] bg-black">
          <div className="w-full  flex items-start pt-[60px]  relative h-[46.6vw]">
            <div className="flex flex-col gap-[10px] text-white">
              <p className="nova text-[20px] text-[#D01717] ">OUR AIM</p>
              <h3 className="text-[50px] h-fit nova font-bold">
                We provide user centered <br />{" "}
                <span
                  className="underline  underline-offset-4  decoration-[#D01717] "
                  style={{
                    textUnderlineOffset: "20px",
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
