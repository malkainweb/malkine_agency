"use client";

import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NeueHaasDisplay_light, NeueHaasDisplay_roman } from "../utils/fonts";
import Go_high_level_form from "./contact_us_pop_up";

const Service_hero = ({ show_btn }: any) => {
  const width = globalThis.innerWidth;
  const [compt_width, setcompt_width] = useState(0);
  useEffect(() => {
    setcompt_width(width);
  }, [width]);
  const [go_high_level_start_anime, setgo_high_level_start_anime] =
    useState(false);
  return (
    <>
      {go_high_level_start_anime && (
        <Go_high_level_form
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
      <div className="w-full py-[3vw] flex flex-col items-center sm:gap-[8vw] gap-[3vw]  text-center">
        <h1
          className={`font_helvetica  text-[4vw]  sm:text-[7vw] px-[7vw]  sm:px-[2vw] 
          leading-[4.5vw] sm:leading-[7.5vw] ${NeueHaasDisplay_roman.className}
          `}
        >
          We Build
          <span className="text-[#FF0000]"> Custom Websites </span>
          for <br className="sm:hidden" />
          <span className="text-[#FF0000]"> Architects</span> and Home
          specialist
        </h1>
        <p
          className={` ${NeueHaasDisplay_roman.className}  leading-[2.5vw] sm:leading-[4.5vw]  text-[2vw]   sm:text-[4vw]`}
        >
          Get a <span className="text-[#FF0000]"> FREE </span>
          Gallery Page Re-design for your website <br className="" />
          <span className="text-[#FF0000]"> ** Offer </span> Valid only for the
          month of <span className="text-[#FF0000]"> October </span>
        </p>
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
              setgo_high_level_start_anime(true);
              window.fbq("track", "ContactUsClick", {
                value: "Customer clicked on Contact Us button", // Optional, to track a specific value
              });
              window.gtag("event", "ContactUsClick", {
                event_category: "Lead Generation",
                event_label: "Customer clicked on Contact Us button",
              });
            }}
            className={`nova w-fit cursor-pointer text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] hover:opacity-[70%]  sm:text-[3vw]  sm:rounded-[9.75vw] sm:px-[18vw] ${NeueHaasDisplay_roman.className}  sm:py-[4vw] font_helvetica  sm:text-white sm:mt-[2vw] `}
          >
            Get Started{" "}
            <i className="bi ml-[1rem] bi-arrow-right sm:hidden"></i>
          </button>
        )}{" "}
      </div>
    </>
  );
};

export default Service_hero;
