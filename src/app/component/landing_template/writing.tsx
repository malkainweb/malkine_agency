"use client";

import { useRef, createRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import text_img from "../../../../public/landingpage_template/architect_imgaes/what_we_do.webp";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
const ContentLine = (props: any) => {
  const { content, writing_text_color } = props;
  // const contentRef = useRef(null);
  const contentRef = createRef<HTMLSpanElement>();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    // @ts-ignore
    offset: ["end center", "start start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.01], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="template_text-container" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="template_highlighted-text"
        data-text={content}
      />
      <span className="template_static-text">{content} </span>
    </span>
  );
};

const Writing = ({
  writing_one,
  writing_two,
  img,
  writing_text_color,
  btn_bg_color,
  show_btn,
}: any) => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select text elements using the Next.js convention
    const textElements = document.querySelectorAll(
      writing_text_color
        ? `.${writing_text_color}`
        : ".elementor-heading-title",
    );
    // const textElements = document.querySelectorAll(".elementor-heading-title");

    // Loop through each text element
    textElements.forEach((text) => {
      // Apply animation to each text element
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 50%",
          scrub: true,
        },
      });
    });
  }, []); // Run only once on component mount

  return (
    <>
      {" "}
      <div className="flex flex-col mt-[6vw] mb-[2vw] sm;mb-[4vw] sm:mt-[10vw]  items-center gap-[5vw] sm:gap-[5vw] w-full ">
        {/* the first text  */}
        {/* the button */}
        <div className="w-full flex justify-center pt-[1vw] sm:pt-[3vw]">
          {show_btn && (
            <button
              onClick={() => {
                scrollTo_calendy();
              }}
              className="  text-[20px] h-auto font[500]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:opacity-[70%] sm:text-[3.5vw] sm:mb-[18vw] sm:mt-[2vw]"
              style={{ backgroundColor: btn_bg_color ? btn_bg_color : "" }}
            >
              Let{"'"}s Build <i className="bi bi-arrow-right"></i>
            </button>
          )}
        </div>
        <div
          className={` ${
            writing_text_color ? writing_text_color : "elementor-heading-title"
          }  leading-[4.5vw] text-[4.4vw] text-center  w-[83vw] sm:w-[90vw]  sm:text-[7vw] sm:leading-[7vw]`}
        >
          <p>
            {/* {writing_one} {writing_text_color}
            We build all in one solutions from custom{" "}
            <br className="sm:hidden" /> website to custom software using user{" "}
            <br className="sm:hidden" /> oriented designs to create unique{" "}
            <br className="sm:hidden" />
            experiences for your customers. */}
            Get a FREE Gallery Page <br className="hidden sm:block" />
            Re-design for your website once you reach out.{" "}
            <br className="hidden sm:block" />
            OFFER valid only for the month of October
          </p>
        </div>

        {img && (
          <Image
            src={img}
            alt="about image"
            className=" w-[70vw] h-fit sm:w-[90vw] "
          />
        )}

        {/* the second text  */}

        <div
          className={`${
            writing_text_color ? writing_text_color : "elementor-heading-title"
          } leading-[3.9vw] text-[3.3vw] text-center  w-[83vw] sm:w-[93vw]  sm:text-[5vw] sm:leading-[6vw]`}
        >
          <p>{writing_two}</p>
        </div>
      </div>
    </>
  );
};

export default Writing;
