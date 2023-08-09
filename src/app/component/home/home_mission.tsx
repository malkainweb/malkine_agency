"use client";

import React from "react";

const Home_mission = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex  flex-col gap-[1.3vw] py-[3.33vw]">
        {/* heading */}
        <div className="flex items-center  gap-[1.33vw] nova">
          <h1 className="nova text-[3.33vw] ">Our Mission</h1>
          <button className="border h-fit bg-transparent border-black px-[1.33vw] rounded-[0.7vw] py-[0.7vw] text-[1vw]">
            Read More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full  items-end gap-[10vw] h-auto flex justify-center ">
          {/* image */}
          <div className="w-[6.6vw] h-[full]"></div>

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
            <div className="w-full text-[1.87vw] inter ">
              <p className="textstart">
                {" "}
                gravida volutpat eget tortor proin. Posuere porttitor sed erat
                quisque. Donec quisque orci vestibulum <br />
                suspendisse auctor. Amet elementum facilisis imperdiet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_mission;
