"use client ";

import React from "react";
import Logo from "../logo";
import black_nav_icon from "../../../../public/black_nav_icon.svg";
import Link from "next/link";
import Image from "next/image";

const Header_transparant = (props: any) => {
  const { setleft, setright } = props;
  return (
    <>
      <nav className="w-full  h-[150px]  flex  p_r  items-center justify-between bg-transparent">
        <Link href="/">
          <Logo />
        </Link>
        {/* nav menus */}
        <div className="w-[495px] h-[57px] novabold rounded-[40px]  flex justify-around items-center text-[black] capitalize bg-[#CED7D7] font-[200] text-[16px]">
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
          className="w-[57px] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-[#CED7D7]  cursor-pointer hover:bg-[#c7c5c5]"
          onClick={() => {
            setleft("0");
            setright("0");
          }}
        >
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
