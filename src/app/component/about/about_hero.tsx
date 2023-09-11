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
      <div className="w-full h-[46.6vw] sm:h-[62vw] py-[3.3vw] relative  bg-white">
        {/* the floating images start */}

        <Image
          priority
          style={{ transform: "translateX(-50%)" }}
          src={img1}
          alt="chess board"
          className="w-[7vw] absolute left-[50%] top-[0.7vw] sm:top-[-8vw] sm:w-[12vw]"
        />
        <Image
          priority
          //   style={{ transform: "translateX(-50%)" }}
          src={img2}
          alt="chess board"
          className="w-[14vw] absolute left-[4.67vw] top-[10vw] sm:top-[-5vw] sm:w-[15vw] sm:left-[4vw]"
        />
        <Image
          priority
          //   style={{ transform: "translateX(-50%)" }}
          src={img3}
          alt="chess board"
          className="w-[14vw] absolute right-[4.67vw] top-[13.3vw] sm:top-[20vw] sm:w-[16vw] sm:right-[3vw]"
        />

        {/* the floating images end  */}
        <Image
          priority
          style={{ transform: "translateX(-50%)" }}
          src={chess}
          placeholder="blur"
          alt="chess board"
          className="w-[70vw] absolute left-[50%] bottom-[-16.6vw] sm:w-[95vw] sm:bottom-[-30vw]"
        />
        <div className="w-full flex-col h-auto flex justify-center items-center gap-[1.33vw] sm:gap-[3vw] ">
          <h1 className="text-[#424242] text-[5.33vw] sm:text-[8vw] text-center novabold font-bold leading-[6.7vw] sm:leading-[9.6vw]">
            We <span className="text-[#FF0000]">integrate</span> and <br />{" "}
            <span className="text-[#000000]">collaborate</span>{" "}
            <span className="text-[#FF0000]">together.</span>
          </h1>

          <p className="text-center text-[1.33vw] sm:hidden text-black text-opacity-[75%] nova">
            With an unwavering strive for the ultimate user experience, we
            design intuitively , <br />
            develop smart and test voluminously.
          </p>

          {/* this is for the mobile screen */}
          <p className=" hidden sm:block text-center   sm:text-[3.5vw] text-black text-opacity-[75%] nova">
            With an unwavering strive for the ultimate <br />
            user experience, we design intuitively , <br /> develop smart and
            test voluminously.
          </p>
        </div>
      </div>
    </>
  );
};

export default About_hero;
