"use client ";

import React from "react";
import Logo from "../logo";
import ham from "../../../../public/black_nav_icon.svg";
import white_ham from "../../../../public/nav_icon.svg";
import Link from "next/link";
import Image from "next/image";
import Logo_black from "../logo_black";

const Showcase_header = (props: any) => {
  const { setleft, setright, setopacity, white, nav_menu, nav_ham } = props;
  return (
    <>
      <nav className="w-full fixed sm:h-[25vw]  z-[99]   h-[7vw] flex  p_r  items-center justify-between bg-transparent">
        <Link href="/" className="  ">
          <Logo />
        </Link>

        {/* menu icons */}
        <div
          className="w-[3.8vw] p-[1vw] sm:w-[9vw] sm:h-[9vw] sm:p-[6px] flex justify-center items-center h-[3.8vw]  rounded-[100%] bg-[#FFFFFF] bg-opacity-[17%]   cursor-pointer hover:bg-[#c7c5c5] backdrop-blur-[25px]"
          onClick={() => {
            setleft("0");
            setright("0");
            setopacity(1);
          }}
        >
          <Image
            priority
            src={white_ham}
            alt="hamburger"
            className="w-full h-auto"
          />
        </div>
      </nav>
    </>
  );
};

export default Showcase_header;
