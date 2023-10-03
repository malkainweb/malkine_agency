"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import location from "../../../../public/home/location.webp";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const Home_Team = () => {
  const [active, setactive] = useState(1);
  const width = globalThis.innerWidth / 1.5;
  const [go, setgo] = useState("0vw");
  const [indicator, setindicator] = useState(0);

  const change = (i: any, e: any) => {
    setactive(i);
    setgo(e);
  };

  // get the x value of something
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  const scroll_lever = useTransform(
    scrollX,
    // Map x from these values:
    [0, width * 3],

    // Into these values:
    [0, 66],
  );

  // use motion values to console .log
  useMotionValueEvent(scroll_lever, "change", (latest) => {
    setindicator(latest);
  });
  return (
    <>
      <div
        className={`w-full h-auto sm:h-[45vw] no-scrollbar sm:block sm:relative hidden sm:overflow-x-scroll `}
        ref={carouselRef}
        // style={{overflow: '-moz-'}}
      >
        <div
          style={{
            transform: `translateX(${go})`,
          }}
          className=" transition duration-[1.5s] w-full sm:w-[300vw] bg-white  sm:bg-black sm:absolute sm:top-0  h-auto  pl-[2.2vw] pr-[2.5vw]  py-[3.3vw] flex justify-between gap-[1.25vw] items-center  sm:gap-[4vw] "
        >
          <div className="flex w-full h-[10.3vw] sm:w-[95vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#F1F1F1] sm:bg-white  flex-col p-[1.25vw] justify-between  ">
            <div className="w-full flex justify-between font-[helvetica] ">
              <p className="text-[3.5vw] sm:text-[10vw]">18</p>
              <p className="py-[0.7vw] px-[1vw] sm:bg-[#F1F1F1] bg-white bg-opacity-[40%] rounded-[1.4vw] h-fit text-[1.1vw] sm:text-[4vw] sm:px-[4vw] sm:rounded-[7.6vw] sm:py-[2vw]">
                Team
              </p>
            </div>
            <p className="text-[1.6vw] sm:text-[6.7vw]">Total Employees</p>
          </div>

          <div className="flex w-full h-[10.3vw] sm:w-[95vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#F1F1F1] sm:bg-white  flex-col p-[1.25vw] justify-between">
            <div className="w-full flex justify-between font-[helvetica] ">
              <p className="text-[3.5vw] sm:text-[10vw]">8 </p>
              <div className="w-[6.7vw] sm:w-[24vw]  h-[4vw] sm:h-[11.25vw]">
                <Image
                  priority
                  src={location}
                  alt="location img"
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-[1.6vw] sm:text-[6.7vw]">
              Years Providing Amazing Services
            </p>
          </div>

          <div className="flex w-full h-[10.3vw] sm:w-[95vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#D01717] border2 flex-col p-[1.25vw] justify-between text-white">
            <div className="w-full flex justify-between font-[helvetica] ">
              <p className="text-[3.5vw] sm:text-[10vw]">34</p>
              <p className="py-[0.7vw] px-[1vw] bg-white  bg-opacity-[26%] rounded-[1.4vw] h-fit text-[1.3vw] sm:text-[3vw] sm:px-[3vw] sm:py-[2vw] sm:rounded-[7.6vw]">
                PROJECTS
              </p>
            </div>
            <p className="text-[1.6vw] sm:text-[6.7vw]">
              Total projects yearly
            </p>
          </div>
        </div>
      </div>

      {/* this si the desktop view */}
      {/* this si the desktop view */}
      {/* this si the desktop view */}
      {/* this si the desktop view */}

      <div className={`w-full h-auto sm:h-[45vw] sm:relative sm:hidden  `}>
        <div className=" transition duration-[1.5s] w-full sm:w-[300vw] bg-white   sm:bg-black sm:absolute sm:top-0  h-auto  p_r  py-[3.3vw] flex justify-between gap-[1.25vw] items-center  sm:gap-[4vw] ">
          <div className="flex w-full h-[10.3vw] sm:w-[95vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#F1F1F1] sm:bg-white  flex-col p-[1.25vw] justify-between  ">
            <div className="w-full flex justify-between font-[helvetica] ">
              <p className="text-[3.5vw] nova sm:text-[10vw]">18</p>
              <p className="py-[0.7vw] px-[1vw] bg-white bg-opacity-[40%] rounded-[1.4vw] h-fit text-[1.1vw] sm:text-[4vw] sm:px-[4vw] sm:rounded-[7.6vw] sm:py-[2vw]">
                Team
              </p>
            </div>
            <p className="text-[1.6vw] sm:text-[6.7vw]">Total Employees</p>
          </div>

          <div className="flex w-full h-[10.3vw] sm:w-[95vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#F1F1F1] sm:bg-white  flex-col p-[1.25vw] justify-between">
            <div className="w-full flex justify-between font-[helvetica] ">
              <p className="text-[3.5vw] nova  sm:text-[10vw]">8 </p>
              <div className="w-[6.7vw] sm:w-[24vw]  h-[4vw] sm:h-[11.25vw]">
                <Image
                  priority
                  src={location}
                  alt="location img"
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-[1.6vw] sm:text-[6.7vw]">
              Years Providing Amazing Services
            </p>
          </div>

          <div className="flex w-full h-[10.3vw] sm:w-[95vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#D01717] border2 flex-col p-[1.25vw] justify-between text-white">
            <div className="w-full flex justify-between font-[helvetica] ">
              <p className="text-[3.5vw] nova sm:text-[10vw]">34</p>
              <p className="py-[0.7vw] px-[1vw] bg-white  bg-opacity-[26%] rounded-[1.4vw] h-fit text-[1.3vw] sm:text-[3vw] sm:px-[3vw] sm:py-[2vw] sm:rounded-[7.6vw]">
                PROJECTS
              </p>
            </div>
            <p className="text-[1.6vw] sm:text-[6.7vw]">
              Total projects yearly
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  justify-center hidden sm:flex pt-[8vw] pb-[8vw]">
        <div className="  w-[80vw] h-[2.5vw] relative bg-[#222222] rounded-[4vw] flex">
          <div
            className="w-[27vw] h-[2.5vw] top-0 absolute cursor-pointer rounded-[1vw]"
            onClick={() => {
              change(1, "-1vw");
            }}
            style={{
              backgroundColor: active != 1 ? "transparent" : "white",
              left: `${indicator}%`,
            }}
          ></div>
          {/* <div
            className="w-full h-full cursor-pointer rounded-[1vw]"
            onClick={() => {
              change(0, "-100vw");
            }}
            style={{ backgroundColor: active != 0 ? "transparent" : "white" }}
          ></div>
          <div
            className="w-full h-full cursor-pointer rounded-[1vw]"
            onClick={() => {
              change(2, "-199vw");
            }}
            style={{ backgroundColor: active != 2 ? "transparent" : "white" }}
          ></div> */}
        </div>
      </div>
    </>
  );
};

export default Home_Team;
