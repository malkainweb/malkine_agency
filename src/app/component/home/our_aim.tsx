"use client";

import React from "react";

const Aim = () => {
  return (
    <>
      <div className="w-full  h-auto border2 p_r rounded-[10px]">
        <div className="w-full border flex items-start pt-[30px] aim relative h-[500px]">
          <div className="flex flex-col gap-[10px] text-white">
            <p className="nova text-[20px] text-[#D01717] ">OUR AIM</p>
            <h3 className="text-[50px] nova font-bold">
              We provide user centered <br />{" "}
              <span className="underline underline-offset-3 underline-[#D01717] underline-[4px]">
                innovative
              </span>{" "}
              and creative designs.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aim;
