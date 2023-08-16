"use client";

import Image from "next/image";
import Team from "../component/about/team";
import Footer from "../component/fotter/footer";
import About_hero from "../component/about/about_hero";
import Header_black from "../component/navigation/header_black_nav";
import Menu from "../component/menu";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function About() {
  const width = globalThis.innerWidth;

  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(1);

  // this function below changes the headers as being used
  const { scrollY } = useScroll();
  const first = width * 0.54;
  const second = width * 0.9;
  const third = width * 1.93;

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(third);
    // console.log(latest);

    if (latest >= first) {
      setwhite(0);
    } else if (latest <= first) {
      setwhite(1);
    }

    if (latest >= second) {
      setwhite(1);
    }
    if (latest >= third) {
      setwhite(0);
    }
  });

  return (
    <>
      <Menu
        setleft={setleft}
        left={left}
        height={height}
        setheight={setheight}
        setright={setright}
        right={right}
        opacity={opacity}
        setopacity={setopacity}
      />
      <Header_black
        setright={setright}
        setleft={setleft}
        white={white}
        setopacity={setopacity}
      />

      <div className="w-full h-auto  pt-[10vw] sm:pt-[25vw]">
        <About_hero />
        <Team />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
