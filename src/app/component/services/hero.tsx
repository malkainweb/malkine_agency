"use client";

import React, { useState } from "react";
import Header_transparant from "../navigation/header_transparant";
import hero from "../../../../public/services/hero.svg";
import Image from "next/image";

const Hero_services = (props: any) => {
  const { setleft, setright, setopacity } = props;

  return (
    <>
      <div className="w-full py-[0.8vw] px-[0.8vw] h-[120vw] ">
        <div className="w-full flex flex-col rounded-[50px] gap-[150px] h-full  hero_bg">
          {/* <Image
            src={hero}
            alt="hero img"
            className="w-full h-full absolute top-0  left-0 z-[1]"
          /> */}
          <Header_transparant
            setleft={setleft}
            setright={setright}
            setopacity={setopacity}
          />

          <div className="w-full flex flex-col gap-[1.7vw] pt-[180px]   blend px-[77px]">
            <p className="nova  text-[24px] font-[900]  text-[#dcdcdc] ">
              Services
            </p>
            <h1
              className="novabold  text-[40px] text-[#232323] "
              style={{ lineHeight: "48px" }}
            >
              We are a creative agency <br /> working with brands - building{" "}
              <br />
              insightful strategy
            </h1>
            <button className="nova w-fit  text-[16px] font[900]text-white rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
              Work with us <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_services;
