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
// import { useInView } from "react-cool-inview";

const Scrolling_hands = (props: any) => {
  return (
    <>
      <div
        className="w-full my-[7vw] h-[140vw] sm:h-[300vw] relative flex overflow-clip "
        style={{ alignItems: "flex-start" }}
      >
        {/* hand bg */}
        <Image
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
        />
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
