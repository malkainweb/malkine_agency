"use client";

import Image from "next/image";
import hand from "../../../../public/landingpage_template/footer_hand.webp";
import Link from "next/link";
import { useEffect } from "react";
import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import { NeueHaasDisplay_light } from "@/app/utils/fonts";

const Footer_hand = ({ text_color, btn_bg_color }: any) => {
  return (
    <>
      <div className="w-full h-[63vw] mt-[4vw] sm:h-[150vw]  flex flex-col justify-between items-center ">
        <div className="flex flex-col  ">
          <h3
            style={{
              color: text_color,
            }}
            className={`font_helvetica text-white text-[5vw] sm:text-[10vw] text-center ${NeueHaasDisplay_light.className}`}
          >
            Let{"'"}s Get Started
          </h3>

          {/* the button */}
          <div className="w-full flex justify-center pt-[2vw]">
            <button
              style={{ backgroundColor: btn_bg_color ? btn_bg_color : "" }}
              onClick={() => {
                scrollTo_calendy();
              }}
              className="  text-[1.5vw] h-auto font[500]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:opacity-[70%] sm:text-[3.5vw] sm:mb-[18vw] sm:mt-[2vw]"
            >
              Work with us <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <Image
          src={hand}
          alt="hand"
          className="w-[20vw] translate-x-[30%] move_hand cursor-pointer footer-hand-image  sm:w-[50vw] h-fit"
        />
      </div>
    </>
  );
};

export default Footer_hand;
