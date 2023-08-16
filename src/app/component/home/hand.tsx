"use client";

import Image from "next/image";
import React, { useRef } from "react";
import client_logo from "../../../../public/home/client.webp";
import add_logo from "../../../../public/home/add_logo.png";

import { useInView } from "framer-motion";
import aeroplane_malkaine from "../../../../public/home/home_service.webp";
import mob_aeroplane_malkaine from "../../../../public/home/mob_home_service.webp";
import hand_left from "../../../../public/home/hand_left.webp";
import hand_right from "../../../../public/home/hand_right.webp";
import hand_middle from "../../../../public/home/hand_middle.webp";
import imag1 from "../../../../public/home/img1.webp";
import imag2 from "../../../../public/home/img2.webp";
import imag3 from "../../../../public/home/img3.webp";
import imag4 from "../../../../public/home/img4.webp";
import imag5 from "../../../../public/home/img5.webp";
import imag6 from "../../../../public/home/img6.webp";
import imag7 from "../../../../public/home/img7.webp";
import imag8 from "../../../../public/home/img8.webp";
import imag9 from "../../../../public/home/img9.webp";
import imag10 from "../../../../public/home/img10.webp";
import imag11 from "../../../../public/home/img11.webp";
import { useState, useEffect } from "react";
import Link from "next/link";
import bg_img from "../../../../public/home/hand_bg.webp";
import mob_bg_img from "../../../../public/home/mob_hand_bg.webp";
// import { useInView } from "react-cool-inview";

