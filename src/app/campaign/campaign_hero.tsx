"use client";

import {
  CabinetGrotesk_bold,
  CabinetGrotesk_medium,
  NeueHaasDisplay_bold,
  NeueHaasDisplay_light,
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "../utils/fonts";

import tummy_blur from "../../../public/campaign/hero/blur.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import gif from "../../../public/campaign/hero/hero.gif";
import img from "../../../public/campaign/hero/hero.webp";
import Go_high_level_form from "../letsgetteslas/contact_us_pop_up";

const Campaign_hero = ({ show_btn, form_link, goggle }: any) => {
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
          form_link={form_link}
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
      {/* mobile design */}
      {/* mobile design */}
      {/* mobile design */}
      {/* mobile design */}
      {/* mobile design */}
      {/* mobile design */}
      <div className=" p-[2%]  hidden  sm:flex flex-col mb-[5vw]    ">
        <div className="relative  h-[32rem] rounded-[20px] overflow-hidden">
          <div className="w-full h-full relative flex">
            <Image
              src={gif}
              alt="hero"
              className="w-full h-full z-[10]  object-cover "
            />
            <Image
              src={img}
              alt="hero"
              className="w-full h-full absolute top-0 left-0 object-cover "
            />
          </div>{" "}
          <div className="absolute w-full  rounded-[20px] overflow-hidden bottom-0 left-0 z-[100] ">
            <Image
              src={tummy_blur}
              alt="hero"
              className="w-full absolute h-full rounded-[20px]  top-0 left-0"
            />
            <div className="bg-gradient-to-b rounded-[20px] overflow-hidden bg-white  bg-opacity-[5%] backdrop-blur-[100px]  py-[1.7rem]  flex-col  p-[2%] flex  gap-[1.5rem] ">
              <h1
                className={`${
                  NeueHaasDisplay_medium.className
                }  text-center  text-white z-[10] ${
                  goggle
                    ? "text-[7vw] leading-[7.3vw]"
                    : "text-[8vw] leading-[8.3vw]"
                } `}
              >
                {goggle ? "Ecommerce websites" : "Websites"} built for
                yesterday, won{"'"}t convert today{"'"}s customers
              </h1>{" "}
              <p
                className={`${NeueHaasDisplay_light.className} relative text-center text-[5vw] leading-[6vw] text-white`}
              >
                Let{"'"}s get you a website for your <br /> type of business.{" "}
              </p>
            </div>
          </div>{" "}
        </div>
      </div>

      {/* DESKTOP DESIGN */}
      {/* DESKTOP DESIGN */}
      {/* DESKTOP DESIGN */}
      {/* DESKTOP DESIGN */}
      {/* DESKTOP DESIGN */}
      <div
        className={`w-full py-[3vw] sm:pb-[6vw]  sm:hidden flex flex-col items-center sm:gap-[8vw] gap-[3vw]  text-center  ${
          goggle ? "text-[white] sm:text-[black]" : ""
        } `}
      >
        <h1
          className={`font_helvetica sm:hidden text-[4vw]  sm:text-[7vw] px-[7vw]  sm:px-[2vw] 
          leading-[4.5vw] sm:leading-[7.5vw] ${NeueHaasDisplay_roman.className}
          `}
        >
          {goggle ? "Ecommerce websites" : "Websites"} built for yesterday, won
          {"'"}t <br /> convert today{"'"}s customers{" "}
          <span className="text-[#FF0000]"> </span>
        </h1>
        <p
          className={`${NeueHaasDisplay_light.className}  relative text-center text-[2vw] leading-[2.2vw] `}
        >
          Let{"'"}s get you a website for your type of business.{" "}
        </p>
        {/* <div className="flex flex-col sm:gap-[6vw] gap-[1vw] ">
          <p
            className={`${NeueHaasDisplay_medium.className} sm:text-[12vw] text-[3vw] sm:leading-[11vw]`}
          >
            We Build
          </p>

          <p
            className={`${NeueHaasDisplay_light.className} sm:text-[6vw] sm:leading-[7vw] text-[2vw] leading-[2.4vw] `}
          >
            Landing Pages <br /> Custom Apps <br />
            <span className="text-[#FF0000]"> Websites</span>
          </p>
        </div> */}
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

export default Campaign_hero;
