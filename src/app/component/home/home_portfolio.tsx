"use client";

import React from "react";

const Home_portfolio = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex flex-col gap-[20px] py-[30px]">
        {/* heading */}
        <div className="flex items-center gap-[20px] nova">
          <h1 className="nova text-[50px] ">Our Portfolio</h1>
          <button className="border h-fit bg-transparent border-black px-[20px] rounded-[10px] py-[10px] text-[15px]">
            View All
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full flex justify-between h-auto">
          <div className="h-auto w-[27%]">
            <div className=" rounded-[12px] h-[350px] border2"></div>
          </div>
          <div className="h-auto w-[40%]">
            <div className="w-full rounded-[12px] h-[350px] border2"></div>
          </div>
          <div className="h-auto w-[27%]">
            <div className="w-full rounded-[12px] h-[350px] border2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_portfolio;
