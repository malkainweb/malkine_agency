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
      <div className="w-full p_r py-[50px] flex flex-col gap-[20px] justify-center items-center bg-white">
        <h1 className="text-[50px] text-center novabold ">
          Our Client Reviews
        </h1>
        <div className="w-full h-[400px] overflow-hidden relative">
          <motion.div
            className="w-auto h-full  justify-center nova flex gap-[1vw] absolute overflow-hidden top-0 left-0"
            animate={{ x: go }}
            transition={{ duration: 2 }}
          >
            {info.map((e: any, index: any) => {
              return (
                <div
                  className="w-[22.4vw] rounded-[19px] bg-[#F6F6F6]  h-full flex flex-col px-[20px] justify-around"
                  key={index}
                >
                  <Image
                    priority
                    src={e.stars}
                    alt="stars"
                    className="w-[100px]"
                  />
                  <p className="text-[20px]">{e.des}</p>
                  <div className="w-full flex justify-end ">
                    <Image
                      priority
                      src={block_quote}
                      alt="block_quote"
                      className="h-fit w-[30px]"
                    />
                  </div>
                  <div className="w-full flex gap-[15px]">
                    <div className="w-[70px] h-[70px] rounded-[100%]">
                      <Image
                        priority
                        src={e.profile_pic}
                        alt="avatar"
                        className="h-fit w-full"
                      />
                    </div>

                    <div className="w-full">
                      <p className="text-black novabold text-[20px] font-[500] capitalize">
                        {e.name}
                      </p>
                      <p className="text-[14px] text-[#AFAFAF] text-[16px]">
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

        <div className="w-[300px]  bg-[#F6F6F6] rounded-[15px] flex h-[12px]">
          <motion.div
            className="w-full cursor-pointer rounded-[15px]"
            transition={{ duration: 2 }}
            onClick={() => {
              change(1, "0vw");
            }}
            animate={{ backgroundColor: active == 1 ? "black" : "transparent" }}
          ></motion.div>
          <motion.div
            className="w-full cursor-pointer rounded-[15px]"
            transition={{ duration: 2 }}
            onClick={() => {
              change(0, "-93.5vw");
            }}
            animate={{ backgroundColor: active == 0 ? "black" : "transparent" }}
          ></motion.div>
          <motion.div
            className="w-full cursor-pointer rounded-[15px]"
            transition={{ duration: 2 }}
            onClick={() => {
              change(2, "-187vw");
            }}
            animate={{ backgroundColor: active == 2 ? "black" : "transparent" }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Review;
