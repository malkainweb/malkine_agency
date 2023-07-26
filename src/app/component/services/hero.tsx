"use client";

import React from "react";
import Header_transparant from "../navigation/header_transparant";
import hero from "../../../../public/services/hero.svg";
import Image from "next/image";

const Hero_services = () => {
  return (
    <>
      <div className="w-full py-[30px] p_r h-[1400px] ">
        <div className="w-full flex flex-col rounded-[50px] gap-[150px] h-full  hero_bg">
          {/* <Image
            src={hero}
            alt="hero img"
            className="w-full h-full absolute top-0  left-0 z-[1]"
          /> */}
          <Header_transparant />

          <div className="w-full flex flex-col gap-[18px]  blend px-[77px]">
            <p className="nova text-[24px] font-[900]  text-white ">Services</p>
            <h1 className="nova text-[40px] font-[light]">
              We are a creative <br /> agency working with
              <br /> brands - building <br />
              insightful strategy
            </h1>
            <button className="nova w-fit  text-[16px] font[900]text-white rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white">
              Work with us <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_services;
