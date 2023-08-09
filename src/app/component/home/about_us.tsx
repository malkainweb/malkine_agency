"use client";

import React from "react";

const Home_about_us = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex flex-col gap-[1.3vw] py-[2vw]">
        {/* heading */}
        <div className="flex items-center gap-[1.3vw] nova">
          <h1 className="nova text-[3.33vw] ">About Us</h1>
          <button className="border h-fit bg-transparent border-black px-[1.3vw] rounded-[0.7vw] py-[0.7vw] text-[1vw]">
            Learn More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full  items-end gap-[10vw] h-auto flex justify-center ">
          {/* image */}
          <div className="w-[13.3vw]  h-[13.3vw]  home_about_img rounded-[0.7vw]"></div>

          {/* now the text */}
          <div className="w-fit flex-col flex gap-[2vw] ">
            <div className="text-[1.87vw] inter">
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
            <div className="w-full flex gap-[1vw] nova uppercase items-center text-[0.8vw] ">
              <p>goals</p>
              <div className="w-[40%] h-[0.07vw] bg-black"></div>
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
