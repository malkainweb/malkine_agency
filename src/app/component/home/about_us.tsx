"use client";

import React from "react";

const Home_about_us = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex flex-col gap-[1.3vw] py-[30px]">
        {/* heading */}
        <div className="flex items-center gap-[20px] nova">
          <h1 className="nova text-[50px] ">About Us</h1>
          <button className="border h-fit bg-transparent border-black px-[20px] rounded-[10px] py-[10px] text-[15px]">
            Learn More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full  items-end gap-[150px] h-auto flex justify-center ">
          {/* image */}
          <div className="w-[13.3vw]  h-[13.3vw]  home_about_img rounded-[10px]"></div>

          {/* now the text */}
          <div className="w-fit flex-col flex gap-[30px] ">
            <div className="text-[28px] inter">
              <p className="pl-[13.3vw]">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                volutpat aliquam. Sit sit sed te
              </p>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur. Elit dui nulla <br />{" "}
                gravida volutpat eget tortor proin. Posuere porttitor <br /> sed
                erat quisque. Donec quisque orci vestibulum <br />
                suspendisse auctor. Amet elementum facilisis imperdiet
              </p>
            </div>
            <div className="w-full flex gap-[15px] nova uppercase items-center text-[12px] ">
              <p>goals</p>
              <div className="w-[40%] h-[1px] bg-black"></div>
              <p>
                CREATING USER FRIENDLY, <br />
                HIGH AESTHETICS DESIGNS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about_us;
