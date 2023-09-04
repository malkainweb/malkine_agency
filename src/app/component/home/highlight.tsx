"use client";

import { useRef, createRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
// import "./styles.css"

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/highlighting-text-on-scroll
 */
const ContentLine = (props: any) => {
  const { content } = props;
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
    <span className="text-container" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text"
        data-text={content}
      />
      <span className="static-text">{content} </span>
    </span>
  );
};

const Highlight = () => {
  const content = [
    "We",
    "Create",
    "Niche",
    "Specific",
    "User",
    "Oriented",
    "Platforms",
    "Utilizing",
    "End",
    "User",
    "Data",
    "To",
    "Build",
    "Websites,",
    "Software,",
    "Web-apps",
    "And",
    "Other",
    "Mediums",
    "That",
    "Personalize",
    "User",
    "Experience.",
  ];

  //   const content = [
  //     "We are a creative agency working ",
  //     "brands - building insightful strategy, ",
  //     "creating unique designs and crafting ",
  //     "experiences that bring positive change",
  //     "and value to people , brands , and the ",
  //     "world around us",
  //   ];
  return (
    <>
      {" "}
      <div className="outer ">
        <div className="inner">
          <p className="dav">
            {content.map((item: any, index: any) => (
              <ContentLine key={index} content={item} />
            ))}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center pb-[6.7vw]">
        <Link
          href="contact"
          className="  text-[20px] h-auto font[500]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808] sm:text-[3.5vw] sm:mb-[18vw] sm:mt-[2vw]"
        >
          Work with us <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Highlight;
