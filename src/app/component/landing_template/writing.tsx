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

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select text elements using the Next.js convention
    const textElements = document.querySelectorAll(".elementor-heading-title");

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
      <div className="flex flex-col items-center gap-[5vw] sm:gap-[5vw] w-full ">
        {/* the first text  */}
        {/* <div className="template_outer ">
          <div className="template_inner">
            <p className="template_dav">
              {content.map((item: any, index: any) => (
                <ContentLine key={index} content={item} />
              ))}
            </p>
          </div>
        </div> */}

        <div className="elementor-heading-title leading-[3.9vw] text-[3.3vw] text-center  w-[83vw] sm:w-[93vw]  sm:text-[5vw] sm:leading-[6vw]">
          <p>
            {" "}
            Great architects design buildings that inspire but let{"'"}s be
            honest, most architect websites leave a lot to be desired. We get
            it. You{"'"}re passionate about creating spaces that amaze, but
            wrestling with website builders isn't exactly your dream project.
            That{"'"}s where we come in.
          </p>
        </div>

        <Image
          src={text_img}
          alt="about image"
          className=" w-[70vw] h-fit sm:w-[90vw] "
        />
        {/* the second text  */}
        {/* <div className="template_outer ">
          <div className="template_inner">
            <p className="template_dav">
              {second_content.map((item: any, index: any) => (
                <ContentLine key={index} content={item} />
              ))}
            </p>
          </div>
        </div> */}

        <div className="elementor-heading-title leading-[3.9vw] text-[3.3vw] text-center  w-[83vw] sm:w-[93vw]  sm:text-[5vw] sm:leading-[6vw]">
          <p>
            We{"'"}re a web design firm obsessed with crafting beautiful and
            functional websites for architects like you. We translate your
            vision into stunning online portfolios that showcase your work with
            the same care and commitment you put into every building.
          </p>
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
