"use client";
import ReactPlayer from "react-player";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Preloader = (props: any) => {
  const { played, setplayed, opacity_loader } = props;
  const [new_height, setnew_height] = useState<any>("1.3");
  const [new_width, setnew_width] = useState<any>("1.3");
  // const videoref = useRef<any>(null);

  const x = useMotionValue(0);

  // this is where the magic happens
  // const scroll_lever = useTransform(
  //   x,
  //   // Map x from these values:
  //   [4, 4.7],

  //   // Into these values:
  //   [1, 0],
  // );
  // useMotionValueEvent(scroll_lever, "change", (latest) => {
  //   console.log(latest);
  //   setopacity(latest);
  //   // console.log(x)
  // });
  return (
    <div
      style={{
        transform: `scale( ${new_width} , ${new_height})`,
        opacity: opacity_loader,
        transition: "0.7s ease",
      }}
      className=" w-full h-full transition duration-[1s] bg-[#1B1819] opacity-[100%] fixed flex justify-center items-center top-0 left-0 z-[99999] "
    >
      <ReactPlayer
        className={`w-full h-full border2  `}
        url="/preloader.webm"
        width={"100%"}
        height={"100%"}
        playing={true}
        loop={true}
        controls={false}
        volume={0}
        onProgress={(progress) => {
          setplayed(progress.playedSeconds);
        }}
      />
      {/* <video
        autoPlay
        ref={videoref}
        loop
        muted
        preload="metadata"
        className={`w-full h-full border2  `}
        src="/preloader.webm"
      ></video> */}
    </div>
  );
};

export default Preloader;
