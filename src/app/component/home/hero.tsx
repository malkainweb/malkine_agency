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

const Home_hero = (props: any) => {
  const { setloader } = props;
  const [check, setcheck] = useState<any>();
  const [oldcheck, setoldcheck] = useState<any>(7.8);
  const [isBuffering, setIsBuffering] = useState(true);
  const { scrollY } = useScroll();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollDelay = 100;
  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [0, check],
    // Into these values:
    [0, 7.8],
  );
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const width = globalThis.innerWidth; // Access window object only on the client-side

  const windowSize = useRef(
    window ? [window.innerWidth, window.innerHeight] : [],
  );
  // const width = windowSize.current[0];
  const newwidth = 0.4 * width;

  // set the new width
  useEffect(() => {
    setcheck(newwidth + 500);
    return;
  }, [newwidth]);

  useMotionValueEvent(scrollY, "change", (latest) => {});
  useMotionValueEvent(opacity, "change", (latest) => {
    setoldcheck(latest);
  });
  // Seek the video forward when the 'check' state changes
  let timeoutId: NodeJS.Timeout;
  useEffect(() => {
    if (videoRef.current && Number.isFinite(oldcheck)) {
      clearTimeout(timeoutId); // Clear any previous timeout
      timeoutId = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = oldcheck;
        }
      }, scrollDelay);
    }

    return () => {
      clearTimeout(timeoutId); // Clear the timeout on component unmount
    };
  }, [oldcheck, scrollDelay]);

  const handleBufferEnd = () => {
    // setloader(false);
    console.log("buffering is ended" + isBuffering);
  };
  return (
    <>
      <motion.div
        className="w-full h-[120vw] bg-black  "
        animate={{ position: "relative" }}
      >
        <div
          style={{
            position: "sticky",
            top: "0",
            width: "100%",
            height: "0",
            paddingBottom: "56.25%",
            zIndex: 1, // (Optional) Set a higher z-index value if needed to make the video player appear above other elements while scrolling
          }}
        >
          <ReactPlayer
            url="home/laptop4.mp4" // Replace with the actual video URL
            width="100%"
            // cont rols
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            onReady={(e) => {
              e.seekTo(oldcheck, "seconds");
              // setIsBuffering(false);
            }}
            onProgress={handleBufferEnd}
            // onBuffer={() => {
            //   setIsBuffering(true); // Buffering has started
            //   console.log("Video is buffering...");
            // }}
            // // onBuffer={handleBufferEnd}
            // // playing={isBuffering}
            // playing={true}
            // preload={"auto"}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Home_hero;
