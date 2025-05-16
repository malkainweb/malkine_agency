"use client";

import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NeueHaasDisplay_light,
  NeueHaasDisplay_roman,
  aeonik_regular,
} from "../utils/fonts";
import new_hero_img from "../../../public/new_service/new_hero_section.webp";
import Go_high_level_form from "./contact_us_pop_up";
import Image from "next/image";

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
      {/* special header */}
      <div
        className={` ${aeonik_regular.className} sm:mb-[10vw] sm:flex hidden flex-col  `}
      >
        <div className=" w-full overflow-hidden">
          <Image src={new_hero_img} alt="new_hero_img" className="w-full" />
        </div>
        <div className="w-full flex flex-col sm:px-[4%] sm:py-[7vw] text-white sm:gap-[5vw] bg-[#5B0404] ">
          <h3 className="text-[#FF7E7E] sm:text-[10vw] sm:leading-[9.5vw]">
            Launch your new website on January 1
          </h3>
          <p className="sm:text-[5vw]  sm:leading-[5.5vw]">
            We{"'"}ll even design a{" "}
            <span className="text-[#C0FFE3]"> FREE </span>
            Gallery Page <br /> to see if we{"'"}re the right fit <br />- Offer
            Expires Nov 30*{" "}
          </p>
          {/* <button
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
            className="w-full bg-[#C0FFE3] sm:text-[5vw] text-black sm:leading-[5.5vw] sm:h-[13vw] sm:rounded-[2.5vw]"
          >
            Get Started
          </button> */}
        </div>
      </div>
      <div className="w-full py-[3vw] sm:pb-[6vw] flex flex-col items-center sm:gap-[8vw] gap-[3vw]  text-center">
        <h1
          className={`font_helvetica  text-[4vw]  sm:text-[7vw] px-[7vw]  sm:px-[2vw] 
          leading-[4.5vw] sm:leading-[7.5vw] ${NeueHaasDisplay_roman.className}
          `}
        >
          Hi! We{"'"}re
          <span className="text-[#FF0000]"> Malkain </span>
          and We Design Websites for{" "}
          <span className="text-[#FF0000]"> Architects </span>
          and <span className="text-[#FF0000]"> Home Specialist</span>
        </h1>
        <p
          className={` sm:hidden ${NeueHaasDisplay_roman.className}  leading-[2.5vw] sm:leading-[4.5vw]  text-[2vw]   sm:text-[4vw]`}
        >
          We{"'"}ll even design a <span className="text-[#FF0000]"> FREE </span>{" "}
          Gallery Page to see if we{"'"}re <br />
          the right fit - Offer Expires Oct 31*{" "}
        </p>
        {show_btn && (
          <button
            onClick={() => {
              setgo_high_level_start_anime(true);
              window.fbq("track", "ContactUsClick", {
                value: "Customer clicked on Contact Us button", // Optional, to track a specific value
              });
              // window.gtag("event", "ContactUsClick", {
              //   event_category: "Lead Generation",
              //   event_label: "Customer clicked on Contact Us button",
              // });
            }}
            className={`nova w-fit sm:hidden cursor-pointer text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] hover:opacity-[70%]  sm:text-[3vw]  sm:rounded-[9.75vw] sm:px-[18vw] ${NeueHaasDisplay_roman.className}  sm:py-[4vw] font_helvetica  sm:text-white sm:mt-[2vw] `}
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
