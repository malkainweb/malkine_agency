"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UspBackground from "@/../public/campaign/UspAnimation/UspBackground.webp";
import small_logo from "../../../public/new_options/small_logo.webp";
import { gsap } from "gsap";
import { NeueHaasDisplay_bold, NeueHaasDisplay_roman } from "../utils/fonts";

const MalkainIsForYouIf = () => {
  const items = [
    {
      body: "You want a website that is uniquely designed for your brand, not just another template.",
    },
    {
      body: "You need a high-performing site that loads fast and converts visitors into customers.",
    },
    {
      body: "You prefer working with a team that prioritizes strategy, design, and user experience.",
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // offset: ["end start", "end 50%"],
  });
  const width = globalThis.innerWidth;
  useEffect(() => {
    setcalwidth(width);
  }, [width]);
  const [calwidth, setcalwidth] = useState(0);
  const [yvalue, setyvalue] = useState(1);
  const [scale_y2value, setscale_y2value] = useState(0);
  const [height, setheight] = useState(1);

  const y = useTransform(scrollYProgress, [0, 1], [1, items.length + 0.5]);
  const scale_y = useTransform(scrollYProgress, [0, 1], [10, 1]);
  const parent_height = useTransform(scrollYProgress, [0, 1], [1, 10]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
    // console.log(latest);
  });
  useMotionValueEvent(scale_y, "change", (latest) => {
    setscale_y2value(latest);
  });
  useMotionValueEvent(parent_height, "change", (latest) => {
    setheight(latest);
  });

  // Dynamically creating an array with the same length as `items`

  // this logic is what achieves styling on here
  const dynamicArray_scaling = Array(items.length)
    .fill("")
    .map((_, index) => index);

  const calculateScale = (index: number, data_array: any[], yvalue: number) => {
    const minScale = Math.min(...data_array) / 2 + scale_y2value / 8;
    const maxScale = 1;
    const scaleFactor = (yvalue - (index + 1)) / 6; // adjust this value to control the scaling speed
    const scale = maxScale - (maxScale - minScale) * scaleFactor;

    return scale;
  };

  const itemRefs = useRef<any>([]);

  // this is for using gsap
  useEffect(() => {
    itemRefs.current.forEach((ref: any, index: any) => {
      gsap.to(ref, {
        opacity:
          index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
            ? 1
            : index + 1 - yvalue <= 0
            ? 1
            : 0,
        transform:
          index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
            ? `translateY(${
                (index + 2 - yvalue) * 100 - 150 * (-index + yvalue)
              }%) translateX(-50%)`
            : index + 1 - yvalue <= 0
            ? `translateY(${
                -50 -
                (yvalue - (index + 1)) * (calwidth < 765 ? 15 / 1.1 : 15 / 1.2)
              }%) translateX(-50%)  scale(${calculateScale(
                index,
                dynamicArray_scaling,
                yvalue
              )})
`
            : `translateY(${yvalue + 1 + index * 100}%) translateX(-50%)`,

        filter:
          index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
            ? ``
            : index + 1 - yvalue <= -0.8
            ? `blur(${(yvalue - index) * 1.2}px)`
            : ``,
        duration: 0.4, // Adjust duration as needed
      });
    });
  }, [yvalue]);
  return (
    <>
      {/* the wrapper */}
      <div
        className={`w-full  md:w-[100rem]  z-[10000] bg-black/40 md:max-w-full mx-auto flex items-end  relative`}
        style={{ height: `${items.length * 100}vh` }}
        ref={sectionRef}
      >
        <div className="flex justify-center items-center  overflow-hidden  sticky bottom-0 h-[100vh]  w-full ">
          <Image
            src={UspBackground}
            alt="usp background image"
            className="w-full h-full hidden sm:block object-cover"
          />
          <h2
            className={`pt-[3rem] pb-[2rem] text-center text-white absolute top-0 ${NeueHaasDisplay_bold.className} text-4xl`}
          >
            {" "}
            Malkain is <br /> for you IF
          </h2>

          {/* the customized scroll bar ends */}
          {items.map((e, index) => {
            return (
              <div
                key={index}
                ref={(el: any) => (itemRefs.current[index] = el)}
                className={`  absolute top-[50%] translate-x-[-50%] rounded-[30px] left-[50%] w-[50%]  sm:w-[90%] md:h-[30rem] md:gap-0 gap-[2rem] p-[3rem] sm:p-[10%] ${
                  index % 2
                    ? "md:flex-row-reverse flex-col-reverse"
                    : "md:flex-row flex-col"
                }  flex rounded-[16px] bg-black/40  sm:bg-black/30 backdrop-blur-2xl text-white`}
              >
                <p className={`${NeueHaasDisplay_roman.className} text-2xl`}>
                  {e.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MalkainIsForYouIf;
