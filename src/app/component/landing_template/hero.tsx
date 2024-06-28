"use client";

import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import Link from "next/link";
import { useEffect, useState } from "react";

const Template_hero = ({
  caption,
  heading,
  size,
  mobile_size,
  desktop_size,
  text_color,
  btn_bg_color,
}: any) => {
  const width = globalThis.innerWidth;
  const [compt_width, setcompt_width] = useState(0);
  useEffect(() => {
    setcompt_width(width);
  }, [width]);
  return (
    <>
      <div className="w-full py-[3vw] flex flex-col items-center sm:gap-[8vw] gap-[3.5vw]  text-center">
        <h1
          style={{
            fontSize:
              size && compt_width < 650
                ? `${mobile_size}vw`
                : `${desktop_size}vw`,
            lineHeight:
              size && compt_width < 650
                ? `${mobile_size}vw`
                : `${desktop_size + 0.5}vw`,
            color: text_color,
          }}
          className={`font_helvetica  text-white text-[5vw]  sm:text-[8vw] px-[7vw]  sm:px-[2vw] ${
            size ? "" : "leading-[5.5vw] sm:leading-[9vw]"
          } `}
        >
          {heading.map((e: any, index: any) => {
            return (
              <span
                style={{ color: e.normal ? e.color : "" }}
                className={`${
                  e.color == "lightgreen"
                    ? "bg-gradient-to-r from-[#BCCC7A] via-[#BCCC7A]  to-[#C6B7B7] inline-block text-transparent bg-clip-text"
                    : ""
                }  ${
                  e.color == "lightred"
                    ? "bg-gradient-to-r from-[#F5848B] via-[#F5848B]  to-[#C6B7B7] inline-block text-transparent bg-clip-text"
                    : ""
                } ${
                  e.color == "blue"
                    ? "bg-gradient-to-r from-[#172392]  to-[#818BE8] inline-block text-transparent bg-clip-text"
                    : ""
                }  `}
                key={index}
              >
                {e.word}{" "}
              </span>
            );
          })}
          {/* Great Architects{" "}
          <span className="bg-gradient-to-r from-[#172392]  to-[#818BE8] inline-block text-transparent bg-clip-text">
            Design
          </span>{" "}
          <br className="hidden sm:block" />
          Great <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-[#172392]   to-[#818BE8] inline-block text-transparent bg-clip-text">
            Buildings
          </span>{" "}
          Not{" "}
          <span className="bg-gradient-to-r from-[#F82727] via-[#F82727]   to-[#DE3B23] inline-block text-transparent bg-clip-text">
            {" "}
            Great Websites
          </span> */}
        </h1>

        <p
          style={{
            color: text_color,
          }}
          // dangerouslySetInnerHTML={{ __html: caption }}
          className="font_helvetica px-[25vw] sm:px-[2vw] sm:text-[3.5vw] sm:leading-[4vw] text-[1.8vw] text-white leading-[2vw]"
        >
          {caption}
        </p>

        <button
          //   href={"contact"}
          onClick={() => {
            scrollTo_calendy();
          }}
          className="nova w-fit  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] hover:opacity-[70%]  sm:text-[3vw]   sm:rounded-[9.75vw] sm:px-[12vw]  sm:py-[4vw] font_helvetica  sm:text-white sm:mt-[2vw] "
          style={{ backgroundColor: btn_bg_color ? btn_bg_color : "" }}
        >
          Let{"'"}s Build! <i className="bi bi-arrow-right sm:hidden"></i>
        </button>
      </div>
    </>
  );
};

export default Template_hero;