const Hands = (props: any) => {
  const ref = useRef(null);
  const outref = useRef(null);

  const [c_logo, setc_logo] = useState([
    {
      img: imag1,
      class: "home_edge",
      bg: "home_black_bg",
      top: "0px",
      left: "52.2vw",
      right: "0px",
    },
    {
      img: imag2,
      class: "home_edge",
      bg: "home_black_bg",
      top: "11.6vw",
      left: "0px",
      right: "0px",
    },
    {
      img: imag3,

      bg: "home_black_bg",
      top: "11.6vw",
      left: "11.6vw",
      right: "0px",
    },
    {
      img: imag4,

      bg: "home_black_bg",
      top: "11.6vw",
      left: "23.2vw",
      right: "0px",
    },
    {
      img: imag5,

      bg: "home_black_bg",
      top: "11.6vw",
      left: "34.8vw",
      right: "0px",
    },
    {
      img: imag6,

      bg: "home_black_bg",
      top: "11.6vw",
      left: "46.4vw",
      right: "0px",
    },
    {
      img: imag7,

      bg: "home_black_bg",
      top: "11.6vw",
      left: "58vw",
      right: "0px",
    },
    {
      img: imag10,

      bg: "home_black_bg",
      top: "23.2vw",
      left: "34.8vw",
      right: "0px",
    },
    {
      img: imag11,

      bg: "home_black_bg",
      top: "23.2vw",
      left: "46.4vw",
      right: "0px",
    },
    {
      img: imag9,
      class: "home_edge",
      bg: "home_black_bg",
      top: "23.2vw",
      left: "",
      right: "0px",
    },
    {
      img: imag10,
      bg: "home_black_bg",
      top: "23.2vw",
      left: "",
      right: "11.8vw",
    },
  ]);

  const [mobile, setmobile] = useState([
    {
      img: imag2,
      class: "home_edge",
      bg: "home_black_bg",
      top: "0px",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag3,
      bg: "home_black_bg",
      top: "28.5vw",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag4,
      bg: "home_black_bg",
      top: "57vw",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag5,
      bg: "home_black_bg",
      top: "85.5vw",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag6,
      bg: "home_black_bg",
      top: "114vw",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },

    {
      img: imag11,
      bg: "home_black_bg",
      top: "114vw",
      left: "0%",
      right: "0px",
    },
    {
      img: imag7,
      bg: "home_black_bg",
      top: "85.5vw",
      left: "0%",
      right: "0px",
    },

    {
      img: imag7,
      bg: "home_black_bg",
      top: "142.5vw",
      left: "50%",
      right: "0px",
      translate: "-50%",
    },
    {
      img: imag8,
      bg: "home_black_bg",
      top: "163vw",
      left: "0%",
      right: "0px",
    },
    {
      class: "home_edge",

      img: imag9,
      bg: "home_black_bg",
      top: "191.5vw",
      left: "0%",
      right: "0px",
    },
    {
      class: "home_edge",

      img: imag1,
      bg: "home_black_bg",
      top: "128.25vw",
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
            <p className="font-[700] ">Our Top</p>
            <p className=" px-[4.7vw] sm:px-[10vw]  italic font-light">
              Client Logos
            </p>
          </div>

          <div className="w-full h-auto  flex flex-col gap-[0.2vw] sm:gap-[2vw]">
            <div className="flex">
              <div className="w-[4vw] "></div>
              <p className="text-[#737373]  sm:px-[5vw] sm:text-[4vw] capitalize">
                Our top 12 logo designs
              </p>
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
                We design with quality and brand <br />
                identity in view
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
                  href="/"
                  key={index}
                  className={`w-[10.7vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center  h-[10.7vw] absolute rounded-[100%] py-[3.9vw] px-[3.4vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                  style={{
                    top: e.top,
                    right: e.right,
                    left: e.left,
                  }}
                >
                  <Image
                    src={e.img}
                    alt={"client logos"}
                    className="w-full h-full"
                  />
                </Link>
              );
            })}
          </div>

          <div className="w-full  hidden sm:block relative h-[220vw]">
            {/* this is the middle div */}
            <div className="h-[140vw] absolute left-[50%] top-[16.95vw] border-opacity-[30%] border-[0.25vw] border-white  border-dashed translate-x-[50%]"></div>

            {/* this is the start long div */}
            <div className="h-[100vw] absolute left-[12.5vw] top-[100vw] border-opacity-[30%] border-[0.25vw] border-white  border-dashed "></div>

            {/* this is the slashed  long div */}
            <div className="w-[30vw] absolute left-[12.5vw] top-[98vw] border-opacity-[30%] border-[0.25vw] border-white  border-dashed "></div>

            {/* this is the start long div */}
            <div className="w-[30vw] absolute left-[12.5vw] top-[126.5vw] border-opacity-[30%] border-[0.25vw] border-white  border-dashed "></div>

            {/* this is the slided first long div */}
            <div className="h-[70vw]  absolute left-[40vw] top-[128.5vw] border-opacity-[30%] rotate-[60deg] border-[0.25vw] border-white  border-dashed "></div>

            {/* this is the slided second long div */}
            <div className="h-[30vw]  absolute right-[30vw] top-[116.5vw] border-opacity-[30%] rotate-[-70deg] border-[0.25vw] border-white  border-dashed "></div>

            {mobile.map((e: any, index: any) => {
              return (
                <Link
                  href="/"
                  key={index}
                  className={`w-[25vw] hover:bg-[darkred] transisition duration-[0.5s] bg-black  ${e.class} flex justify-center items-center  h-[25vw] absolute rounded-[100%] px-[6vw] py-[8vw] border-[0.05vw] border-white border-opacity-[30%] hover:border-black`}
                  style={{
                    top: e.top,
                    right: e.right,
                    left: e.left,
                    transform: `translateX(${e.translate})`,
                  }}
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
          alt="hand_bg"
          className=" absolute top-0 left-0 w-full h-[138vw] sm:hidden"
        />
        <Image
          src={mob_bg_img}
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
              <p className="uppercase nova text-[0.8vw] sm:text-[1.5vw]">
                malkain, newyork
              </p>
            </div>
            {/* Services we offer */}
            <div className="flex flex-col gap-[0.7vw] text-[0.8vw]  w-fit  nova">
              <p className="text-[3vw] sm:text-[7.79vw]">Services we offer </p>
              <div className="flex gap-[0.33vw]">
                <div className="flex items-center  h-fit gap-[0.33vw] sm:gap-[2vw]">
                  <p className="uppercase sm:text-[1.55vw]">
                    our working system{" "}
                  </p>
                  <div className="w-[6.7vw] h-[0.07vw] sm:w-[28vw] sm:bg-opacity-[70%] bg-white"></div>
                </div>
                <p className="uppercase sm:text-[1.55vw] sm:pl-[2vw]">
                  Lets help take off your next project <br /> from end to end
                  covering from <br /> research down to deployment
                </p>
              </div>
            </div>
          </div>
          <button
            className="nova absolute bottom-[0.2vw] left-[50%] text-[1vw] font[900]  rounded-[2.6vw] px-[2vw] py-[1.07vw] bg-[#D01717] text-white translate-x-[-50%] hover:bg-[#920808] sm:text-[2.5vw] sm:px-[5vw] sm:py-[2.5vw] sm:rounded-[5vw] sm:bottom-[6vw] sm:translate-x-[0%] sm:left-[3.5vw]"
            // style={{ transform: "translateX(-50%)" }}
          >
            Work with us <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hands;
