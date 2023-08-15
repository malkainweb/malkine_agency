"use client";

import React from "react";

const Home_mission = () => {
  return (
    <>
      <div className="w-full bg-white p_r sm:py-[12vw] h-auto flex  flex-col gap-[1.3vw] py-[3.33vw]">
        {/* heading */}
        <div className="flex items-center  gap-[1.33vw] sm:gap-[2.3vw] nova">
          <h1 className="nova text-[3.33vw] sm:text-[6vw]">Our Mission</h1>
          <button className=" sm:text-[2.5vw] sm:px-[4vw] sm:py-[1vw] sm:rounded-[1.25vw] border h-fit bg-transparent border-black px-[1.33vw] rounded-[0.7vw] py-[0.7vw] text-[1vw]">
            Read More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full  items-end gap-[10vw] h-auto flex justify-center  sm:items-start sm:justify-start  sm:pt-[8vw] ">
          {/* image */}
          <div className="w-[6.6vw] sm:hidden h-[full]"></div>

          {/* now the text */}
          <div className="w-fit flex-col flex gap-[2vw]  sm:w-full ">
            <div className="text-[1.87vw] inter">
              <p className="pl-[13.3vw] sm:hidden ">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                volutpat aliquam. Sit sit sed te
              </p>
              <p className="pl-[13.3vw] sm:block hidden sm:text-[4vw] sm:text-start sm:pl-0">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                <br /> volutpat aliquam. Sit sit sed te
              </p>
              <p className="text-start sm:text-[4vw] sm:pt-[6vw] sm:text-center sm:hidden">
                Lorem ipsum dolor sit amet consectetur. Elit dui nulla <br />
                gravida volutpat eget tortor proin. Posuere porttitor <br /> sed
                erat quisque. Donec quisque orci vestibulum <br />
                suspendisse auctor. Amet elementum facilisis imperdiet
              </p>
              <p className=" sm:text-[4vw] sm:pt-[6vw] sm:text-end sm:pr-[10vw] sm:block hidden">
                Lorem ipsum dolor sit amet consectetur. <br /> Elit dui nulla
                gravida volutpat eget tortor <br /> proin. Posuere porttitor sed
              </p>
            </div>
            <div className="w-full text-[1.87vw] sm:text-[4vw] inter sm:pt-[6vw]">
              <p className="textstart sm:hidden">
                {" "}
                gravida volutpat eget tortor proin. Posuere porttitor sed erat
                quisque. Donec quisque orci vestibulum <br />
                suspendisse auctor. Amet elementum facilisis imperdiet
              </p>
              <p className=" text-end hidden sm:block">
                {" "}
                Lorem ipsum dolor sit amet <br /> consectetur. Elit dui nulla
                gravida <br />
                volutpat eget tortor proin. Posuere <br /> porttitor sed erat
                quisque. Donec <br /> quisque orci vestibulum suspendiss
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_mission;
