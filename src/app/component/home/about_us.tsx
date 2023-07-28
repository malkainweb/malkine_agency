"use client";

import React from "react";

const Home_about_us = () => {
  return (
    <>
      <div className="w-full bg-white p_r border2 h-auto flex flex-col gap-[20px] py-[30px]">
        {/* heading */}
        <div className="flex items-center gap-[20px]">
          <h1 className="nova text-[50px]">About Us</h1>
          <button className="border h-fit bg-transparent border-black px-[20px] py-[10px] text-[15px]">
            Learn More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full border2 items-end gap-[50px] h-auto flex justify-between">
          {/* image */}
          <div className="w-[200px]  h-[200px] border2"></div>

          {/* now the text */}
          <div className="w-fit flex-col gap-[20px] border2">
            <div className="text-[20px] nova">
              <p className="text-end pl-[120px]">
                {" "}
                <span>Malkain Designs</span> ut elit volutpat aliquam. Sit sit
                sed te
              </p>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur. Elit dui nulla <br />{" "}
                gravida volutpat eget tortor proin. Posuere porttitor <br /> sed
                erat quisque. Donec quisque orci vestibulum <br />
                suspendisse auctor. Amet elementum facilisis imperdiet
              </p>
            </div>
            <div className="w-full flex gap-[15px] nova">
              <p>goals</p>
              <div className="w-[150px] h-[1px] bg-black"></div>
              <p>cREATING USER FRIENDLY ,HIGH AESTHETICS DESIGNS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about_us;
