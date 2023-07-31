"use client";

import {
  useInView,
  useTransform,
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import ReactPlayer from "react-player";
import React, { useState, useEffect, useRef } from "react";
import Header from "../navigation/header";

const Home_hero = () => {
  const [check, setcheck] = useState<any>();
  const [oldcheck, setoldcheck] = useState<any>(0);
  const [bottom, setbottom] = useState<any>("");
  const [position, setposition] = useState<any>("sticky");
  const [top, settop] = useState<any>("0px");
  const { scrollY } = useScroll();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  // console.log(scrollY);
  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [0, check],
    // Into these values:
    [0, 7.8],
  );

  const width = window.innerWidth;
  const newwidth = 0.4 * width;

  // set the new width
  useEffect(() => {
    setcheck(newwidth + 500);
    return;
  }, [newwidth]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    // if (latest >= 170 && latest < 1107) {
    //   setposition("sticky");
    //   settop("0px");
    //   setbottom("");
    // }
  });
  useMotionValueEvent(opacity, "change", (latest) => {
    console.log("Page value: ", latest);
    setoldcheck(latest);
  });
  // Seek the video forward when the 'check' state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = oldcheck;
    }
  }, [oldcheck]);
  return (
    <>
      <motion.div
        className="w-full h-[140vw] bg-black  "
        animate={{ position: "relative" }}
      >
        <motion.video
          src="home/laptop.webm"
          id="vid"
          className="w-full "
          ref={videoRef}
          preload={"auto"}
          style={{ position: "sticky", top: "0px" }}
          loop
          onLoadStart={() => {
            console.log("onLoadStart", new Date());
          }}
          onLoad={() => {
            console.log("onLoad", new Date());
          }}
        ></motion.video>
      </motion.div>
    </>
  );
};

export default Home_hero;
