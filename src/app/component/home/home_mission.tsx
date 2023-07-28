"use client";

import React from "react";

const Home_mission = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex flex-col gap-[20px] py-[50px]">
        {/* heading */}
        <div className="flex items-center gap-[20px] nova">
          <h1 className="nova text-[50px] ">Our Mission</h1>
          <button className="border h-fit bg-transparent border-black px-[20px] rounded-[10px] py-[10px] text-[15px]">
            Read More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full  items-end gap-[150px] h-auto flex justify-start ">
          {/* image */}
          <div className="w-[100px] h-[200px]"></div>

          {/* now the text */}
          <div className="w-fit flex-col flex gap-[30px] ">
            <div className="text-[28px] inter">
              <p className="pl-[200px]">
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
            <div className="w-full text-[28px] inter ">
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
