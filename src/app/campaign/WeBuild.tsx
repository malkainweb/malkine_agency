"use client";

import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UspBackground from "@/../public/campaign/UspAnimation/UspBackground.webp";
import small_logo from "../../../public/new_options/small_logo.webp";
import { gsap } from "gsap";
import { NeueHaasDisplay_bold, NeueHaasDisplay_roman } from "../utils/fonts";
import WeBuildCards from "./WeBuildCards";

const WeBuild = () => {
  // the array function
  const [items, setitems] = useState([
    {
      des: "Websites",
    },
    {
      des: "Landing Pages",
    },
    {
      des: "Custom Apps",
    },
  ]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["10% 100%", "100% 100%"], // Start when 30% enters, end when 10% leaves
  });

  const progressPercentage = useTransform(
    scrollYProgress,
    [0, 1],
    ["80%", "-10%"]
  );

  const itemRefs = useRef<any>([]);

  // this is for using gsap
  useEffect(() => {}, []);
  return (
    <>
      {/* the wrapper */}
      <div
        className={`w-full  md:w-[100rem] z-[10000]  bg-black  md:max-w-full mx-auto   h-[200vh] relative `}
        // style={{ height: `${items.length * 30}vh` }}
        ref={sectionRef}
      >
        {" "}
        <h2
          className={`pt-[4rem] pb-[2rem] text-white sticky top-0 z-[100] text-center ${NeueHaasDisplay_bold.className} text-4xl`}
        >
          {" "}
          We BUILD{" "}
        </h2>
        <div className="flex justify-center items-center h-[100vh] bg-black overflow-hidden flex-coln  top-0  sticky   w-full ">
          <div className="absolute top-0 left-0 w-full h-[45vh]  z-[20] bg-gradient-to-b  from-black via-[black]"></div>
          <motion.div
            style={{
              translateY: progressPercentage,
              // transition: "0.5s ease-out",
            }}
            className=" gap-[2rem] h-fit flex flex-col  w-full"
          >
            {/* the customized scroll bar ends */}
            {items.map((e, index) => {
              return (
                <div key={index} className="">
                  <WeBuildCards
                    arr_ref={itemRefs.current[index]}
                    index={index}
                    data={e}
                  />
                </div>
              );
            })}
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full h-[45vh]  z-[20] bg-gradient-to-t from-black via-[black]"></div>
        </div>
      </div>
    </>
  );
};

export default WeBuild;
