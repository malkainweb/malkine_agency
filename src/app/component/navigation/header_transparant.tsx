"use client ";

import React from "react";
import Logo from "../logo";
import black_nav_icon from "../../../../public/black_nav_icon.svg";
import Link from "next/link";
import Image from "next/image";
import Logo_black from "../logo_black";

const Header_transparant = (props: any) => {
  const { setleft, setright, setopacity, white } = props;
  return (
    <>
      <nav className="w-full   h-[10vw] fixed  z-[99] top-0 left-0  flex  p_r  items-center justify-between bg-transparent">
        <Link href="/">{white == 1 ? <Logo_black /> : <Logo />}</Link>
        {/* nav menus */}
        <div className="w-[31.3vw] h-[3.3vw] novabold rounded-[50px]   flex justify-around items-center  capitalize bg-[#CED7D7] font-[200] text-[0.93vw] backdrop-blur-[25px] text-black bg-opacity-[37%]">
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
          className="w-[3.8vw] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-[#CED7D7] bg-opacity-[37%]  cursor-pointer hover:bg-[#c7c5c5] backdrop-blur-[25px]"
          onClick={() => {
            setleft("0");
            setright("0");
            setopacity(1);
          }}
        >
          <Image
            priority
            src={black_nav_icon}
            alt="hamburger"
            className="w-full h-fit"
          />
        </div>
      </nav>
    </>
  );
};

export default Header_transparant;
