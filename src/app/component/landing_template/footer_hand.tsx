"use client";

import Image from "next/image";
import hand from "../../../../public/landingpage_template/footer_hand.webp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import { NeueHaasDisplay_light } from "@/app/utils/fonts";
import Go_high_level_form from "@/app/letsgetteslas/contact_us_pop_up";

const Footer_hand = ({
  text_color,
  form_link,
  btn_bg_color,
  show_btn,
}: any) => {
  const [go_high_level_start_anime, setgo_high_level_start_anime] =
    useState(false);
  return (
    <>
      {go_high_level_start_anime && (
        <Go_high_level_form
          form_link={form_link}
          // nav_items={nav_items}
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
      <div className="w-full h-auto gap-[2vw] sm:gap-[10vw]  mt-[4vw]   flex flex-col  items-center ">
        <div className="flex flex-col  ">
          <h3
            style={{
              color: text_color,
            }}
            className={`font_helvetica text-white text-[5vw] sm:text-[10vw] text-center ${NeueHaasDisplay_light.className}`}
          >
            {/* Let{"'"}s Work together */}
          </h3>

          {/* the button */}
          {show_btn && (
            <div className="w-full flex justify-center pt-[2vw]">
              <button
                style={{ backgroundColor: btn_bg_color ? btn_bg_color : "" }}
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
                className="  text-[1.5vw] h-auto font[500]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:opacity-[70%] sm:text-[3.5vw] sm:mb-[18vw] sm:mt-[2vw]"
              >
                Let{"'"}s Work together{" "}
                <i className="bi pl-[0.6rem] bi-arrow-right"></i>
              </button>
            </div>
          )}
        </div>
        <Image
          src={hand}
          alt="hand"
          className="w-[20vw] translate-x-[30%]  cursor-pointer footer-hand-image  sm:w-[50vw] h-fit"
        />
      </div>
    </>
  );
};

export default Footer_hand;
