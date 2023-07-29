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
      <div className="w-full h-[750px] py-[50px] relative  bg-white">
        {/* the floating images start */}

        <Image
          style={{ transform: "translateX(-50%)" }}
          src={img1}
          alt="chess board"
          className="w-[100px] absolute left-[50%] top-[10px]"
        />
        <Image
          //   style={{ transform: "translateX(-50%)" }}
          src={img2}
          alt="chess board"
          className="w-[200px] absolute left-[70px] top-[150px]"
        />
        <Image
          //   style={{ transform: "translateX(-50%)" }}
          src={img3}
          alt="chess board"
          className="w-[200px] absolute right-[70px] top-[200px]"
        />

        {/* the floating images end  */}
        <Image
          style={{ transform: "translateX(-50%)" }}
          src={chess}
          alt="chess board"
          className="w-[70%] absolute left-[50%] bottom-[-30%]"
        />
        <div className="w-full flex-col h-auto flex justify-center items-center gap-[20px]">
          <h1 className="text-[#424242] text-[100px] text-center nova font-bold">
            We <span className="text-[#FF0000]">integrate</span> and <br />{" "}
            <span className="text-[#000000]">collaborate</span>{" "}
            <span className="text-[#FF0000]">together.</span>
          </h1>

          <p className="text-center text-[24px] text-black text-opacity-[75%] nova">
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
