"use client";

import React, { useState } from "react";
import agile from "../../../../public/home/about.webp";
import Image from "next/image";

const Home_about = () => {
  const [arr, setarr] = useState([
    { text1: "ui/ux", text2: "design", width: "17VW" },
    { text1: "brand", text2: "development", width: "17vw" },
    { text1: "wordpress ", text2: "development", width: "17vw" },
    { text1: "Web ", text2: "development", width: "17VW" },
    { text1: "Creative ", text2: "designing", width: "17VW" },
    { text1: "site", text2: "redeisgn", width: "17vw" },
  ]);
  return (
    <>
      <div className="w-full  h-[46.6vw] p_r rounded-[1.3vw]  flex justify-between gap-[1vw] py-[4vw]">
        <div className="w-full  home_abou relative  flex items-end overflow-clip">
          {/* the background image  */}

          <div className="w-full h-full absolute top-[-6.7vw] left-0 ">
            <Image
              priority
              src={agile}
              alt="agile image"
              className="w-full h-[120%]"
            />
          </div>
          <div className=" flex flex-col z-[20] gap-[1.3vw] h-auto w-full">
            <h3 className="px-[1.3vw] py-[0.7vw] border-white border rounded-[1.3vw] text-white w-fit text-[1vw]">
              About Us
            </h3>
            <h1 className="text-[2vw] nova capitalize text-white ">
              We Remain <br /> agile and <br /> adaptable
            </h1>
            <button className="nova  text-[1.07vw] font[900] rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] text-white w-fit hover:bg-[#920808]">
              Learn more <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="w-full  bg-white rounded-r-[2.7vw] flex gap-[1.3vw] px-[1.3vw] ">
          <div className="w-full  relative overflow-hidden">
            <div className="w-full h-auto absolute top-0 left-0  gap-[1.3vw] flex flex-col overflow-hidden home_about_left">
              {arr.map((e: any, index: any) => {
                return (
                  <div
                    className="w-full flex items-end p-[0.7vw] border-[0.13vw] border-[#ABABAB] border-opacity-[30%] rounded-[2.7vw] "
                    style={{ height: e.width }}
                    key={index}
                  >
                    <div className="flex justify-between uppercase  text-[1.7vw] inter font-medium w-full items-end py-[0.7vw]">
                      <p className="inter font-medium">
                        {e.text1} <br /> {e.text2}
                      </p>
                      <p className="text-[red] font-[900]  py-[0.7vw] px-[1vw] rounded-[100%] bg-[#F3F3F3] flex justify-center items-center text-[1.3vw] h-fit">
                        <i className="bi bi-arrow-up-right"></i>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full  relative overflow-hidden">
            <div className="w-full h-auto absolute top-0 left-0  gap-[1.3vw] flex flex-col overflow-hidden home_about_right">
              {arr.map((e: any, index: any) => {
                return (
                  <div
                    className="w-full flex items-end p-[0.7vw] border-[0.13vw] border-[#ABABAB] border-opacity-[30%] rounded-[2.7vw] "
                    style={{ height: e.width }}
                    key={index}
                  >
                    <div className="flex justify-between uppercase  text-[1.7vw] inter font-medium w-full items-end py-[0.7vw]">
                      <p className="inter font-medium">
                        {e.text1} <br /> {e.text2}
                      </p>
                      <p className="text-[red] font-[900] py-[0.7vw] px-[1vw] rounded-[100%] bg-[#F3F3F3] flex justify-center items-center text-[1.3vw] h-fit">
                        <i className="bi bi-arrow-up-right"></i>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about;
