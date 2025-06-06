"use client ";

import React from "react";
import Logo from "../logo";
import ham from "../../../../public/black_nav_icon.svg";
import white_ham from "../../../../public/nav_icon.svg";
import Link from "next/link";
import Image from "next/image";
import Logo_black from "../logo_black";
import { usePathname } from "next/navigation";

const Home_Header = (props: any) => {
  const { setleft, setright, setopacity, white, nav_menu, nav_ham } = props;

  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
      <nav className="w-full fixed sm:h-[25vw]  z-[99]   h-[10vw] flex  p_r  items-center justify-between bg-transparent">
        <Link href="/" className="  ">
          {white == 1 ? <Logo /> : <Logo_black />}
        </Link>

        {/* nav menus */}
        <div
          style={{ color: nav_menu == 1 ? "white" : "black" }}
          className={`w-[31.3vw] h-[3.3vw] sm:hidden  novabold rounded-[3.3vw]  flex justify-center  gap-[2vw]  items-center text-white capitalize bg-[#FFFFFF] bg-opacity-[17%] font-[200] text-[0.93vw]  backdrop-blur-[25px] ${
            pathname == "/contact" ? "border" : ""
          }`}
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
          className={`w-[3.8vw] p-[1vw] sm:w-[9vw] sm:h-[9vw] sm:p-[6px] flex justify-center items-center h-[3.8vw]  rounded-[100%] bg-[#FFFFFF] bg-opacity-[17%]   cursor-pointer hover:bg-[#c7c5c5] backdrop-blur-[25px]  ${
            pathname == "/contact" ? " " : ""
          }`}
          onClick={() => {
            setleft("0");
            setright("0");
            setopacity(1);
          }}
        >
          <Image
            priority
            src={nav_ham == 1 ? white_ham : ham}
            alt="hamburger"
            className="w-full h-auto"
          />
        </div>
      </nav>
    </>
  );
};

export default Home_Header;
