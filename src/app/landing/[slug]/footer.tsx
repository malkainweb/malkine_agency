"use client";

import Image from "next/image";
import Link from "next/link";
import { inter_font } from "../../utils/fonts";
import hand from "@/../public/malkain_landing_page/hand.webp";
import Go_high_level_form from "@/app/letsgetteslas/contact_us_pop_up";
import { useState } from "react";

const LandingPageFooter = ({
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

      <div className="w-full bg-black flex px-6 flex-col items-center pt-10 overflow-hidden">
        {/* Button */}
        <button
          onClick={() => {
            setgo_high_level_start_anime(true);
            // window.fbq("track", "ContactUsClick", {
            //   value: "Customer clicked on Contact Us button", // Optional, to track a specific value
            // });
            // window.gtag("event", "ContactUsClick", {
            //   event_category: "Lead Generation",
            //   event_label: "Customer clicked on Contact Us button",
            // });
          }}
          className={`${inter_font.className} bg-[#EA1D2F] sm:w-full  w-[30rem] text-white px-10 py-4 rounded-full text-base flex justify-center items-center gap-2`}
        >
          Let's work together <span>→</span>
        </button>

        {/* Hand */}
        <div className="w-full flex justify-center mt-6 float-hand ">
          <Image
            src={hand}
            alt="hand"
            className="sm:w-[70%] w-[17rem] md:max-w-[50%] h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPageFooter;
