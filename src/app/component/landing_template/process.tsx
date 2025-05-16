"use client";
import Image from "next/image";
import line from "../../../../public/landingpage_template/line.png";
import mob_line from "../../../../public/landingpage_template/mob_line.png";
import one from "../../../../public/landingpage_template/example1.webp";
import two from "../../../../public/landingpage_template/example2.webp";
import three from "../../../../public/landingpage_template/example3.webp";
// import four from "../../../../public/landingpage_template/example.webp";
import whiteLine from "@/../public/goggle/whiteImage.png";

import blue_arrow from "../../../public/home/processes/blue_arrow.png";
import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import {
  CabinetGrotesk_bold,
  CabinetGrotesk_medium,
  NeueHaasDisplay_light,
  NeueHaasDisplay_roman,
} from "@/app/utils/fonts";
import External_btn from "@/app/utils/external_btn";
import { useEffect, useState } from "react";
// import { scrollTo_calendy } from "../utils/scroll_to_calendy";

const Processes = ({
  process,
  btn_bg_color,
  text_color,
  arrow_icon,
  straight_line_image,
  mobile_straight_line_image,
  show_btn,
  goggle,
}: any) => {
  const width = globalThis.innerWidth;

  const [calc_width, setcalc_width] = useState(1000);

  useEffect(() => {
    setcalc_width(width);
  }, [width]);
  const items = [
    {
      step_text: "STEP 01: GET STARTED",
      heading: "Onboarding",
      top: "1vw",
      body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
      img: one,
    },
    {
      step_text: "STEP 02: DESIGN",
      heading: "Designing",
      top: "2vw",

      body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
      img: two,
      reverse: true,
    },
    {
      step_text: "STEP 03: PROTOTYPING",
      heading: "Prototyping",
      top: "1vw",

      body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
      center: true,
    },
    {
      step_text: "STEP 04: DEVELOPMENT",
      heading: "Developing",
      top: "vw",

      body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
      img: three,
      //   reverse: true,
    },
    {
      step_text: "STEP 05: LONG TERM",
      heading: "Maintenance",

      body: "By far, the most important step, we work with your business on regular updates to ensure the content forever up to date and also implement feedback based off user response from the initial product.",
      //   img: four,
      center: true,
    },
  ];
  return (
    <>
      <div
        className={`w-full flex sm:gap-[12vw]  flex-col items-center mb-[13vw] `}
      >
        <h2
          style={{
            color: text_color,
          }}
          className={` font_helvetica sm:text-[8vw] sm:leading-[9vw] text-[5vw] py-[3vw] text-white`}
        >
          How We Work With You{" "}
        </h2>
        {/* the bottom process and the mapping function */}
        <div className=" w-[70vw] sm:w-[90vw]  flex flex-col items-center justify-between  gap-[8vw] sm:gap-[2.3vw] relative">
          <Image
            src={
              goggle
                ? whiteLine
                : straight_line_image
                ? straight_line_image
                : line
            }
            alt="line"
            className="w-fit  h-full sm:hidden absolute left-[50%] translate-x-[-50%] "
          />
          {process.map((e: any, index: any) => {
            return (
              <>
                {index != 0 && (
                  <Image
                    src={
                      mobile_straight_line_image
                        ? mobile_straight_line_image
                        : mob_line
                    }
                    alt="line"
                    className="hidden sm:block w-[2vw] h-fit"
                  />
                )}

                <div
                  key={index}
                  style={{ marginTop: calc_width > 700 ? e.top : "" }}
                  className={`   gap-[7vw]  ${
                    e.center
                      ? `w-[26vw]  h-[20vw] sm:w-full sm:h-auto  sm:rounded-[7vw]  ${
                          btn_bg_color ? "bg-[#226DFF]" : "bg-[#D01717]"
                        }   rounded-[2vw] sm:mb-[4vw] items-center z-[99] px-[2vw] sm:py-[6vw] sm:px-[4vw]`
                      : "w-full h-auto sm:pb-[4vw] sm:text-center sm:flex-col sm:items-center items-start"
                  }    flex justify-center  ${
                    e.reverse ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {e.img && (
                    <div
                      className={`w-[50%] sm:w-[80%]  ${
                        e.reverse ? "justify-start" : "justify-end"
                      }  flex  `}
                    >
                      <Image
                        // style={{ filter: `drop-shadow(0 0 0.80vw #ffffff8b)` }}
                        src={e.img}
                        alt={e.heading}
                        className="sm:w-full w-[70%] shadow-[#000000]  shadow-2xl rounded-[100%]   h-fit"
                      />
                    </div>
                  )}

                  {/* the body  */}
                  <div
                    className={` sm:w-full sm:flex sm:flex-col sm:gap-[2vw]   ${
                      e.center
                        ? "w-full text-white  items-center text-center "
                        : "w-[50%]    sm:items-center"
                    } flex flex-col  gap-[0.7vw] ${
                      e.reverse ? "items-end " : "items-start"
                    }  `}
                  >
                    <div
                      style={{
                        color: !e.center && text_color,
                        borderColor: goggle ? "white" : !e.center && text_color,
                        // border: e.center && "1px solid white",
                      }}
                      // className="flex  text-white justify-center items-center w-[11.2vw] h-[2.2vw] border-[0.07vw]  sm:w-[40vw] sm:h-[7.9vw] sm:rounded-[10vw]  border-white border-opacity-[50%] rounded-[2.9vw]"
                      className={`flex ${
                        e.center && "border-[0.07vw]"
                      } text-white justify-center items-center w-[11.2vw] h-[2.2vw]   sm:w-[40vw] sm:h-[7.9vw] sm:rounded-[10vw] border  border-white border-opacity-[50%] rounded-[2.9vw]`}
                    >
                      <p
                        style={{
                          color: goggle ? "white" : "",
                        }}
                        className={`${CabinetGrotesk_medium.className} sm:text-[3.2vw]  text-[0.9vw] uppercase`}
                      >
                        {e.step_text}
                      </p>
                    </div>
                    <h2
                      style={{
                        color: goggle ? "" : !e.center && text_color,
                      }}
                      className={` text-white sm:text-[8vw] sm:text-center ${
                        NeueHaasDisplay_roman.className
                      } ${
                        e.reverse ? "text-end " : "sm:text-center"
                      }  text-[3.1vw]`}
                    >
                      {e.heading}
                    </h2>

                    <p
                      style={{
                        color: goggle ? "" : !e.center && text_color,
                      }}
                      className={` text-white sm:text-[4vw] sm:leading-[5.5vw] ${
                        NeueHaasDisplay_light.className
                      } ${
                        e.reverse
                          ? "text-end sm:text-center pl-[6vw] sm:pl-0"
                          : ""
                      }  text-[1.2vw] leading-[1.5vw]`}
                    >
                      {e.body}
                    </p>

                    {index != items.length - 1 && (
                      <>
                        {show_btn && (
                          <div
                            className={` ${
                              e.center ? "hidden" : "flex"
                            } group  mt-[1vw] `}
                          >
                            <button
                              onClick={() => {
                                scrollTo_calendy();
                              }}
                              style={{
                                backgroundColor: "#D01717",
                                // color: btn_bg_color && btn_bg_color,
                              }}
                              className={` sm:w-[35vw] capitalize sm:text-[3.72vw]   sm:h-[11vw]  w-[10.5vw] h-[3.2vw] rounded-[3vw] sm:rounded-[8.75vw] text-[1.06vw] ${CabinetGrotesk_bold.className} text-[white] bg-[#F3F3F3] `}
                            >
                              get started
                            </button>
                            <External_btn
                              h={"3.2"}
                              w={"3.2"}
                              bg={"#D01717"}
                              img={"blue"}
                              arrow_icon={arrow_icon}
                              btn_bg_color={btn_bg_color}
                            />
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Processes;
