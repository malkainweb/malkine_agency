"use client ";

import React from "react";
import Logo from "../logo";
import black_nav_icon from "../../../../public/black_nav_icon.svg";
import Link from "next/link";
import Image from "next/image";

const Header_transparant = () => {
  return (
    <>
      <nav className="w-full  h-[120px]  flex  p_r  items-center justify-between bg-transparent">
        <Logo />
        {/* nav menus */}
        <div className="w-[495px] h-[57px] nova rounded-[40px]  flex justify-around items-center text-[black] capitalize bg-[#CED7D7] font-[200] text-[16px]">
          <Link href="#" className="hover:text-[#afafaf]">
            about us
          </Link>
          <Link href="#" className="hover:text-[#afafaf]">
            cases
          </Link>
          <Link href="#" className="hover:text-[#afafaf]">
            reviews
          </Link>
          <Link href="#" className="hover:text-[#afafaf]">
            contact us
          </Link>
        </div>
        {/* menu icons */}
        <div className="w-[57px] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-[#CED7D7]">
          <Image
            src={black_nav_icon}
            alt="hamburger"
            className="w-full h-auto"
          />
        </div>
      </nav>
    </>
  );
};

export default Header_transparant;
