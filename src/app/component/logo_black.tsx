"use client ";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo_red.webp";

const Logo_black = () => {
  return (
    <>
      <div className="w-[95px] h-[95px]  ">
        <Image src={logo} alt="logo" className="w-full h-fit" />
      </div>
    </>
  );
};

export default Logo_black;
