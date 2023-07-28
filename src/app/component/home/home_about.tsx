"use client";

import React, { useState } from "react";

const Home_about = () => {
  const [arr, setarr] = useState([
    { text1: "ui/ux", text2: "design", width: "350px" },
    { text1: "brand", text2: "development", width: "200px" },
    { text1: "wordpress ", text2: "development", width: "200px" },
    { text1: "Web ", text2: "development", width: "350px" },
    { text1: "Creative ", text2: "designing", width: "350px" },
    { text1: "site", text2: "redeisgn", width: "200px" },
  ]);
  return (
    <>
      <div className="w-full  h-[700px] p_r rounded-[20px] flex justify-between gap-[15px] py-[60px]">
        <div className="w-full  home_about flex items-end">
          <div className=" flex flex-col gap-[20px] h-auto w-full">
            <h3 className="px-[20px] py-[10px] border-white border rounded-[20px] text-white w-fit">
              About Us
            </h3>
            <h1 className="text-[30px] nova capitalize text-white ">
              We Remain <br /> agile and <br /> adaptable
            </h1>
            <button className="nova  text-[16px] font[900]text-white rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white w-fit hover:bg-[#920808]">
              Learn more <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="w-full  bg-white rounded-r-[40px] flex gap-[20px] px-[20px] ">
          <div className="w-full  relative overflow-hidden">
            <div className="w-full h-auto absolute top-0 left-0  gap-[20px] flex flex-col overflow-hidden home_about_left">
              {arr.map((e: any, index: any) => {
                return (
                  <div
                    className="w-full flex items-end p-[10px] border-[2px] border-[#ABABAB] border-opacity-[30%] rounded-[40px] "
                    style={{ height: e.width }}
                  >
                    <div className="flex justify-between uppercase  text-[25px] inter font-medium w-full items-end py-[10px]">
                      <p className="inter font-medium">
                        {e.text1} <br /> {e.text2}
                      </p>
                      <p className="text-[red] font-[900]  py-[10px] px-[15px] rounded-[100%] bg-[#F3F3F3] flex justify-center items-center text-[20px] h-fit">
                        <i className="bi bi-arrow-up-right"></i>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full  relative overflow-hidden">
            <div className="w-full h-auto absolute top-0 left-0  gap-[20px] flex flex-col overflow-hidden home_about_right">
              {arr.map((e: any, index: any) => {
                return (
                  <div
                    className="w-full flex items-end p-[10px] border-[2px] border-[#ABABAB] border-opacity-[30%] rounded-[40px] "
                    style={{ height: e.width }}
                  >
                    <div className="flex justify-between uppercase  text-[25px] inter font-medium w-full items-end py-[10px]">
                      <p className="inter font-medium">
                        {e.text1} <br /> {e.text2}
                      </p>
                      <p className="text-[red] font-[900] py-[10px] px-[15px] rounded-[100%] bg-[#F3F3F3] flex justify-center items-center text-[20px] h-fit">
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
