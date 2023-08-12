"use client ";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.webp";
import mobile_logo from "../../../public/mobile_logo_white.webp";

const Logo = () => {
  return (
    <>
      <div className="w-[6.3vw] sm:w-[50px] h-[6.3vw]  ">
        <Image
          priority
          src={logo}
          alt="logo"
          className="w-full h-fit sm:hidden"
        />
        <Image
          priority
          src={mobile_logo}
          alt="logo"
          className="w-full h-fit hidden sm:block"
        />
      </div>
    </>
  );
};

export default Logo;
