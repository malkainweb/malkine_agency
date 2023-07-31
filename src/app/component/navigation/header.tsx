"use client ";

import React from "react";
import Logo from "../logo";
import ham from "../../../../public/nav_icon.svg";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="w-full   z-[999]   h-[120px]  flex  p_r  items-center justify-between bg-transparent ">
        <Link href="/">
          <Logo />
        </Link>
        {/* nav menus */}
        <div className="w-[495px] h-[57px] novabold rounded-[40px]  flex justify-around items-center text-white capitalize bg-[#FFFFFF] bg-opacity-[17%] font-[200] text-[16px] backdrop-blur-[200px]">
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
        <div className="w-[57px] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-[#FFFFFF] bg-opacity-[17%]  backdrop-blur-[100px]">
          <Image src={ham} alt="hamburger" className="w-full h-auto" />
        </div>
      </nav>
    </>
  );
};

export default Header;
