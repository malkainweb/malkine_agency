"use client";

import Image from "next/image";
import React, { useRef } from "react";
import add_logo from "../../../../public/home/add_logo.png";

import { useInView } from "framer-motion";
import aeroplane_malkaine from "../../../../public/home/home_service.webp";
import mob_aeroplane_malkaine from "../../../../public/home/mob_home_service.webp";
import hand_middle from "../../../../public/home/hand_middle.webp";
import imag1 from "../../../../public/home/1.png";
import imag2 from "../../../../public/home/2.webp";
import imag3 from "../../../../public/home/3.webp";
import imag4 from "../../../../public/home/4.webp";
import imag5 from "../../../../public/home/5.webp";
import imag6 from "../../../../public/home/6.webp";
import imag7 from "../../../../public/home/7.webp";
import imag8 from "../../../../public/home/8.webp";
import imag9 from "../../../../public/home/9.webp";
import imag10 from "../../../../public/home/10.webp";
import imag11 from "../../../../public/home/11.webp";
import { useState, useEffect } from "react";
import Link from "next/link";
import bg_img from "../../../../public/home/hand_bg.webp";
import mob_bg_img from "../../../../public/home/mob_hand_bg.webp";
// import { useInView } from "react-cool-inview";

const Hands = (props: any) => {
  const [active, setactive] = useState(2);
  const [go, setgo] = useState("0vw");

  const ref = useRef(null);
  const outref = useRef(null);

  const [c_logo, setc_logo] = useState([
    {
      img: imag1,
      link: "https://spoiledchild.com/",
      class: "home_edge",
      bg: "home_black_bg",
      top: "0px",
      left: "52.2vw",
      right: "0px",
      h: "",
    },
    {
      img: imag2,
      class: "home_edge",
      link: "https://harc.casa",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "0px",
      right: "0px",
    },
    {
      img: imag3,
      link: "https://www.aprguarnizioni.com",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "11.6vw",
      right: "0px",
    },
    {
      img: imag4,
      link: "https://www.reggie.com",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "23.2vw",
      right: "0px",
    },
    {
      img: imag5,
      link: "https://www.withcharacter.com",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "34.8vw",
      right: "0px",
    },
    {
      img: imag6,
      link: "http://getunity.com",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "46.4vw",
      right: "0px",
    },
    {
      img: imag7,
      link: "https://www.atella.ca",

      bg: "home_black_bg",
      top: "11.6vw",
      left: "58vw",
      right: "0px",
    },
    {
      img: imag10,
      link: "https://www.qdepartment.com",

      bg: "home_black_bg",
      top: "23.2vw",
      left: "34.8vw",
      right: "0px",
    },
    {
      img: imag11,
      link: "https://www.houseofadeles.com",

      bg: "home_black_bg",
      top: "23.2vw",
      left: "46.4vw",
      right: "0px",
    },
    {
      img: imag8,
      link: "https://www.climbonsight.ca",
      class: "home_edge",
      bg: "home_black_bg",
      top: "23.2vw",
      left: "",
      right: "0px",
    },
    {
      img: imag9,
      link: "https://www.modamuvillage.com",

      bg: "home_black_bg",
      top: "23.2vw",
      left: "",
      right: "11.8vw",
    },
  ]);

  const [mobile2, setmobile2] = useState([
    {
      img: imag6,
      link: "http://getunity.com",

      bg: "home_black_bg",
      top: "0px",
      left: "0",
      right: "0px",
    },
    {
      img: imag1,
      bg: "home_black_bg",
      link: "https://spoiledchild.com/",

      class: "home_edge",
      top: "0px",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag7,
      link: "https://www.atella.ca",

      bg: "home_black_bg",
      top: "0px",
      left: "",
      right: "0px",
    },
    {
      img: imag9,
      link: "https://www.modamuvillage.com",

      bg: "home_black_bg",
      top: "38vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      img: imag8,
      class: "home_edge",
      link: "https://www.climbonsight.ca",

      bg: "home_black_bg",
      top: "38vw",
      left: "0px",
      right: "",
    },
  ]);
  const [mobile1, setmobile1] = useState([
    {
      img: imag2,
      class: "home_edge",
      link: "https://harc.casa",

      bg: "home_black_bg",
      top: "0px",
      left: "0",
      right: "0px",
    },
    {
      img: imag3,
      bg: "home_black_bg",
      link: "https://www.aprguarnizioni.com",

      top: "0px",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag4,
      bg: "home_black_bg",
      link: "https://www.reggie.com",

      top: "0px",
      left: "",
      right: "0px",
    },
    {
      img: imag10,
      bg: "home_black_bg",
      link: "https://www.qdepartment.com",

      top: "38vw",
      left: "0px",
      right: "",
    },
    {
      img: imag5,
      bg: "home_black_bg",
      top: "38vw",
      link: "https://www.withcharacter.com",

      left: "50%",
      right: "0px",
      translate: "-50%",
    },

    {
      img: imag11,
      bg: "home_black_bg",
      link: "https://www.houseofadeles.com",

      top: "38vw",
      left: "",
      right: "0px",
    },
  ]);

  //
  //

  return (
    <>
      <div
        className="w-full  p_r  pt-[6vw] pb-[8vw] sm:py-[15vw] h-auto"
        ref={ref}
      >
        <div className="w-full h-[55vw] sm:h-auto  relative flex flex-col gap-[4vw] sm:gap-[12vw]">
          <div className="flex z-[2] flex-col text-white nova text-[2.7vw] sm:text-[6vw]">
            <p className="font-[700] ">WHO WE</p>
            <p className=" px-[4.7vw] sm:px-[10vw]  italic font-light">
              WORK WITH
            </p>
          </div>

          <div className="w-full h-auto  flex flex-col gap-[0.2vw] sm:gap-[2vw]">
            <div className="flex">
              <div className="w-[4vw] "></div>
              {/* <p className="text-[#737373]  sm:px-[5vw] sm:text-[4vw] capitalize">
                Our top 12 logo designs
              </p> */}
            </div>
            <div className="flex text-white sm:gap-[5vw] sm:pb-[10vw]">
              <div className="w-[4vw] h-full  text-[red] font-[900] text-[2.7vw] justify-center flex">
                <Image
                  priority
                  src={add_logo}
                  alt="start logo"
                  className=" w-[1.3vw] sm:w-[12vw] h-fit "
                />
              </div>
              <p className="nova text-[1vw] font-medium sm:text-[4vw]">
                {"We're"} honored to be trusted by people <br /> with high
                standards.
              </p>
            </div>
          </div>
          <div className="sm:hidden w-full h-[86.9vw] relative">
            {/* this is the middle div */}
            <div
              className="w-[50vw] absolute left-[10vw] top-[16.95vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>

            {/* this is for the long and short dive that connect below */}
            <div
              className="w-[50vw] absolute left-[40vw] top-[28.55vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>
            {/* this is the first line out of the tow that exist on the divs */}
            <div
              className="h-[10vw] absolute left-[40.15vw] top-[16.95vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>
            {/* this is the second div */}
            <div
              className="h-[10vw] absolute left-[51.75vw] top-[16.95vw]"
              style={{ border: "1px solid grey", borderStyle: "dashed" }}
            ></div>
            {/* this is the first bent line  div */}
            <div
              className="h-[10vw] absolute left-[56vw] top-[4.8vw]"
              style={{
                border: "1px solid grey",
                borderStyle: "dashed",
                rotate: "30deg",
              }}
            ></div>
            {/* this is the second bent line  div */}
            <div
              className="h-[30vw] absolute left-[69vw] top-[5.8vw]"
              style={{
                border: "1px solid grey",
                borderStyle: "dashed",
                rotate: "-40deg",
              }}
            ></div>
            {/* tomorrow i would work on this  */}
            {c_logo.map((e: any, index: any) => {
              return (
                <Link
                  href={e.link}
                  target="_blank"
                  key={index}
                  className={`w-[10.7vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center  h-[10.7vw] absolute rounded-[100%] py-[1vw] px-[1.4vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                  style={{
                    top: e.top,
                    right: e.right,
                    left: e.left,
                  }}
                >
                  <Image
                    src={e.img}
                    alt={"client logos"}
                    className="w-fit h-full "
                  />
                </Link>
              );
            })}
          </div>

          <div className="w-full  hidden sm:block relative h-[100vw] ">
            <div className="w-full h-[13vw] flex justify-center absolute bottom-[6vw] left-0">
              <div className="w-[32vw]  flex justify-center gap-[4vw]">
                <div
                  className=" rounded-[100%] transition duration-[1s] flex cursor-pointer  justify-center items-center  w-[13vw] h-full"
                  style={{
                    border: `0.25vw solid ${active == 1 ? "white" : "#4C4C4C"}`,
                    color: active == 1 ? "white" : "#4C4C4C",
                  }}
                  onClick={() => {
                    setactive(2);
                    if (active == 1) {
                      setgo("0vw");
                    }
                  }}
                >
                  <i className="bi bi-arrow-left text-[5vw]"></i>
                </div>
                <div
                  className=" rounded-[100%] transition duration-[1s] flex  cursor-pointer justify-center items-center  w-[13vw] h-full"
                  style={{
                    border: `0.25vw solid ${active == 2 ? "white" : "#4C4C4C"}`,
                    color: active == 2 ? "white" : "#4C4C4C",
                  }}
                  onClick={() => {
                    setactive(1);
                    if (active == 2) {
                      setgo("-107.5vw");
                    }
                  }}
                >
                  <i className="bi bi-arrow-right text-[5vw]"></i>
                </div>
              </div>
            </div>

            <div
              className="relative w-full h-auto transisition duration-[1.5s]  "
              style={{
                transform: `translateX(${go})`,
              }}
            >
              <div className="w-[200vw] gap-[15vw] flex absolute top-0 left-0 ">
                <div className="w-full h-[70vw] flex justify-start gap-[5.1vw] flex-wrap ">
                  {mobile1.map((e: any, index: any) => {
                    return (
                      <Link
                        href={e.link}
                        target="_blank"
                        key={index}
                        className={`w-[27vw] h-[27vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center    rounded-[100%] px-[3vw] py-[3vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                      >
                        <Image
                          src={e.img}
                          alt={"client logos"}
                          className="w-auto h-full"
                        />
                      </Link>
                    );
                  })}
                </div>
                <div className="w-full h-[70vw] flex justify-start gap-[5.1vw] items-start flex-wrap ">
                  {mobile2.map((e: any, index: any) => {
                    return (
                      <Link
                        href={e.link}
                        target="_blank"
                        key={index}
                        className={`w-[27vw] h-[27vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center    rounded-[100%] px-[3vw] py-[3vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                      >
                        <Image
                          src={e.img}
                          alt={"client logos"}
                          className="w-auto h-full"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* logo is foound up  */}

      {/*  */}

      {/*  */}

      {/*  */}
      <div
        className="w-full h-[140vw] sm:h-[290vw] relative flex overflow-clip "
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
        </div>
      </div>

      {/* the third section */}
      <div className="py-[3.33vw] w-full h-auto p_r bg-white" ref={outref}>
        <div className="w-full flex items-end sm:pb-[15vw] pb-[6.7vw]  h-[53.3vw] sm:h-[104vw] home_service  relative">
          <Image
            priority
            src={aeroplane_malkaine}
            alt="aeroplan malkaine"
            className="w-full absolute sm:hidden top-0 left-0 h-full "
          />
          <Image
            priority
            src={mob_aeroplane_malkaine}
            alt="aeroplan malkaine"
            className="w-full absolute sm:block  hidden top-0 left-0 h-full "
          />

          <div className=" items-center z-[10] text-white w-full flex justify-between p_r  sm:flex-col sm:items-start sm:gap-[26.25vw] ">
            <div className="flex flex-col gap-[0.33vw] w-fit">
              <p className="text-[3vw] inter font-medium sm:text-[7.5vw]">
                2023
              </p>
              <p className="uppercase nova text-[2vw] sm:text-[3vw]">
                MALKAIN - NJ
              </p>
            </div>
            {/* Services we offer */}
            <div className="flex flex-col gap-[0.7vw] text-[0.8vw]  w-fit  nova">
              <p className="text-[3vw] sm:text-[7.79vw]">Services we offer </p>
              <div className="flex gap-[0.33vw]">
                <div className="flex items-center  h-fit gap-[0.33vw] sm:gap-[2vw]">
                  <p className="uppercase sm:text-[2.3vw] font-[500] sm:hidden">
                    We speak like we design: <br /> thoughtful. And to the
                    point.
                  </p>
                  <p className="uppercase sm:text-[2.3vw] font-[500] hidden sm:block">
                    We speak like we design: thoughtful. And to the point.
                  </p>
                  <div className="w-[6.7vw] h-[0.07vw] sm:w-[28vw] sm:bg-opacity-[70%] bg-white"></div>
                </div>
                <p className="uppercase sm:text-[2.3vw] font-[500] sm:pl-[2vw] sm:hidden">
                  A company needs to tell a good <br />
                  story to create a powerful narrative <br /> about its
                  business, increase product <br />
                  demand, and drive engagement.
                </p>
                <p className="uppercase sm:text-[2.3vw] font-[500] sm:pl-[2vw] hidden sm:block">
                  A company needs to tell a good story to create a powerful
                  narrative about its business, increase product demand, and
                  drive engagement.
                </p>
              </div>
            </div>
          </div>
          <Link
            href={"contact"}
            className="nova absolute bottom-[1.8vw] left-[50%] text-[1vw] font[900] sm:hidden  rounded-[2.6vw] px-[2vw] py-[1.07vw] bg-[#D01717] text-white translate-x-[-50%] hover:bg-[#920808] sm:text-[2.5vw] sm:px-[5vw] sm:py-[2.5vw] sm:rounded-[5vw] sm:bottom-[6vw] sm:translate-x-[0%] sm:left-[3.5vw]"
            // style={{ transform: "translateX(-50%)" }}
          >
            Work with us <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hands;
