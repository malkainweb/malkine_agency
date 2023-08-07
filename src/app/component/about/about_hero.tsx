"use client";

import Image from "next/image";
import chess from "../../../../public/about/chess.webp";
import { useState } from "react";
import img1 from "../../../../public/about/hero1.webp";
import img2 from "../../../../public/about/hero2.webp";
import img3 from "../../../../public/about/hero3.webp";

const About_hero = () => {
  return (
    <>
      <div className="w-full h-[46.6vw] py-[50px] relative  bg-white">
        {/* the floating images start */}

        <Image
          placeholder="blur"
          style={{ transform: "translateX(-50%)" }}
          src={img1}
          alt="chess board"
          className="w-[7vw] absolute left-[50%] top-[10px]"
        />
        <Image
          placeholder="blur"
          //   style={{ transform: "translateX(-50%)" }}
          src={img2}
          alt="chess board"
          className="w-[14vw] absolute left-[70px] top-[150px]"
        />
        <Image
          placeholder="blur"
          //   style={{ transform: "translateX(-50%)" }}
          src={img3}
          alt="chess board"
          className="w-[14vw] absolute right-[70px] top-[200px]"
        />

        {/* the floating images end  */}
        <Image
          placeholder="blur"
          style={{ transform: "translateX(-50%)" }}
          src={chess}
          priority
          alt="chess board"
          className="w-[70vw] absolute left-[50%] bottom-[-16.6vw]"
        />
        <div className="w-full flex-col h-auto flex justify-center items-center gap-[20px]">
          <h1 className="text-[#424242] text-[80px] text-center novabold font-bold leading-[100px]">
            We <span className="text-[#FF0000]">integrate</span> and <br />{" "}
            <span className="text-[#000000]">collaborate</span>{" "}
            <span className="text-[#FF0000]">together.</span>
          </h1>

          <p className="text-center text-[20px] text-black text-opacity-[75%] nova">
            We are digital creatives embracing the freedom to produce solutions
            that connect, <br />
            communicate and inspire.
          </p>
        </div>
      </div>
    </>
  );
};

export default About_hero;
