"use client ";

import React from "react";
import Logo from "../logo";
import ham from "../../../../public/nav_icon.svg";
import Link from "next/link";
import Image from "next/image";

const Home_Header = (props: any) => {
  const { setleft, setright } = props;
  return (
    <>
      <nav className="w-full fixed  z-[99]   h-[150px]  flex  p_r  items-center justify-between bg-transparent ">
        <Link href="/" className="">
          <Logo />
        </Link>
        {/* nav menus */}
        <div className="w-[470px] h-[50px] novabold rounded-[50px]  flex justify-center  gap-[30px]  items-center text-white capitalize bg-[#FFFFFF] bg-opacity-[17%] font-[200] text-[14px] backdrop-blur-[25px]">
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
          className="w-[57px] p-[15px] flex justify-center items-center h-[57px]  rounded-[100%] bg-[#FFFFFF] bg-opacity-[17%]  backdrop-blur-[100px] cursor-pointer hover:bg-[#c7c5c5]"
          onClick={() => {
            setleft("0");
            setright("0");
          }}
        >
          <Image src={ham} alt="hamburger" className="w-full h-auto" />
        </div>
      </nav>
    </>
  );
};

export default Home_Header;
