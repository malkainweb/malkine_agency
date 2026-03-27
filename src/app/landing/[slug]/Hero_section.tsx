"use client";

import { NeueHaasDisplay_medium } from "@/app/utils/fonts";
import phone_onlyimg from "@/../public/malkain_landing_page/phone_only.webp";
import fullhandimg from "@/../public/malkain_landing_page/fullhand.webp";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Landing_Hero_section = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.7 1", "1.13 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["27%", "0%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 0]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full flex flex-col gap-6 relative h-[160vh] pt-32 text-white"
      >
        <h1
          className={`${NeueHaasDisplay_medium.className} text-4xl leading-[1] text-center`}
        >
          We build Websites <br />
          that <span className="text-[#EA1F2E]">convert</span> & tell your{" "}
          <br /> brand{"'"}s story
        </h1>

        <motion.div
          style={{ scale, y, x, rotate, transition: "0.2s ease-out" }}
          className="sticky top-40 z-10 left-0 w-full"
        >
          <Image src={phone_onlyimg} alt="hand" className="w-full" />
        </motion.div>

        <Image
          src={fullhandimg}
          alt="hand"
          className="absolute bottom-0 left-0 w-full"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black via-10% h-20" />
      </div>
      <div className="h-24"></div>
    </>
  );
};

export default Landing_Hero_section;
