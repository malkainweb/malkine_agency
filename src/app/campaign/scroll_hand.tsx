"use client";

import Image from "next/image";
import React, { useRef } from "react";
import add_logo from "../../../../public/home/add_logo.png";
import main_img from "../../../public/campaign/scrolling_hand/handImage.webp";
import left_img1 from "../../../public/campaign/scrolling_hand/left_img1.webp";
import left_img2 from "../../../public/campaign/WeCreateWebsiteThatConvert/left_img1.webp";
import left_img3 from "../../../public/campaign/scrolling_hand/left_img3.webp";
import left_img4 from "../../../public/campaign/WeCreateWebsiteThatConvert/LetsGetYourStarted.webp";
import right_img1 from "../../../public/campaign/WeCreateWebsiteThatConvert/CraftingDigitalWellness.webp";
import right_img2 from "../../../public/campaign/scrolling_hand/right_img2.webp";
import right_img3 from "../../../public/campaign/scrolling_hand/right_img3.webp";
import right_img4 from "../../../public/campaign/WeCreateWebsiteThatConvert/right_img1.webp";

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

  { img: right_img3 },
  { img: right_img4 },
  { img: right_img2 },
  // { img: right_img4, video: true, video_link: "/showcase/q.mp4" },
];
const mob_right_img = [
  { img: right_img1 },
  { img: right_img4 },
  // { img: right_img4, video: true, video_link: "/showcase/q.mp4" },
];
const mob_left_img = [{ img: left_img2 }, { img: left_img4 }];

const Campaign_New_scroll_hand = ({ goggle }: any) => {
  return (
    <>
      <div
        className="w-full mt-[3vw] mb-[7vw]  sm:my-[7vw] h-[90vw] sm:h-[200vw] relative flex overflow-clip "
        style={{ alignItems: "flex-start" }}
      >
        {/* this is for the desktop */}
        <div className="w-full sm:hidden  absolute top-0 flex justify-between  h-full">
          <div className=" h-fit justify-center gap-[0.7vw]  flex flex-wrap w-[40.5%]">
            {left_img.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="w-[47%] overflow-hidden relative rounded-[2vw] "
                >
                  <Image
                    src={e.img}
                    // width={}
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className=" h-fit justify-center gap-[0.7vw]  flex flex-wrap w-[40.5%]">
            {right_img.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="w-[47%] overflow-hidden relative rounded-[2vw] "
                >
                  <Image
                    src={e.img}
                    // width={}
                    alt="images"
                    className="w-full h-full object-cover"
                  />
                  {e.video ? (
                    <div className="w-full absolute top-[50%]   translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                      <video
                        className=" "
                        // ref={videoRefs[index]}
                        loop={true}
                        muted={true}
                        style={{
                          transform: "scale(8)",
                        }}
                        playsInline={true}
                        autoPlay={true}
                        preload="auto"
                        controls={false}
                        // onPlay={() => setCurrentVideoIndex(index)}
                      >
                        {" "}
                        <source src={e.video_link} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>{" "}
        </div>
        {/* this is for the mobile screen */}
        <div className="w-full hidden  absolute top-0 sm:flex justify-between  h-full">
          <div className=" h-fit justify-center  gap-[2.4vw]  flex flex-wrap w-[42.5%] translate-x-[-30%]">
            {mob_left_img.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="w-full rounded-[5vw] overflow-hidden"
                >
                  <Image src={e.img} alt="images" className="w-full h-fit" />
                </div>
              );
            })}
          </div>
          <div className=" h-fit justify-center gap-[2.4vw]  flex flex-wrap w-[42.5%] translate-x-[30%]">
            {mob_right_img.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="w-full relative overflow-hidden rounded-[5vw]"
                >
                  <Image src={e.img} alt="images" className="w-full h-fit" />
                  {e.video ? (
                    <div className="w-full absolute top-[50%]   translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                      <video
                        className=" "
                        // ref={videoRefs[index]}
                        loop={true}
                        muted={true}
                        style={{
                          transform: "scale(8)",
                        }}
                        playsInline={true}
                        autoPlay={true}
                        preload="auto"
                        controls={false}
                        // onPlay={() => setCurrentVideoIndex(index)}
                      >
                        {" "}
                        <source src={e.video_link} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : null}
                </div>
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
            className=" w-[49vw] sm:w-[100vw]  h-fit  transition delay-[2s]"
          />
        </div>{" "}
        <div
          className={`w-full bg-gradient-to-t ${
            goggle ? "from-black sm:from-[white]" : ""
          } 
            h-[20%] absolute bottom-0 left-0`}
        ></div>
      </div>
    </>
  );
};

export default Campaign_New_scroll_hand;
