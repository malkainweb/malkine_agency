"use client";

import localFont from "next/font/local";
import next_works from "../../../../public/landingpage_template/next_works.png";
import prev_works from "../../../../public/landingpage_template/prev_works.png";
// the order images
import img_1 from "../../../../public/landingpage_template/services/1.webp";
import img_2 from "../../../../public/landingpage_template/services/2.webp";
import img_3 from "../../../../public/landingpage_template/services/3.webp";
// import plus from "../../../public/services/why_malkain_health/plus.png";
import { useMotionValueEvent, useScroll } from "framer-motion";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import {
//   CabinetGrotesk_bold,
//   CabinetGrotesk_medium,
// } from "../general_component/fonts";

const Services_template = ({
  services,
  color,
  text_color,
  mobile_control_next_arrow,
  mobile_control_prev_arrow,
}: any) => {
  const [active_index, setactive_index] = useState<any>(0);
  const [size, setsize] = useState<any>(null);

  const width = globalThis.innerWidth;

  const items = [
    {
      heading: "Web Design",
      body: "Enhance your portfolio online with our specialized web design services for architecture firms.From intuitive navigation to visually striking elements, our comprehensive approach aims to elevate your brand's visibility and credibility in the competitive online landscape",
      deg: 30,

      img: img_1,
    },

    {
      heading: "Website SEO",
      body: "When clients turn to Google for architectural services, they should find you. Our specialized approach is meticulously crafted to propel your firm to higher rankings, ensuring that your digital footprint stands out amidst the vast online landscape.",
      img: img_2,
      deg: -30,
    },
    {
      heading: "Custom Software",
      body: "From seamlessly intuitive client management systems to the creation of secure, highly scalable mobile applications, our commitment is to provide unparalleled solutions catering to the diverse needs of both internal and external client relations tools to enhance growth and scale systemically. ",
      img: img_3,
      deg: 10,
    },
  ];

  // const check_width = 1120;
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest >= width * 1 && latest <= width * 1.3) {
  //     setdesktop_active_desktop(0);
  //   } else if (latest >= width * 1.3 && latest <= width * 1.7) {
  //     setdesktop_active_desktop(1);
  //   } else if (latest >= width * 1.7) {
  //     setdesktop_active_desktop(2);
  //   }
  // });
  return (
    <>
      {/* this is for mobile */}
      <div className="w-full font_helvetica py-[4vw] sm:bg-gradient-to-b sm:my-0 mb-[4vw] items-center  h-auto  gap-[2vw]  px-[2vw]  flex flex-col sm:gap-[7vw] sm:pt-[5vw]   sm:pb-[10vw]">
        <h2
          className={`sm:text-[10vw] relative w-fit sm:leading-[10.5vw] font_helvetica text-white text-[3.2vw] sm:mb-0  font-bold text-center  `}
          style={{ color: text_color }}
        >
          Services
        </h2>
        <p
          style={{ color: text_color }}
          className={`  sm:text-[3.3vw] text-[1.3vw] text-center text-white `}
        >
          We understand the unique challenges and opportunities{" "}
          <br className="" /> that the architectural industry faces in the
          digital age. <br className="hidden sm:block" /> Here{" "}
          <br className="sm:hidden" /> are some services we offer:
        </p>
        {/* now the main functions */}
        <div className="w-full sm:relative flex sm:block gap-[3vw] px-[11vw]   h-auto sm:top-0  sm:h-[105vw] ">
          {services.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={`sm:w-[72vw] sm:z-[40]  font_helvetica relative sm:rounded-[6vw]  rounded-[2.5vw] overflow-hidden w-full h-[33vw] ${
                  active_index == index
                    ? `sm:rotate-[0deg]`
                    : index == 1
                    ? `sm:rotate-[-6deg]`
                    : index == 2
                    ? "sm:rotate-[6deg]"
                    : ""
                } sm:left-[50%] sm:top-0 sm:absolute sm:translate-x-[-50%]   sm:h-[104vw] flex flex-col justify-between shadow-2xl shadow-[#ffffff21]   ${
                  active_index > index
                    ? "sm:opacity-[0%] sm:translate-x-[100%]"
                    : "sm:opacity-[100%] "
                }  `}
                style={{
                  // opacity: active_index < index ? 0 : 1,
                  transition: "0.8s ease",
                  zIndex: items.length - index + 1,
                }}
              >
                {/* the image */}
                <Image src={e.img} alt={e.title} className="w-full h-fit" />
                <div
                  className="w-full sm:h-[53vw]     text-[black] items-center rounded-[1.8vw] h-[14.5vw] g  sm:rounded-[6vw] flex flex-col justify-start pt-[1vw] sm:pt-0 sm:justify-center bg-white bg-opacity-[23%] backdrop-blur-2xl gap-[1vw] sm:gap-[3vw] absolute bottom-0 left-0"
                  style={{ color: color ? "white" : "" }}
                >
                  <h4
                    className={` font-bold px-[3vw] text-center sm:leading-[6vw] leading-[1.4vw]  text-[1.4vw] sm:text-[5vw]`}
                  >
                    {e.heading}
                  </h4>
                  <p
                    className={`sm:text-[3.3vw] text-[1vw] px-[1vw] sm:px-[3vw] leading-[1.3vw] font-[400] sm:leading-[4.5vw] text-center`}
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
            src={
              mobile_control_prev_arrow ? mobile_control_prev_arrow : prev_works
            }
            onClick={() => {
              if (active_index > 0) {
                setactive_index(active_index - 1);
              }
            }}
            alt="prev "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
          <Image
            src={
              mobile_control_next_arrow ? mobile_control_next_arrow : next_works
            }
            onClick={() => {
              if (active_index < items.length - 1) {
                setactive_index(active_index + 1);
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

export default Services_template;
