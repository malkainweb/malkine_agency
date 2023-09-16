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
import preloader_logo from "../../../public/logo.webp";
import Image from "next/image";

const Preloader = (props: any) => {
  const { scale, setscale } = props;

  useEffect(() => {
    setscale("scale-[0.9]");
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <div className="w-full h-full border2 fixed top-0 flex justify-center items-center z-[999999] bg-[#1A1919] ">
        <motion.div
          // initial={{ scale: 1.5 }}
          // animate={{ width: "10vw", height: "10vw", scale: 0.7 }}
          // transition={{ duration: 5 }}
          className={`border2  ${scale} w-[15vw] transition duration-[1s] h-auto`}
        >
          <Image
            src={preloader_logo}
            alt="preloader image"
            className="w-full h-fit z-[9999999]"
          />
        </motion.div>
      </div> */}
    </>
  );
};

export default Preloader;
