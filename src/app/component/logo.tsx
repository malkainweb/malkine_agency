"use client ";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.webp";

const Logo = () => {
  return (
    <>
      <div className="w-[6.3vw] h-[6.3vw]  ">
        <Image priority src={logo} alt="logo" className="w-full h-fit" />
      </div>
    </>
  );
};

export default Logo;
