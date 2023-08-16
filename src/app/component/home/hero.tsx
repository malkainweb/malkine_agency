"use client";

import { useState, useEffect } from "react";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import laptop_black from "../../../../public/home/black_laptop.webp";
import on_black from "../../../../public/home/on_laptop.webp";
import tab from "../../../../public/home/tab.webp";
import phone from "../../../../public/home/phone.webp";

const Home_hero = (props: any) => {
  const { general, animate_text, setgeneral, setanimate_text } = props;
  const [color, setcolor] = useState<any>("white");
  const [c_opacity, setc_opacity] = useState<any>(1);
  const { scrollY } = useScroll();
  const [check, setcheck] = useState(1);
  const width = globalThis.innerWidth;
  const calcwidth = width * 2;

  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [calcwidth / 7, calcwidth / 6],
    // Into these values:
    [1, 0],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    // check for the first animation of te text
    if (latest >= calcwidth / 5) {
      setanimate_text("translateX(-50%)");
    }
    if (latest >= calcwidth / 10) {
      setcolor("black");
    } else if (latest <= calcwidth / 5) {
      setcolor("white");
      setanimate_text("translateX(50vw)");
    }

    if (latest >= calcwidth / 4) {
      setgeneral("-100vw");
      setanimate_text("translateX(-150vw)");
    } else if (latest <= calcwidth / 4 && latest >= calcwidth / 5) {
      setgeneral("0vw");
    }
    if (latest >= calcwidth / 3) {
      setanimate_text("translateX(-150vw)");
      setgeneral("-200vw");
    } else if (latest <= calcwidth / 3 && latest >= calcwidth / 4) {
      setgeneral("-100vw");
    }
    if (latest >= calcwidth / 2) {
      setanimate_text("translateX(-150vw)");
      setgeneral("-300vw");
    } else if (latest <= calcwidth / 2 && latest >= calcwidth / 3) {
      setgeneral("-200vw");
    }
  });
  useMotionValueEvent(opacity, "change", (latest) => {
    setc_opacity(latest);
  });

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   setanimate_text("translateX(50vw)");
  //   setgeneral("0vw ");

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      {" "}
      <motion.div
        className={`w-full  h-[200vw] pt-[11.3vw] bg-[${color}] bg-opacity-[8%] flex flex-col items-center transition duration-[1.5s]`}
        // animate={{ backgroundColor: color }}
        transition={{ duration: 3 }}
      >
        <p className="text-[4.3vw] novabold text-center text-white font-[500] leading-[120%]">
          The best way to predict the <br /> future is to reinvent it
        </p>

        <motion.div
          className="w-[100vw] min-h-[30vw] overflow-visible justify-center flex gap-[50px]"
          style={{
            y: "-2vw",
            zIndex: 1,
            position: "sticky",
            top: "15vw",
            // z: 10,
          }}
        >
          <motion.div
            className="w-auto  absolute z-[30] top-0 left-0 h-[30vw]  flex  "
            animate={{ transform: `translateX(${general})` }}
            transition={{ duration: 1 }}
          >
            <div className="w-[100vw] h-fit  relative ">
              <Image
                priority
                src={laptop_black}
                alt="black laptop"
                className="w-[50vw] h-fit absolute z-[20] top-0 left-[50%]"
                style={{ opacity: c_opacity, transform: "translateX(-50%)" }}
              />
              <Image
                priority
                src={on_black}
                alt="black laptop"
                className="w-[50vw] h-fit absolute z-[10] top-0 left-[50%]"
                style={{ transform: "translateX(-50%)" }}
              />
            </div>

            <motion.div
              className="w-[100vw] flex justify-center "
              animate={{ y: "-8vw" }}
            >
              <Image
                priority
                src={tab}
                className="w-[63vw] h-fit"
                alt="laptop black"
              />
            </motion.div>
            <motion.div
              className="w-[100vw] flex justify-center "
              animate={{ y: "-8vw" }}
            >
              <Image
                priority
                src={phone}
                className="w-[63vw] h-fit"
                alt="laptop black"
              />
            </motion.div>
            <motion.div
              className="w-[100vw] flex justify-center "
              animate={{ y: "-8vw" }}
            >
              <p
                className="  text-[18vw] mt-[5vw] font-[helvetica] font-[700] "
                style={{
                  background:
                    "linear-gradient(180deg, #17BAD0 0%, rgba(0, 0, 0, 0.97) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.5s ease",
                }}
              >
                Malkain
              </p>
            </motion.div>

            {/* </div> */}
          </motion.div>
          <motion.p
            className="text-[16.3vw] absolute top-[-14.5vw] font-[helvetica] font-[700] left-[50%] "
            animate={{ transform: animate_text }}
            transition={{ duration: 1 }}
            style={{
              fontStyle: "normal",
              background:
                "linear-gradient(180deg, #17A4D0 0%, rgba(0, 0, 0, 0.97) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              zIndex: "1",

              // transition: "5.5s ease",
            }}
          >
            Design
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home_hero;
