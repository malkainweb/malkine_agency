"use client ";

import React, { useState } from "react";
import Logo from "../logo";
import white_ham from "../../../../public/nav_icon.svg";
import ham from "../../../../public/black_nav_icon.svg";
import Link from "next/link";
import Image from "next/image";
import Logo_black from "../logo_black";

const Header_black = (props: any) => {
  const { setleft, setright, setopacity, white } = props;

  return (
    <>
      <nav className="w-full sm:h-[25vw]  h-[10vw] fixed z-[99] flex  p_r  items-center justify-between bg-transparent">
        <Link href="/">{white == 1 ? <Logo_black /> : <Logo />}</Link>

        {/* nav menus */}
        <div
          className="w-[31.3vw] sm:hidden h-[3.33vw] novabold rounded-[3.33vw]   flex justify-center gap-[2vw] items-center  capitalize bg-black  bg-opacity-[17%] font-[200] text-[0.93vw] backdrop-blur-[25px]"
          style={{ color: white == 1 ? "black" : "white" }}
        >
          <Link href="about" className="hover:text-[#afafaf]">
            about us
          </Link>
          <Link href="services" className="hover:text-[#afafaf]">
            services
          </Link>
          <Link href="works" className="hover:text-[#afafaf]">
            our works
          </Link>
          <Link href="contact" className="hover:text-[#afafaf]">
            contact us
          </Link>
        </div>
        {/* menu icons */}
        <div
          className="w-[3.8vw] sm:w-[34px] sm:h-[34px] sm:p-[6px] p-[1vw] flex justify-center items-center h-[3.8vw]  rounded-[100%] bg-black bg-opacity-[17%]  cursor-pointer hover:bg-[#c7c5c5] backdrop-blur-[25px]"
          onClick={() => {
            setleft("0");
            setright("0");
            setopacity(1);
          }}
        >
          <Image
            priority
            src={white == 1 ? ham : white_ham}
            alt="hamburger"
            className="w-full h-auto"
          />
        </div>
      </nav>
    </>
  );
};

export default Header_black;
