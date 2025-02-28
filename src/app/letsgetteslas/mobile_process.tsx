"use client";

import localFont from "next/font/local";
import next_works from "@/../public/home/next_works.png";
import prev_works from "@/../public/home/prev_works.png";
// the order images
import one from "../../../public/new_service/mob_process_1.webp";
import two from "../../../public/new_service/mob_process_2.webp";
import three from "../../../public/new_service/mob_process_3.webp";
import four from "../../../public/new_service/mob_process_4.webp";
import five from "../../../public/new_service/mob_process_5.webp";
import { useMotionValueEvent, useScroll } from "framer-motion";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CabinetGrotesk_bold,
  CabinetGrotesk_medium,
  NeueHaasDisplay_light,
  NeueHaasDisplay_roman,
} from "@/app/utils/fonts";

const Mobile_Process = () => {
  const items = [
    {
      heading: "Maintenance",
      body: "By far, the most important step, we work with your business on regular updates to ensure the content forever up to date and also implement feedback based off user response from the initial product.",
      img: five,
      deg: 1,
    },
    {
      heading: "Developing",
      body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
      img: four,
      deg: -1,
    },
    {
      heading: "Prototyping",
      body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
      img: three,
      deg: 2,
    },
    {
      heading: "Designing",
      body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
      img: two,
      deg: -4,
    },
    {
      heading: "Onboarding",
      body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
      img: one,
      deg: 4,
    },
  ];
  const [active_index, setactive_index] = useState<any>(items.length - 1);
  const [size, setsize] = useState<any>(null);

  const width = globalThis.innerWidth;

  return (
    <>
      {/* this is for mobile */}
      <div className="w-full  py-[4vw] sm:bg-gradient-to-b my-[4vw] items-center h-auto gap-[2vw]   px-[4vw]  flex flex-col sm:gap-[13vw] sm:pt-[15vw]  sm:pb-[20vw]">
        <h2
          className={`sm:text-[10vw] relative w-fit sm:leading-[10.5vw]  text-[3.2vw] sm:mb-0   text-center ${NeueHaasDisplay_roman.className} `}
        >
          How We Work <br /> With You{" "}
        </h2>

        {/* now the main functions */}
        <div className="w-full sm:relative flex sm:block gap-[3vw] px-[11vw]   h-auto sm:top-0  sm:h-[105vw] ">
          {items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={`sm:w-[72vw] relative  sm:rounded-[5vw] rounded-[2.5vw] overflow-hidden w-full h-[30vw] ${
                  active_index == index
                    ? `sm:rotate-[0deg]`
                    : index == 1
                    ? `sm:rotate-[-6deg]`
                    : index == 0
                    ? "sm:rotate-[6deg]"
                    : ""
                } sm:left-[50%] sm:top-0 sm:absolute sm:translate-x-[-50%]   sm:h-[104vw] flex flex-col justify-between  ${
                  active_index < index
                    ? "sm:opacity-[0%] sm:translate-x-[100%]"
                    : "sm:opacity-[100%] shadow-2xl shadow-[#0000004a] "
                }  `}
                style={{
                  rotate: active_index == index ? "0deg" : `${e.deg}deg`,
                  transition: "0.8s ease",
                }}
              >
                {/* the image */}
                <Image
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover"
                />
                <div className="w-full sm:h-auto sm:py-[5vw]   text-white items-center rounded-[1.8vw] h-[13.5vw] g  sm:rounded-[6vw] flex flex-col justify-center  bg-white bg-opacity-[23%] backdrop-blur-2xl gap-[1vw] sm:gap-[3vw] absolute bottom-0 left-0">
                  <h4
                    className={` ${NeueHaasDisplay_roman.className} text-center  text-[1.4vw] sm:text-[5vw]`}
                  >
                    {e.heading}
                  </h4>
                  <p
                    className={` ${NeueHaasDisplay_light.className} sm:text-[3.5vw] text-[1vw] px-[1vw] sm:px-[3vw] sm:leading-[4.7vw] text-center`}
                  >
                    {e.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* the buttons below */}
        <div
          className={` w-full sm:mt-[2vw] hidden sm:flex justify-center sm:gap-[6vw] gap-[2vw] items-center`}
        >
          <Image
            src={prev_works}
            onClick={() => {
              if (active_index < items.length - 1) {
                setactive_index(active_index + 1);
              }
            }}
            alt="prev "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
          <Image
            src={next_works}
            onClick={() => {
              if (active_index > 0) {
                setactive_index(active_index - 1);
              }
            }}
            alt="next "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
        </div>
      </div>
    </>
  );
};

export default Mobile_Process;
