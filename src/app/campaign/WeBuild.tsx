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
    // offset: ["10% 100%", "100% 100%"], // Start when 30% enters, end when 10% leaves
  });

  const progressPercentage = useTransform(
    scrollYProgress,
    [0, 1],
    ["50%", "-50%"]
  );

  const itemRefs = useRef<any>([]);

  // this is for using gsap
  useEffect(() => {}, []);
  return (
    <>
      <h2
        className={`pt-[3rem] pb-[2rem] text-center ${NeueHaasDisplay_bold.className} text-4xl`}
      >
        {" "}
        We BUILD{" "}
      </h2>
      {/* the wrapper */}
      <div
        className={`w-full  md:w-[100rem]  bg-black  md:max-w-full mx-auto flex items-end min-h-[100vh] relative  flex-col`}
        // style={{ height: `${items.length * 30}vh` }}
        ref={sectionRef}
      >
        <div className="sticky top-0 left-0 w-full h-[45vh]  z-[20] bg-gradient-to-b from-black via-[black]"></div>

        <div className="flex justify-center pb-[0vh] items-center  overflow-hidden flex-coln mb-[-0vh]  bottom-0 h-full bg-black  w-full ">
          <motion.div
            style={
              {
                // translateY: progressPercentage,
                // transition: "0.5s ease-out",
              }
            }
            className=" gap-[5rem] h-fit flex flex-col  w-full"
          >
            {/* the customized scroll bar ends */}
            {items.map((e, index) => {
              return (
                <div key={index}>
                  <WeBuildCards
                    arr_ref={itemRefs.current[index]}
                    index={index}
                    data={e}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="sticky bottom-0 left-0 w-full h-[45vh]  z-[20] bg-gradient-to-t from-black via-[black]"></div>
      </div>
    </>
  );
};

export default WeBuild;
