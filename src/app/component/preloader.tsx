"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import preloader_logo from "../../../public/logo.webp";
import Image from "next/image";

const Preloader = (props: any) => {
  const {
    scale,
    setscale,
    preloader_img_opacity,
    setpreloader_img_opacity,
    beginlines,
    setbeginlines,
    traingle_color,
  } = props;
  const [line_opacity, setline_opacity] = useState(1);
  const [trans1, settrans1] = useState("-100vh");
  const [trans2, settrans2] = useState("-200vh");
  const [trans3, settrans3] = useState("-200vh");
  const [trans4, settrans4] = useState("-200vh");
  const [trans5, settrans5] = useState("100vh");
  const [transX1, settransX1] = useState("0vw");
  const [transY1, settransY1] = useState("0vh");
  const [bgcolor, setbgcolor] = useState(
    traingle_color ? traingle_color : "black",
  );

  useEffect(() => {
    setscale(0.8);
    setpreloader_img_opacity(1);
    settrans1("-20vh");
    settrans2("-35vh");
    settrans3("35vh");
    settrans4("30vh");
    settrans5("0vh");

    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setline_opacity(0);
      setscale(0.3);
      setpreloader_img_opacity(0);
      settransX1("-50vw");
      settransY1("-200vh");
      setbgcolor("");
      setbeginlines(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, [trans5]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setline_opacity(0);
    }, 2000);
    return () => clearTimeout(timer);
  }, [trans5]);
  return (
    <>
      {/* bg-[#1A1919] */}
      <div
        className="w-full h-full  fixed top-0 flex justify-center items-center z-[999999] transition duration-[2s] sm:hidden "
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <div
          className={`absolute bottom-[-60vh] right-[-80vw] transition duration-[4s] border2  triangle `}
          style={{
            transform: `translate(${transX1} , ${transY1})`,
            borderBottom: `200vh solid ${
              traingle_color ? traingle_color : "black"
            } `,
          }}
        ></div>
        <div
          className={`absolute transition duration-[4s] top-[-60vh] left-[-80vw]  border2 triangle2   `}
          style={{
            transform: `translate(${transX1} , ${transY1})`,
            borderBottom: `200vh solid ${
              traingle_color ? traingle_color : "black"
            } `,
          }}
        ></div>
        <motion.div
          // initial={{ scale: 1.5 }}
          // animate={{ width: "10vw", height: "10vw", scale: 0.7 }}
          // transition={{ duration: 5 }}
          className={`  w-[15vw] transition duration-[2s] h-auto`}
          style={{ scale: scale, opacity: preloader_img_opacity }}
        >
          <Image
            src={preloader_logo}
            alt="preloader image"
            priority
            className="w-full h-fit z-[9999999]"
          />
        </motion.div>

        {/* for the two traingles that would fade away */}

        {/* for the relative boxes  */}
        <div
          className="absolute  w-[0.2vw] transition duration-[2.3s] h-[80vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            top: 0,
            left: "3vw",
            transform: `translateY(${trans1})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* second relative boxes */}
        <div
          className="absolute  w-[0.2vw] transition duration-[2.3s] h-[150vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            top: 0,
            left: "15vh",
            transform: `translateY(${trans2})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* third relative boxes */}
        <div
          className="absolute  w-[0.2vw] transition duration-[2.3s] h-[150vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            right: "15vh",
            transform: `translateY(${trans3})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* fourth relative boxes */}
        <div
          className="absolute  w-[0.2vw] transition duration-[2.3s] h-[80vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            right: "3vw",
            transform: `translateY(${trans4})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* fiveth striaght lines now  boxes */}
        <div
          className="absolute  w-[0.2vw] transition duration-[2.3s] h-[100vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            left: "30vw",
            transform: `translateY(${trans5})`,
            opacity: line_opacity,
          }}
        ></div>

        {/* sixth striaght lines now  boxes */}
        <div
          className="absolute  w-[0.2vw] transition duration-[2.3s] h-[100vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            right: "30vw",
            transform: `translateY(${trans5})`,
            opacity: line_opacity,
          }}
        ></div>
      </div>

      {/* this is for mobile screens */}
      <div
        className="w-full h-full  fixed top-0 sm:flex justify-center items-center z-[999999] transition duration-[2s] hidden "
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <div
          className="absolute bottom-[-140vh] right-[-200vw] transition duration-[4s] border2 triangle "
          style={{
            transform: `translate(${transX1} , ${transY1})`,
            borderBottom: `220vh solid ${
              traingle_color ? traingle_color : "black"
            } `,
          }}
        ></div>
        <div
          className="absolute transition duration-[4s] top-[-140vh] left-[-200vw]  border2 triangle2   "
          style={{
            transform: `translate(${transX1} , ${transY1})`,
            borderBottom: `220vh solid ${
              traingle_color ? traingle_color : "black"
            } `,
          }}
        ></div>
        <motion.div
          // initial={{ scale: 1.5 }}
          // animate={{ width: "10vw", height: "10vw", scale: 0.7 }}
          // transition={{ duration: 5 }}
          className={`  w-[50vw] transition duration-[2s] h-auto`}
          style={{ scale: scale, opacity: preloader_img_opacity }}
        >
          <Image
            src={preloader_logo}
            priority
            alt="preloader image"
            className="w-full h-fit z-[9999999]"
          />
        </motion.div>

        {/* for the two traingles that would fade away */}

        {/* for the relative boxes  */}
        <div
          className="absolute  w-[0.5vw] transition duration-[2.3s] h-[80vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            top: 0,
            left: "-20vw",
            transform: `translateY(${trans1})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* second relative boxes */}
        <div
          className="absolute  w-[0.5vw] transition duration-[2.3s] h-[150vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            top: 0,
            left: "15vh",
            transform: `translateY(${trans2})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* third relative boxes */}
        <div
          className="absolute  w-[0.5vw] transition duration-[2.3s] h-[150vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            right: "15vh",
            transform: `translateY(${trans3})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* fourth relative boxes */}
        <div
          className="absolute  w-[0.5vw] transition duration-[2.3s] h-[80vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            right: "-20vw",
            transform: `translateY(${trans4})`,
            rotate: "45deg",
            opacity: line_opacity,
          }}
        ></div>

        {/* fiveth striaght lines now  boxes */}
        <div
          className="absolute  w-[0.5vw] transition duration-[2.3s] h-[100vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            left: "20vw",
            transform: `translateY(${trans5})`,
            opacity: line_opacity,
          }}
        ></div>

        {/* sixth striaght lines now  boxes */}
        <div
          className="absolute  w-[0.5vw] transition duration-[2.3s] h-[100vh] bg-white rotate-[45deg] rounded-[10vw]"
          style={{
            bottom: 0,
            right: "20vw",
            transform: `translateY(${trans5})`,
            opacity: line_opacity,
          }}
        ></div>
      </div>
    </>
  );
};

export default Preloader;
