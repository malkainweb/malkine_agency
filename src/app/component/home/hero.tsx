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

const Home_hero = () => {
  const [color, setcolor] = useState<any>("#1A1919");
  const [animate_text, setanimate_text] = useState("translateX(50vw)");
  const [c_opacity, setc_opacity] = useState<any>(1);
  const [general, setgeneral] = useState<any>("0vw");
  const { scrollY } = useScroll();
  const [check, setcheck] = useState(1);
  const [example, setexample] = useState("sm:sticky");
  const width = globalThis.innerWidth;
  const calcwidth = width * 4;
  const mob_calc_width = width * 5;

  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [
      width >= 651 ? calcwidth / 10 : mob_calc_width / 7,
      width >= 651 ? calcwidth / 7 : mob_calc_width / 6,
    ],
    // Into these values:
    [1, 0],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (width >= 651) {
      if (latest >= calcwidth / 20) {
        setcolor("black");
      }

      if (latest <= calcwidth / 20) {
        setcolor("#1A1919");
      }
      // check for the first animation of te text
      if (latest >= calcwidth / 7) {
        setanimate_text("translateX(-50%)");
      }

      if (latest <= calcwidth / 10) {
        // setcolor("#1A1919");
        setanimate_text("translateX(50vw)");
      }

      if (latest >= calcwidth / 4.5) {
        setgeneral("-100vw");
        setanimate_text("translateX(-150vw)");
      }
      // && latest >= calcwidth / 4.3
      if (latest <= calcwidth / 4.5) {
        setgeneral("0vw");
        // setanimate_text("translateX(-150vw)");
      }
      if (latest >= calcwidth / 3.2) {
        setgeneral("-200vw");
        // }  if (latest <= calcwidth / 2.5 && latest >= calcwidth / 3.5) {
        //   setgeneral("-100vw");
      }
      if (latest >= calcwidth / 1.9) {
        setgeneral("-300vw");
        // }  if (latest <= calcwidth / 2 && latest >= calcwidth / 3) {
        //   setgeneral("-200vw");
      }

      //  the option below is for mobile screens
    } else if (width <= 650) {
      // check for the first animation of te text
      if (latest >= mob_calc_width / 6) {
        setanimate_text("translateX(-50%)");
      } else if (latest <= mob_calc_width / 6) {
        setanimate_text("translateX(50vw)");
      }

      if (latest >= mob_calc_width / 10) {
        setcolor("black");
        setexample("sm:fixed");
      } else if (latest <= mob_calc_width / 6) {
        setcolor("#1A1919");
        // setanimate_text("translateX(50vw)");
      }

      if (latest >= mob_calc_width / 4) {
        setgeneral("-100vw");
        setanimate_text("translateX(-150vw)");
      } else if (latest <= mob_calc_width / 4 && latest >= mob_calc_width / 5) {
        setgeneral("0vw");
      }
      if (latest >= mob_calc_width / 3) {
        setanimate_text("translateX(-150vw)");
        setgeneral("-200vw");
      } else if (latest <= mob_calc_width / 3 && latest >= mob_calc_width / 4) {
        setgeneral("-100vw");
      }
      if (latest >= mob_calc_width / 2) {
        setanimate_text("translateX(-150vw)");
        setgeneral("-300vw");
        setexample("sm:sticky");
      } else if (latest <= mob_calc_width / 2 && latest >= mob_calc_width / 3) {
        setgeneral("-200vw");
        setexample("sm:fixed");
      }
    }
  });
  useMotionValueEvent(opacity, "change", (latest) => {
    setc_opacity(latest);
  });

  useEffect(() => {
    setanimate_text("translateX(50vw)");
    setgeneral("0vw ");
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {" "}
      <motion.div
        className={`w-full sm:h-[450vw] sm:relative  h-[300vw] pt-[11.3vw]  flex flex-col items-center transition duration-[1.5s]`}
        // animate={{ backgroundColor: color }}
        transition={{ duration: 3 }}
        style={{ backgroundColor: color }}
      >
        <p className="text-[4.3vw] sm:text-[6vw] novabold text-center text-whbte font-[500] leading-[120%] sm:absolute sm:top-[47vw]  text-white ">
          The best way to predict the <br /> future is to reinvent it
        </p>

        <motion.div
          className={`w-[100vw] min-h-[30vw] sm:h-[80vw] left-0 overflow-visible top-[15vw] sm:top-[49vw] justify-center flex gap-[3.3vw] sticky ${example}`}
          style={{
            y: "-2vw",
            zIndex: 1,
            // position: "-webkit-sticky",
            // top: "15vw",
            // z: 10,
          }}
        >
          <motion.div
            className="w-auto  absolute z-[30] top-0 left-0 h-[30vw]  sm:top-[5vw]  flex  "
            animate={{ transform: `translateX(${general})` }}
            transition={{ duration: 1 }}
          >
            <div className="w-[100vw] h-fit sm:top-[7vw] relative ">
              <Image
                priority
                src={laptop_black}
                alt="black laptop"
                className="w-[50vw] sm:hidden h-fit absolute z-[20] top-0 left-[50%]"
                style={{ opacity: c_opacity, transform: "translateX(-50%)" }}
              />
              {/* mobile image */}
              <Image
                priority
                src={laptop_black}
                alt="black laptop"
                className="w-[50vw] sm:w-[85vw] hidden sm:block h-fit absolute z-[20] top-0 left-[50%]"
                style={{ opacity: c_opacity, transform: "translateX(-50%)" }}
              />

              {/* destop and then mobile underneat it  */}
              <Image
                priority
                src={on_black}
                alt="black laptop"
                className="w-[50vw] sm:w-[85vw] h-fit absolute z-[10] top-0 left-[50%]"
                style={{ transform: "translateX(-50%)" }}
              />
            </div>

            <motion.div
              className="w-[100vw] flex justify-center "
              animate={{ y: "-11.5vw" }}
            >
              <Image
                priority
                src={tab}
                className="w-[63vw] sm:w-[85vw] h-fit"
                alt="laptop black"
              />
            </motion.div>
            <motion.div
              className="w-[100vw] flex justify-center "
              animate={{ y: "-12vw" }}
            >
              <Image
                priority
                src={phone}
                className="w-[63vw] sm:w-[85vw] h-fit"
                alt="laptop black"
              />
            </motion.div>
            <motion.div
              className="w-[100vw] h-[35vw]  sm:h-[50vw] flex justify-center "
              animate={{ y: "-8vw" }}
            >
              <p
                className="  text-[18vw] sm:text-[23vw] mt-[5vw]  font-[helvetica] font-[700] "
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
            className="text-[16.3vw] h-[25vw] sm:h-[35vw] sm:text-[25vw] sm:top-[-11vw] absolute top-[-14.5vw] font-[helvetica] font-[700] left-[50%] "
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
