"use client";

import Image from "next/image";
import arrow from "../../../public/landingpage_template/right_top_arrow.png";
import blue_arrow from "../../../public/landingpage_template/Icon.png";
import { scrollTo_calendy } from "../utils/scroll_to_calendy";

const External_btn = ({ h, w, bg, img, btn_bg_color, arrow_icon }: any) => {
  return (
    <>
      <div
        onClick={() => {
          scrollTo_calendy();
        }}
        className="bg-[#D01717]  cursor-pointer relative rounded-[100%] overflow-hidden sm:hidden flex justify-center items-center"
        style={{
          width: `${w}vw`,
          height: `${h}vw`,
          backgroundColor: bg ? bg : "",
        }}
      >
        <div
          className={`absolute z-[99] top-[100%] group-hover:top-0  ${
            img != "blue" ? "bg-white" : "bg-[#F3F3F3]"
          }  w-full h-full left-0`}
          style={{
            transition: "0.7s ease",
            backgroundColor: btn_bg_color ? btn_bg_color : "",
          }}
        ></div>
        {/* <div className="w-full h-full absolute top-0 "></div> */}
        <Image
          src={arrow}
          alt="arrow"
          className={` ${
            img == "blue"
              ? "group-hover:opacity-0 z-[99] opacity-100"
              : "opacity-0 group-hover:opacity-100 "
          }  w-[2.3vw] z-[99] h-fit absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]`}
          style={{ width: `${w - 1.3}vw`, transition: "0.7s ease" }}
        />
        <Image
          src={arrow_icon ? arrow_icon : blue_arrow}
          alt="arrow"
          className={` ${
            img != "blue"
              ? "group-hover:opacity-0 z-[99] opacity-100"
              : "opacity-0 group-hover:opacity-100 "
          }  w-[2.3vw] z-[99] h-fit absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]`}
          style={{ width: `${w - 2.7}vw`, transition: "0.7s ease" }}
        />
      </div>
    </>
  );
};

export default External_btn;
