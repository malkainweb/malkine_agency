"use client";

import { useEffect, useState, useRef } from "react";
import {
  useInView,
  useTransform,
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import ReactPlayer from "react-player";
import Image from "next/image";
import laptop_black from "../../../../public/home/black_laptop.webp";
import on_black from "../../../../public/home/on_laptop.webp";
import tab from "../../../../public/home/tab.webp";
import phone from "../../../../public/home/phone.webp";

const Home_hero = () => {
  const [check, setcheck] = useState<any>();
  const [color, setcolor] = useState<any>("#101010");
  const [animate_text, setanimate_text] = useState("translateX(250%)");
  const [c_opacity, setc_opacity] = useState<any>(1);
  const [animate_des, setanimate_des] = useState("translateX(0)");
  const [animate_tab, setanimate_tab] = useState("translateX(250%)");
  const [display_des, setdisplay_des] = useState("auto");
  const [animate_phone, setanimate_phone] = useState("translateX(250%)");
  const [display_phone, setdisplay_phone] = useState("0px");
  const [display_tab, setdisplay_tab] = useState("0px");
  const [animate_company, setanimate_company] = useState("translateX(250%)");
  const [display_company, setdisplay_company] = useState("0px");

  const { scrollY } = useScroll();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  // console.log(scrollY);
  const opacity = useTransform(
    scrollY,
    // Map x from these values:
    [0, 300],
    // Into these values:
    [1, 0],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest >= 300) {
      setcolor("black");
      setanimate_text("translateX(-50%)");
    } else if (latest <= 300) {
      setcolor("#101010");
      setanimate_text("translateX(350%)");
    }

    if (latest >= 500) {
      setdisplay_tab("auto");

      setanimate_des("translateX(-250%)");
      setanimate_text("translateX(-350%)");
      setanimate_tab("translateX(0%)");
      setdisplay_des("0px");
      setdisplay_phone("0px");
      setanimate_phone("translateX(250%)");
    } else if (latest <= 500) {
      setdisplay_tab("0px");
      setanimate_des("translateX(0)");
      setdisplay_des("auto");
      setanimate_company("0px");
      setanimate_company("translateX(250%)");
      setanimate_tab("translateX(250%)");
      // setanimate_text("translateX(-50%)");
    }
    if (latest >= 750) {
      setdisplay_tab("0px");
      setanimate_tab("translateX(-250%)");
      setdisplay_phone("auto");
      setanimate_phone("translateX(0%)");
    } else if (latest <= 750 && latest > 500) {
      setanimate_phone("translateX(250%)");
      setdisplay_phone("0");
      setdisplay_tab("auto");
      setanimate_tab("translateX(0px)");
    }

    if (latest >= 1000) {
      setdisplay_phone("0px");
      setanimate_phone("translateX(-250%)");
      setdisplay_company("auto");
      setanimate_company("translateX(0%)");
    } else if (latest <= 1000 && latest > 750) {
      setanimate_company("translateX(250%)");
      setdisplay_company("0");

      setdisplay_phone("auto");
      setanimate_phone("translateX(0px)");
    }
  });
  useMotionValueEvent(opacity, "change", (latest) => {
    console.log("Page value: ", latest);
    setc_opacity(latest);
  });

  return (
    <>
      {" "}
      <motion.div
        className="w-full  h-[2300px] pt-[170px] pb-[100px] flex flex-col items-center "
        animate={{ backgroundColor: color }}
        transition={{ duration: 0.1 }}
      >
        <p className="text-[65px] novabold text-center text-white font-[500] ">
          The best way to predict the <br /> future is to reinvent it
        </p>

        <motion.div
          className="w-auto h-[100vh] flex flex-col"
          style={{
            y: -30,
            zIndex: 1,
            position: "sticky",
            top: "250px",
            opacity: 1,
          }}
        >
          <motion.p
            className="text-[200px] absolute top-[-200px] font-[helvetica] font-[700] left-[50%] "
            animate={{ transform: animate_text }}
            // transition={{duration: 1}}
            style={{
              background:
                "linear-gradient(180deg, #17A4D0 0%, rgba(0, 0, 0, 0.97) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              zIndex: "1",

              transition: "0.5s ease",
            }}
          >
            Design
          </motion.p>
          {/* <div className="w-[600px] h-fit relative top-0 left-0"> */}
          <Image
            src={laptop_black}
            className="w-[700px] h-fit absolute z-[50] top-0 left-0"
            alt="laptop black"
            style={{
              opacity: c_opacity,
              transform: animate_des,
              transition: "0.5s ease",
              height: display_des,
            }}
          />
          <Image
            src={on_black}
            className="w-[700px] h-fit absoulute  z-[45] top-0 left-0"
            alt="laptop black"
            style={{
              transform: animate_des,
              transition: "0.5s ease",
              height: display_des,
            }}
          />
          <Image
            src={tab}
            className="w-[700px] h-fit absoulute  z-[45]  top-0 left-0"
            alt="laptop black"
            style={{
              transform: animate_tab,
              transition: "0.5s ease",
              height: display_tab,
            }}
          />
          <Image
            src={phone}
            className="w-[700px] h-fit absoulute  z-[45]  top-0 left-0"
            alt="laptop black"
            style={{
              transform: animate_phone,
              transition: "0.5s ease",
              height: display_phone,
            }}
          />

          <p
            className="nova w-[700px] text-[150px] mt-[100px] font-[helvetica] font-[700] absoulute  z-[45]  top-0 left-0"
            style={{
              background:
                "linear-gradient(180deg, #17BAD0 0%, rgba(0, 0, 0, 0.97) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: animate_company,
              transition: "0.5s ease",
              height: display_company,
            }}
          >
            MALKINE
          </p>

          {/* </div> */}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home_hero;
