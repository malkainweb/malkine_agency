"use client";

import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { NeueHaasDisplay_bold, NeueHaasDisplay_roman } from "../utils/fonts";

const WeBuildCards = ({
  data,

  yvalue,
}: any) => {
  const ref = useRef(null);
  const text_ref = useRef(null);
  const [translate_move, settranslate_move] = useState(10);

  // Get scroll progress for the element
  const { scrollYProgress } = useScroll({
    target: ref, // Target the specific element
    offset: ["20% 100%", "100% 0%"], // Start when 30% enters, end when 10% leaves
  });

  // Map scroll progress to a percentage value
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.4, 0.9]);
  const fontsize = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["2.4rem", "3rem", "2.4rem"]
  );

  return (
    <div ref={ref} className={`  w-full `}>
      {/* text that would be animated */}
      <motion.div
        ref={text_ref}
        // style={{ opacity , }}
        className={` ${NeueHaasDisplay_bold.className}  capitalize flex-shrink-0 `}
      >
        {" "}
        <motion.p
          style={{ fontSize: fontsize, transition: "0.1s ease-out" }}
          className=" text-center text-white"
        >
          {data.des}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default WeBuildCards;
