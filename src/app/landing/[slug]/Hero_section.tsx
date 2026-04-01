"use client";

import {
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "@/app/utils/fonts";
import onphone from "@/../public/malkain_landing_page/onphone.webp";
import offphone from "@/../public/malkain_landing_page/offphone.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Landing_Hero_section = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.48 1", "1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9], [3, 12.5]);
  const onPhoneOpacity = useTransform(scrollYProgress, [0, 0.95], [1, 0]);
  // const offPhoneOpacity = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);
  }, []); // only runs once on mount — never updates on scroll
  // style={{ scale, y, x, rotate, transition: "0.2s ease-out" }}
  return (
    <>
      <div
        ref={containerRef}
        className="w-full flex flex-col  overflow-clip  bg-gradient-to-b from-[#021A49] to-[#0166B0] gap-6 relative h-[200vh] text-white"
      >
        <h1
          className={`text-white/50 w-full  text-center mx-auto ${NeueHaasDisplay_roman.className} inner-shadow-text text-4xl  absolute top-32 z-10`}
          // style={{
          //   textShadow: "2px -1px 1.3px rgba(1, 49, 105, 0.84) inset",
          // }}
        >
          We build CRO E-
          <br />
          Commerce <span className="text-[#EA1D2F]">Websites</span>
        </h1>
        <div
          style={{ height: vh ? `${vh}px` : "100dvh" }}
          className=" sticky top-32 h-screen"
        >
          <motion.div
            style={{
              scale,
              originX: "32.5%",
              originY: "47.7%",
            }}
            className="w-full flex  justify-end h-full items-end   relative"
          >
            <motion.div
              style={{ opacity: onPhoneOpacity }}
              className="w-full z-10 max-h-[76vh]"
            >
              <Image
                src={onphone}
                alt="onphone"
                className="w-full max-h-[76vh] object-contain"
                style={{ maxHeight: vh ? `${vh * 0.76}px` : "76dvh" }}
              />
            </motion.div>
            <motion.div
              // style={{ opacity: offPhoneOpacity }}
              className="w-full absolute bottom-0 left-0 max-h-[76vh]"
            >
              <Image
                src={offphone}
                alt="offphone"
                className="w-full absolute bottom-0 left-0 max-h-[76vh]  object-contain "
                style={{ maxHeight: vh ? `${vh * 0.76}px` : "76dvh" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Landing_Hero_section;
