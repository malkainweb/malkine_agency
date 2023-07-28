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
        <div className="w-full border2 h-auto flex justify-between">
          {/* image */}
          <div className="w-[200px] h-[300px] border2"></div>

          {/* now the text */}
          <div className="w-fit flex-col gap-[20px] border2">
            <p className="   nova">
              {" "}
            <span className="w-[200px] border2 h-[1px] inline-flex"></span>
              <span>Malkain Designs </span>{" "}
              
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                tempore nemo, fugit ab reprehenderit accusantium hic, blanditiis
                optio ducimus praesentium, beatae neque di gnissimos. Modi
                corporis quo labore officia officiis. Exce pturi asperiores
                molestias quo doloribus aliquid. Ut, exer citationem blanditiis?
                Mollitia, neque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about_us;
