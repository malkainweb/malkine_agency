"use client ";

import React from "react";
import Logo from "../logo";
import ham from "../../../../public/navIcon.webp";
import Link from "next/link";
import Image from "next/image";
import Logo_black from "../logo_black";

const Header_black = (props: any) => {
  const { setleft, setright, setopacity } = props;

  return (
    <>
      <nav className="w-full  h-[150px] fixed z-[99] flex  p_r  items-center justify-between bg-transparent">
        <Link href="/">
          <Logo_black />
        </Link>

        {/* nav menus */}
        <div className="w-[470px] h-[50px] novabold rounded-[50px]   flex justify-center gap-[30px] items-center text-[#D01717] capitalize bg-black  bg-opacity-[17%] font-[200] text-[14px] backdrop-blur-[25px]">
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
          className="w-[57px] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-black bg-opacity-[17%]  cursor-pointer hover:bg-[#c7c5c5] backdrop-blur-[25px]"
          onClick={() => {
            setleft("0");
            setright("0");
            setopacity(1);
          }}
        >
          <Image priority src={ham} alt="hamburger" className="w-full h-auto" />
        </div>
      </nav>
    </>
  );
};

export default Header_black;
