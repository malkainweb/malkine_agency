"use client ";

import React from "react";
import Logo from "../logo";
import ham from "../../../../public/black_nav_icon.svg";
import Link from "next/link";
import Image from "next/image";
import Logo_black from "../logo_black";

const Header_black = () => {
  return (
    <>
      <nav className="w-full  h-[120px]  flex  p_r  items-center justify-between bg-white">
        <Link href="/">
          <Logo_black />
        </Link>

        {/* nav menus */}
        <div className="w-[495px] h-[57px] nova rounded-[40px]  flex justify-around items-center text-black capitalize bg-black  bg-opacity-[17%] font-[200] text-[16px]">
          <Link href="about" className="hover:text-[#afafaf]">
            about us
          </Link>
          <Link href="#" className="hover:text-[#afafaf]">
            cases
          </Link>
          <Link href="#" className="hover:text-[#afafaf]">
            reviews
          </Link>
          <Link href="contact" className="hover:text-[#afafaf]">
            contact us
          </Link>
        </div>
        {/* menu icons */}
        <div className="w-[57px] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-black bg-opacity-[17%] ">
          <Image src={ham} alt="hamburger" className="w-full h-auto" />
        </div>
      </nav>
    </>
  );
};

export default Header_black;
