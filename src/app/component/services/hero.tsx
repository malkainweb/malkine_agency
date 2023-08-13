"use client";

import React from "react";
import Header_transparant from "../navigation/header_transparant";

const Hero_services = (props: any) => {
  const { setleft, setright, setopacity, white } = props;

  return (
    <>
      <div className="w-full py-[0.8vw] px-[0.8vw] h-[120vw] sm:h-[160vw]  sm:py-[2vw] sm:px-[1.2vw]">
        <div className="w-full flex flex-col rounded-[3.3vw] gap-[10vw] h-full  hero_bg">
          <Header_transparant
            setleft={setleft}
            setright={setright}
            setopacity={setopacity}
            white={white}
          />

          <div className="w-full flex flex-col gap-[1.7vw] sm:gap-[2.5vw] pt-[12vw] sm:pt-[25vw]  blend px-[5.13vw]">
            <p className="nova  text-[1.6vw] font-[900]  text-[#dcdcdc] sm:text-[4vw] ">
              Services
            </p>
            <h1
              className="novabold sm:hidden text-[2.7vw] text-[#232323] leading-[3.2vw] "
              // style={{ lineHeight: "3.2vw" }}
            >
              We are a creative agency <br /> working with brands - building{" "}
              <br />
              insightful strategy
            </h1>

            <h1 className="sm:text-[5.5vw] hidden sm:block sm:leading-[6vw]">
              We are a creative agency <br /> working with brands - building{" "}
              <br />
              insightful strategy
            </h1>
            <button className="nova w-fit  text-[1.07vw] font[900]text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] text-white hover:bg-[#920808] sm:text-[3vw] font[900]  sm:rounded-[9.75vw] sm:px-[15vw] w-fit sm:py-[4vw] bg-[#D01717] sm:text-white hover:bg-[#920808]">
              Work with us <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_services;
