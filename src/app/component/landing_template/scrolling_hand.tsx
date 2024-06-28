"use client";

import Image from "next/image";
import React, { useRef } from "react";
import add_logo from "../../../../public/home/add_logo.png";

import { useState, useEffect } from "react";
import Link from "next/link";

// import { useInView } from "react-cool-inview";

const Scrolling_hands = ({
  left_img,
  right_img,
  mob_left_img,
  mob_right_img,
  main_img,
  bg_gradient_color,
}: any) => {
  return (
    <>
      <div
        className="w-full mt-[3vw] mb-[7vw]  sm:my-[7vw] h-[91vw] sm:h-[206vw] relative flex overflow-clip "
        style={{ alignItems: "flex-start" }}
      >
        {/* this is for the desktop */}
        <div className="w-full sm:hidden  absolute top-0 flex justify-between  h-full">
          <div className=" h-fit justify-center gap-[0.7vw]  flex flex-wrap w-[40.5%]">
            {left_img.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={e.img}
                  // width={}
                  alt="images"
                  className="w-[47%] h-fit"
                />
              );
            })}
          </div>
          <div className=" h-fit justify-center gap-[0.7vw]  flex flex-wrap w-[40.5%]">
            {right_img.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={e.img}
                  alt="images"
                  className="w-[47%] h-fit"
                />
              );
            })}
          </div>{" "}
        </div>
        {/* this is for the mobile screen */}
        <div className="w-full hidden  absolute top-0 sm:flex justify-between  h-full">
          <div className=" h-fit justify-center gap-[2.4vw]  flex flex-wrap w-[42.5%] translate-x-[-30%]">
            {mob_left_img.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={e.img}
                  alt="images"
                  className="w-full h-fit"
                />
              );
            })}
          </div>
          <div className=" h-fit justify-center gap-[2.4vw]  flex flex-wrap w-[42.5%] translate-x-[30%]">
            {mob_right_img.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={e.img}
                  alt="images"
                  className="w-full h-fit"
                />
              );
            })}
          </div>
        </div>
        <div
          className="flex  justify-center bottom-[-3.33vw]  w-fit items-center h-auto translate-x-[-50%]  sm:translate-x-[-0vw]  "
          style={{
            position: "sticky",
            left: "50%",
            alignSelf: "flex-end",
          }}
        >
          <Image
            priority
            src={main_img}
            alt="work image"
            className=" w-[45vw] sm:w-[100vw] h-fit  transition delay-[2s]"
          />
        </div>{" "}
        <div
          className={`w-full bg-gradient-to-t ${
            bg_gradient_color == "white" ? "from-white" : "from-[#0E0E0E] "
          }  h-[20%] absolute bottom-0 left-0`}
        ></div>
      </div>
    </>
  );
};

export default Scrolling_hands;
