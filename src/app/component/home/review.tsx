"use client";

import Image from "next/image";
import React, { useState } from "react";
import stars from "../../../../public/home/starts.png";
import block_quote from "../../../../public/home/block_qote.png";
import avatar from "../../../../public/home/review_avatar.png";
import { motion } from "framer-motion";

const Review = () => {
  const [active, setactive] = useState(0);
  const [go, setgo] = useState("-93.5vw");
  const [info, setinfo] = useState([
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john jones",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john jay",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john jones",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john kalu",
      position: "manager Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
    {
      des: "Lorem ipsum dolor sit amet consectetur. Morbi molestie accumsan maecenas placerat ipsum fermentum etiam sed praesent. Sed ante et elementum lacus v",
      name: "john developer",
      position: "C E O Modamu",
      profile_pic: avatar,
      stars: stars,
    },
  ]);

  const change = (i: any, e: any) => {
    setactive(i);
    setgo(e);
  };
  return (
    <>
      <div className="w-full sm:px-0 px-[3vw] sm:py-[5vw] sm:pb-[15vw] py-[3.3vw] flex flex-col gap-[1.33vw] justify-center items-center bg-white sm:items-start">
        <h1 className="text-[3.3vw] sm:pl-[3.75vw] text-center novabold sm:text-[6vw] sm:text-start ">
          Our Client Reviews
        </h1>

        {/* this is for the destop and the below is for the mobile */}
        <div className="w-full h-[26.7vw] sm:h-[73.75vw] overflow-hidden sm:overflow-x-scroll relative sm:hidden">
          <motion.div
            className="w-auto h-full  justify-center nova flex gap-[1vw] absolute overflow-hidden top-0 left-0 sm:gap-[4vw]"
            animate={{ x: go }}
            transition={{ duration: 2 }}
          >
            {info.map((e: any, index: any) => {
              return (
                <div
                  className="w-[22.4vw] sm:w-[57.75vw] rounded-[1.3vw] bg-[#F6F6F6]  h-full flex flex-col px-[1.33vw] justify-around"
                  key={index}
                >
                  <Image
                    priority
                    src={e.stars}
                    alt="stars"
                    className="w-[6.7vw] sm:w-[20vw]"
                  />
                  <p className="text-[1.33vw] sm:text-[3.82vw]">{e.des}</p>
                  <div className="w-full flex justify-end ">
                    <Image
                      priority
                      src={block_quote}
                      alt="block_quote"
                      className="h-fit w-[2vw] sm:w-[5.7vw]"
                    />
                  </div>
                  <div className="w-full flex gap-[1vw] sm:gap-[3vw]">
                    <div className="w-[4.7vw] h-[4.7vw] sm:w-[15.12vw] sm:h-auto rounded-[100%]">
                      <Image
                        priority
                        src={e.profile_pic}
                        alt="avatar"
                        className="h-fit w-full"
                      />
                    </div>

                    <div className="w-full">
                      <p className="text-black novabold text-[1.33vw] font-[500] capitalize sm:text-[3.47vw]">
                        {e.name}
                      </p>
                      <p className="text-[0.93vw] text-[#AFAFAF] sm:text-[2.8vw] ">
                        {e.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div> */}
          </motion.div>
        </div>

        <div className="w-full h-[26.7vw] hidden sm:block sm:h-[73.75vw] overflow-hidden sm:overflow-x-scroll relative">
          <motion.div className="w-auto h-full  justify-center nova flex gap-[1vw] absolute overflow-hidden top-0 left-0 ">
            {info.map((e: any, index: any) => {
              return (
                <div
                  className="w-[22.4vw] sm:w-[57.75vw] rounded-[3.3vw] bg-[#F6F6F6]  h-full flex flex-col px-[2.33vw] justify-around sm:ml-[4vw]"
                  key={index}
                >
                  <Image
                    priority
                    src={e.stars}
                    alt="stars"
                    className="w-[6.7vw] sm:w-[20vw]"
                  />
                  <p className="text-[1.33vw] sm:text-[3.82vw]">{e.des}</p>
                  <div className="w-full flex justify-end ">
                    <Image
                      priority
                      src={block_quote}
                      alt="block_quote"
                      className="h-fit w-[2vw] sm:w-[5.7vw]"
                    />
                  </div>
                  <div className="w-full flex gap-[1vw] sm:gap-[3vw]">
                    <div className="w-[4.7vw] h-[4.7vw] sm:w-[15.12vw] sm:h-auto rounded-[100%]">
                      <Image
                        priority
                        src={e.profile_pic}
                        alt="avatar"
                        className="h-fit w-full"
                      />
                    </div>

                    <div className="w-full">
                      <p className="text-black novabold text-[1.33vw] font-[500] capitalize sm:text-[3.47vw]">
                        {e.name}
                      </p>
                      <p className="text-[0.93vw] text-[#AFAFAF] sm:text-[2.8vw] ">
                        {e.position}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div>
            <div className="w-[22.4vw] border2 h-full"></div> */}
          </motion.div>
        </div>
        <div className="w-[20vw] sm:hidden bg-[#F6F6F6] rounded-[1vw] flex h-[0.8vw]">
          <motion.div
            className="w-full cursor-pointer rounded-[1vw]"
            transition={{ duration: 2 }}
            onClick={() => {
              change(1, "0vw");
            }}
            animate={{ backgroundColor: active == 1 ? "black" : "transparent" }}
          ></motion.div>
          <motion.div
            className="w-full cursor-pointer rounded-[1vw]"
            transition={{ duration: 2 }}
            onClick={() => {
              change(0, "-93.5vw");
            }}
            animate={{ backgroundColor: active == 0 ? "black" : "transparent" }}
          ></motion.div>
          <motion.div
            className="w-full cursor-pointer rounded-[1vw]"
            transition={{ duration: 2 }}
            onClick={() => {
              change(2, "-187vw");
            }}
            animate={{ backgroundColor: active == 2 ? "black" : "transparent" }}
          ></motion.div>
        </div>
      </div>
      <div className="hidden sm:block bg-[#080808] h-[10vw] w-full"></div>
    </>
  );
};

export default Review;
