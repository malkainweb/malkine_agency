"use client";
import Image from "next/image";
import line from "../../../../public/landingpage_template/line.png";
import one from "../../../../public/landingpage_template/example.webp";
import two from "../../../../public/landingpage_template/example.webp";
import three from "../../../../public/landingpage_template/example.webp";
import four from "../../../../public/landingpage_template/example.webp";

import blue_arrow from "../../../public/home/processes/blue_arrow.png";
import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import { CabinetGrotesk_bold, CabinetGrotesk_medium } from "@/app/utils/fonts";
import External_btn from "@/app/utils/external_btn";
// import { scrollTo_calendy } from "../utils/scroll_to_calendy";

const Processes = () => {
  const items = [
    {
      step_text: "STEP 01: GET STARTED",
      heading: "Onboarding",
      top: "1vw",
      body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
      img: one,
      //   reverse: true,
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
      top: "4vw",

      body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
      center: true,
    },
    {
      step_text: "STEP 04: DEVELOPMENT",
      heading: "Developing",
      body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
      img: three,
      //   reverse: true,
    },
    {
      step_text: "STEP 05: LONG TERM",
      heading: "Maintenance",

      body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
      //   img: four,
      center: true,
    },
  ];
  return (
    <>
      <div className="w-full flex   flex-col items-center mb-[13vw] ">
        <h2 className={` font_helvetica text-[5vw] py-[3vw] text-white`}>
          Our Process
        </h2>
        {/* the bottom process and the mapping function */}
        <div className=" w-[70vw]  flex flex-col items-center justify-between  gap-[8vw] relative">
          <Image
            src={line}
            alt="line"
            className="w-fit  h-full absolute left-[50%] translate-x-[-50%] "
          />
          {items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                style={{ marginTop: e.top }}
                className={`  gap-[7vw]  ${
                  e.center
                    ? "w-[26vw] h-[20vw]   bg-[#D01717] rounded-[2vw] items-center z-[99] px-[2vw]"
                    : "w-full h-auto items-start"
                }    flex justify-center  ${
                  e.reverse ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {e.img && (
                  <div
                    className={`w-[50%]  ${
                      e.reverse ? "justify-start" : "justify-end"
                    }  flex  `}
                  >
                    <Image
                      src={e.img}
                      alt={e.heading}
                      className="w-full h-fit"
                    />
                  </div>
                )}

                {/* the body  */}
                <div
                  className={`   ${
                    e.center
                      ? "w-full text-white  items-center text-center "
                      : "w-[50%]"
                  } flex flex-col gap-[0.7vw] ${
                    e.reverse ? "items-end" : "items-start"
                  }  `}
                >
                  <div className="flex  text-white justify-center items-center w-[11.2vw] h-[2.2vw] border-[0.07vw] border-white border-opacity-[50%] rounded-[2.9vw]">
                    <p
                      className={`${CabinetGrotesk_medium.className} text-[0.9vw] uppercase`}
                    >
                      {e.step_text}
                    </p>
                  </div>
                  <h2
                    className={` text-white ${CabinetGrotesk_bold.className} ${
                      e.reverse ? "text-end" : ""
                    }  text-[3.1vw]`}
                  >
                    {e.heading}
                  </h2>

                  <p
                    className={` text-white ${
                      CabinetGrotesk_medium.className
                    } ${
                      e.reverse ? "text-end pl-[6vw]" : ""
                    }  text-[1.2vw] leading-[1.5vw]`}
                  >
                    {e.body}
                  </p>

                  {index != items.length - 1 && (
                    <div
                      className={` ${
                        e.center ? "hidden" : "flex"
                      } group  mt-[1vw] `}
                    >
                      <button
                        onClick={() => {
                          scrollTo_calendy();
                        }}
                        className={` sm:w-[39vw] capitalize   sm:h-[11.2vw]  w-[10.5vw] h-[3.2vw] rounded-[3vw] sm:rounded-[8.75vw] text-[1.06vw] ${CabinetGrotesk_bold.className} text-[#D01717] bg-[#F3F3F3] `}
                      >
                        get started
                      </button>
                      <External_btn
                        h={"3.2"}
                        w={"3.2"}
                        bg={"#F3F3F3"}
                        img={"blue"}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Processes;
