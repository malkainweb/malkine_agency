"use client";

import Image from "next/image";
import React, { useRef } from "react";
import add_logo from "../../../../public/home/add_logo.png";

import { useInView } from "framer-motion";
import aeroplane_malkaine from "../../../../public/home/home_service.webp";
import mob_aeroplane_malkaine from "../../../../public/home/mob_home_service.webp";
import hand_middle from "../../../../public/home/hand_middle.webp";

import { useState, useEffect } from "react";
import Link from "next/link";
import bg_img from "../../../../public/home/template_bg_without_background.webp";
import mob_bg_img from "../../../../public/home/mob_hand_bg.png";

import left1 from "../../../../public/landingpage_template/architect_imgaes/left1.webp";
// import { useInView } from "react-cool-inview";

const Scrolling_hands = (props: any) => {
  const left_info = ["", "", "", ""];
  const mobile_left_info = ["", ""];
  return (
    <>
      <div
        className="w-full mt-[3vw] mb-[7vw]  sm:my-[7vw] h-[90vw] sm:h-[206vw] relative flex overflow-clip "
        style={{ alignItems: "flex-start" }}
      >
        {/* hand bg */}
        {/* <Image
          src={bg_img}
          priority
          alt="hand_bg"
          className=" absolute top-0 left-0 w-full h-[138vw] sm:hidden"
        />
        <Image
          src={mob_bg_img}
          priority
          alt="hand_bg"
          className=" absolute top-0 left-0 w-full h-[280vw] hidden sm:block"
        /> */}
        {/* this is for the desktop */}
        <div className="w-full sm:hidden  absolute top-0 flex justify-between  h-full">
          <div className=" h-fit justify-center gap-[1vw]  flex flex-wrap w-[40.5%]">
            {left_info.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={left1}
                  alt="images"
                  className="w-[47%] h-fit"
                />
              );
            })}
          </div>
          <div className=" h-fit justify-center gap-[1vw]  flex flex-wrap w-[40.5%]">
            {left_info.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={left1}
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
            {mobile_left_info.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={left1}
                  alt="images"
                  className="w-full h-fit"
                />
              );
            })}
          </div>
          <div className=" h-fit justify-center gap-[2.4vw]  flex flex-wrap w-[42.5%] translate-x-[30%]">
            {mobile_left_info.map((e: any, index: any) => {
              return (
                <Image
                  key={index}
                  src={left1}
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
            src={hand_middle}
            alt="work image"
            className=" w-[45vw] sm:w-[100vw] h-fit  transition delay-[2s]"
          />
        </div>{" "}
        <div className="w-full bg-gradient-to-t from-[#0E0E0E]  h-[20%] absolute bottom-0 left-0"></div>
      </div>
    </>
  );
};

export default Scrolling_hands;
