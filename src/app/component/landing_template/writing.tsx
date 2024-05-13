"use client";

import { useRef, createRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import text_img from "../../../../public/landingpage_template/text_img.webp";
import Image from "next/image";
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

const Writing = () => {
  const content = [
    "Great",
    "architects",
    "design",
    "buildings",
    "that",
    "inspire",
    "but",
    "let's",
    "be",
    "honest,",
    "most",
    "architect",
    "websites",
    "leave",
    "a",
    "lot",
    "to",
    "be",
    "desired.",
    "We",
    "get",
    "it.",
    "You're",
    "passionate",
    "about",
    "creating",
    "spaces",
    "that",
    "amaze,",
    "but",
    "wrestling",
    "with",
    "website",
    "builders",
    "isn't",
    "exactly",
    "your",
    "dream",
    "project.",
    "That's",
    "where",
    "we",
    "come",
    "in.",
  ];

  const second_content = [
    "We're",
    "a",
    "web",
    "design",
    "firm",
    "obsessed",
    "with",
    "crafting",
    "beautiful",
    "and",
    "functional",
    "websites",
    "for",
    "architects",
    "like",
    "you.",
    "We",
    "translate",
    "your",
    "vision",
    "into",
    "stunning",
    "online",
    "portfolios",
    "that",
    "showcase",
    "your",
    "work",
    "with",
    "the",
    "same",
    "care",
    "and",
    "commitment",
    "you",
    "put",
    "into",
    "every",
    "building.",
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
      <div className="flex flex-col items-center gap-0 sm:gap-[5vw] w-full ">
        {/* the first text  */}
        <div className="template_outer ">
          <div className="template_inner">
            <p className="template_dav">
              {content.map((item: any, index: any) => (
                <ContentLine key={index} content={item} />
              ))}
            </p>
          </div>
        </div>
        <Image
          src={text_img}
          alt="about image"
          className=" w-[30vw] h-fit sm:w-[80vw] "
        />
        {/* the second text  */}
        <div className="template_outer ">
          <div className="template_inner">
            <p className="template_dav">
              {second_content.map((item: any, index: any) => (
                <ContentLine key={index} content={item} />
              ))}
            </p>
          </div>
        </div>

        {/* the button */}
        <div className="w-full flex justify-center pt-[1vw] sm:pt-[3vw]">
          <Link
            href="contact"
            className="  text-[20px] h-auto font[500]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808] sm:text-[3.5vw] sm:mb-[18vw] sm:mt-[2vw]"
          >
            Let{"'"}s Build <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Writing;