"use client";

import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NeueHaasDisplay_light, NeueHaasDisplay_roman } from "../utils/fonts";

const Service_hero = ({ show_btn }: any) => {
  const width = globalThis.innerWidth;
  const [compt_width, setcompt_width] = useState(0);
  useEffect(() => {
    setcompt_width(width);
  }, [width]);
  return (
    <>
      <div className="w-full py-[3vw] flex flex-col items-center sm:gap-[8vw] gap-[3.5vw]  text-center">
        <h1
          className={`font_helvetica  text-[4vw]  sm:text-[7vw] px-[7vw]  sm:px-[2vw] 
          leading-[4.5vw] sm:leading-[7.5vw] ${NeueHaasDisplay_roman.className}
          `}
        >
          We <span className="text-[#FF0000]">Build</span> Custom
          <span className="text-[#FF0000]"> Websites </span>
          and Software for
          <span className="text-[#FF0000]"> Architects</span> and
          <span className="text-[#FF0000]"> Home </span> Improvement specialist
          {/* We <span className="text-[#FF0000]">Build</span> Custom
          <span className="text-[#FF0000]"> Websites </span> <br />
          and Software that
          <span className="text-[#FF0000]"> Converts</span> */}
        </h1>
        {/* <p
          className={` ${NeueHaasDisplay_light.className} font_helvetica   sm:text-[3.5vw] sm:leading-[4vw] text-[1.8vw]  leading-[2.1vw]`}
        >
          We create everything your company needs from websites,{" "}
          <br className="hidden sm:block" /> client portals,{" "}
          <br className="sm:hidden" />
          internal CRM{"'"}s and mobile apps to{" "}
          <br className="hidden sm:block" /> empower and boost growth.
        </p> */}
        {show_btn && (
          <button
            onClick={() => {
              scrollTo_calendy();
            }}
            className={`nova w-fit  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] hover:opacity-[70%]  sm:text-[3vw]   sm:rounded-[9.75vw] sm:px-[18vw] ${NeueHaasDisplay_roman.className}  sm:py-[4vw] font_helvetica  sm:text-white sm:mt-[2vw] `}
          >
            Get Started <i className="bi bi-arrow-right sm:hidden"></i>
          </button>
        )}{" "}
      </div>
    </>
  );
};

export default Service_hero;
