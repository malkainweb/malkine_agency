"use client";

import Image from "next/image";
import React, { useRef } from "react";
import add_logo from "../../../../public/home/add_logo.png";
import main_img from "../../../public/new_service/main_img.webp";
import left_img1 from "../../../public/new_service/left_img1.webp";
import left_img2 from "../../../public/new_service/left_img2.webp";
import left_img3 from "../../../public/new_service/left_img3.webp";
import left_img4 from "../../../public/new_service/left_img4.webp";
import right_img1 from "../../../public/new_service/right_img1.webp";
import right_img2 from "../../../public/new_service/right_img2.webp";
import right_img3 from "../../../public/new_service/right_img3.webp";
import right_img4 from "../../../public/new_service/right_img4.webp";

import { useState, useEffect } from "react";
import Link from "next/link";

// import { useInView } from "react-cool-inview";
const left_img = [
  { img: left_img1 },
  { img: left_img2 },
  { img: left_img3 },
  { img: left_img4 },
];
const right_img = [
  { img: right_img1 },
  { img: right_img2 },
  { img: right_img3 },
  { img: right_img4 },
];
const mob_right_img = [{ img: right_img2 }, { img: right_img1 }];
const mob_left_img = [{ img: left_img1 }, { img: right_img3 }];

const New_scroll_hand = () => {
  return (
    <>
      <div
        className="w-full mt-[3vw] mb-[7vw]  sm:my-[7vw] h-[90vw] sm:h-[206vw] relative flex overflow-clip "
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
          <div className=" h-fit justify-center  gap-[2.4vw]  flex flex-wrap w-[42.5%] translate-x-[-30%]">
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
          className="flex  justify-center bottom-[-3.33vw]  w-fit items-center h-auto translate-x-[-48.8%]  sm:translate-x-[-0vw]  "
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
            className=" w-[50vw] sm:w-[100vw]  h-fit  transition delay-[2s]"
          />
        </div>{" "}
        <div
          className={`w-full bg-gradient-to-t  from-white
            h-[20%] absolute bottom-0 left-0`}
        ></div>
      </div>
    </>
  );
};

export default New_scroll_hand;
