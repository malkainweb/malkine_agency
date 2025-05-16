import modamu from "../../../public/home/modamu.png";
import climonsigh from "../../../public/home/climonsight.png";
import img_1 from "../../../public/home/logos/1.png";
import img_2 from "../../../public/home/logos/2.png";
import img_3 from "../../../public/home/logos/3.png";
import img_4 from "../../../public/home/logos/4.png";
import img_5 from "../../../public/home/logos/5.png";
import img_6 from "../../../public/home/logos/6.png";
import img_7 from "../../../public/home/logos/7.png";
import img_8 from "../../../public/home/logos/8.png";
import img_9 from "../../../public/home/logos/9.png";
import img_10 from "../../../public/home/logos/10.png";
import img_11 from "../../../public/home/logos/11.png";
import img_12 from "../../../public/home/logos/12.png";
import Image from "next/image";
// import External_btn from "../general_component/external_btn";
// import { scrollTo_calendy } from "../utils/scroll_to_calendy";
import External_btn from "../utils/external_btn";
import {
  NeueHaasDisplay_light,
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "../utils/fonts";
import Go_high_level_form from "./contact_us_pop_up";
import { useState } from "react";

const Brands = () => {
  const logos = [
    { img: img_1 },
    { img: img_2 },
    { img: img_3 },
    { img: img_4 },
    { img: img_5 },
    { img: img_6 },
    { img: img_7 },
    { img: img_8 },
    { img: img_9 },
    { img: img_10 },
    { img: img_11 },
    { img: img_12 },
  ];

  const [go_high_level_start_anime, setgo_high_level_start_anime] =
    useState(false);
  return (
    <>
      {go_high_level_start_anime && (
        <Go_high_level_form
          // nav_items={nav_items}
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
      <div className="  gap-[5vw] pb-[4vw] pt-[5vw] sm:bg-none  bg-white sm:gap-[5vw] sm:mt-0 sm:pb-[10vw]    sm:w-full flex flex-col sm:justify-between sm:items-start">
        <div className="flex sm:flex-col sm:gap-[3vw] items-center sm:items-start flex-row sm:justify-start justify-between sm:px-[3vw] px-[5vw]">
          <h2
            className={`${NeueHaasDisplay_roman.className} leading-[4.5vw] text-[4.2vw] sm:text-[7vw]  sm:leading-[9vw] sm:px-[2vw]`}
          >
            We are trusted by leading <br className="sm:hidden" />
            organizations{" "}
          </h2>
          <p
            className={`${NeueHaasDisplay_light.className} hidden sm:block sm:text-[3.72vw] text-[1.4vw] sm:px-[3vw]`}
          >
            We are proud to have collaborated with some of the most innovative
            and influential organizations brands in the world.{" "}
          </p>

          {/* now the button */}
          <div className="flex justify-start sm:px-[3vw]">
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
              className={` sm:w-[39vw] sm:block hidden sm:h-[11.2vw] w-[13.5vw] h-[4.5vw] rounded-[0.73vw] sm:rounded-[8.75vw] sm:text-[3.5vw] ${NeueHaasDisplay_roman.className} bg-[#EE2020] text-white`}
            >
              Get started
            </button>
            <div className="sm:hidden flex group ">
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
                className={` sm:w-[39vw] capitalize   sm:h-[11.2vw] w-[13.5vw] h-[4.2vw] rounded-[3vw] sm:rounded-[8.75vw] text-[1.1vw] ${NeueHaasDisplay_roman.className} bg-[#EE2020] text-white`}
              >
                get started
              </button>
              <External_btn
                h={"4.2"}
                w={"4.2"}
                bg={"#EE2020"}
                img={"blue"}
                //   arrow_icon={arrow_icon}
                //   btn_bg_color={btn_bg_color}
              />
              {/* <External_btn /> */}
            </div>
          </div>
        </div>
        <div className=" sm:w-full  sm:h-[25vw] h-[9.5vw]  relative overflow-scroll hide_scroll_bar">
          <div className="absolute innovation_translate top-0 gap-[2vw] px-[5vw] sm:w-auto sm:px-[3vw] h-[9.3vw] sm:h-[23vw] flex sm:gap-[3vw]  sm:left-0">
            {logos.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="sm:w-[24.3vw] rounded-[2vw] sm:rounded-[3vw] w-[9vw] h-[9vw] flex justify-center items-center sm:h-full bg-[#F0F2FF] drop-shadow-sm"
                >
                  <Image
                    src={e.img}
                    alt="logos"
                    className="sm:w-[20vw] w-[7.2vw] h-fit"
                  />
                </div>
              );
            })}
            {logos.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="sm:w-[24.3vw] rounded-[2vw] sm:rounded-[3vw] w-[9vw] h-[9vw] flex justify-center items-center sm:h-full bg-[#F0F2FF] drop-shadow-sm"
                >
                  <Image
                    src={e.img}
                    alt="logos"
                    className="sm:w-[20vw] w-[7.2vw] h-fit"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
