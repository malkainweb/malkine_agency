"use client";
import Image from "next/image";
import copyPaste from "@/../public/campaign/MalkainIsForYouIf/CopyAndPaste.webp";
import DontWantBeg from "@/../public/campaign/MalkainIsForYouIf/DontWantBeg.webp";
import bgLine from "@/../public/campaign/MalkainIsForYouIf/bgLine.png";
import DontWantLeftBehind from "@/../public/campaign/MalkainIsForYouIf/DontWantLeftBehind.webp";

import { scrollTo_calendy } from "../utils/scroll_to_calendy";
import {
  NeueHaasDisplay_bold,
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "../utils/fonts";

const MalkainIsForYouIf = () => {
  const items = [
    {
      step_text: "STEP 01: GET STARTED",
      heading: "No copy & paste",
      top: "1vw",
      body: "You don’t want to work with an agency that just copy & pastes templates",
      img: copyPaste,
      //   reverse: true,
    },
    {
      step_text: "STEP 02: Search",
      heading: "Don’t wanna beg ",
      top: "1vw",

      body: "You don’t want to work with an agency that you have to beg to do the work you’ve paid for.",
      img: DontWantBeg,
      reverse: true,
    },

    {
      step_text: "STEP 03: Software",
      heading: "Don’t wanna be left behind",
      mobile_top: "10vw",
      body: "You don’t want to be abandoned after the website is built.",
      img: DontWantLeftBehind,
      //   reverse: true,
    },
  ];
  return (
    <>
      <div className="w-full flex   flex-col items-center mb-[4vw] sm:gap-[5vw] sm:my-[15vw] ">
        <h2
          className={`pt-[3rem] pb-[2rem] text-center ${NeueHaasDisplay_bold.className} text-4xl`}
        >
          {" "}
          Malkain is <br /> for you IF
        </h2>

        {/* the bottom process and the mapping function */}
        <div className=" w-[70vw] sm:w-full sm:pl-[7vw] sm:pr-[3vw]   flex flex-col items-center justify-between  gap-[12vw] relative">
          <Image
            src={bgLine}
            alt="line"
            className="w-[4.2vw]  h-full  hidden sm:block absolute left-[1.5vw]"
          />
          {items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                // style={{
                //   marginTop:
                //     window && window.innerWidth > 650 ? e.top : e.mobile_top,
                // }}
                className={` sm:h-auto   ${e.top ? `mt-[${e.top}] ` : ""} ${
                  e.mobile_top ? `sm:mt-[${e.mobile_top}]` : ""
                }  gap-[7vw] sm:gap-[5vw]  sm:flex-col sm:w-full  ${
                  e.center
                    ? "w-[26vw] h-[20vw]  sm:w-[96vw] sm:h-auto sm:pt-[14vw] sm:pb-[7vw] sm:px-[4vw] sm:rounded-[7vw] sm:translate-x-[-3%]  bg-[#F8F8F8] rounded-[2vw] items-center z-[99] px-[2vw]"
                    : "w-full h-auto items-start"
                }    flex justify-center  ${
                  e.reverse ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {e.img && (
                  <div
                    className={`w-[50%]  rounded-[20px] overflow-hidden sm:w-full  ${
                      e.reverse ? "justify-start" : "justify-end"
                    }  flex  `}
                  >
                    <Image
                      src={e.img}
                      alt={e.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* the body  */}
                <div
                  className={`  sm:gap-[1rem]  sm:items-start  ${
                    e.center
                      ? "w-full b items-center text-center "
                      : "w-[50%] sm:w-full"
                  } flex flex-col gap-[0.7vw] ${
                    e.reverse ? "items-end" : "items-start"
                  }  `}
                >
                  {/* <div className="flex justify-center items-center w-[11.2vw] sm:w-[40vw] sm:h-[7.9vw] sm:rounded-[10vw]   h-[2.2vw] border-[0.07vw] border-black rounded-[2.9vw]">
                    <p
                      className={`${NeueHaasDisplay_roman.className} text-[0.9vw] sm:text-[3.2vw] uppercase`}
                    >
                      {e.step_text}
                    </p>
                  </div> */}
                  <h2
                    className={`${NeueHaasDisplay_medium.className} ${
                      e.reverse ? "text-end" : ""
                    }  text-3xl sm:pr-[5rem]`}
                  >
                    {e.heading}
                  </h2>

                  <p
                    className={`${
                      NeueHaasDisplay_roman.className
                    } text-lg opacity-50 sm:p-0 sm:text-start  ${
                      e.center == true
                        ? "p-0"
                        : e.reverse
                        ? "text-end pl-[6vw]"
                        : "pr-[6rem]"
                    }  `}
                  >
                    {e.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MalkainIsForYouIf;
