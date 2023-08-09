"use client";

import Image from "next/image";
import Hero_services from "../component/services/hero";
import Method from "../component/services/method";
import Footer from "../component/fotter/footer";
import Laptop_on_footer from "../component/services/laptopon_footer";
import Mission from "../component/services/mission";
import Portfolio from "../component/services/portfolio";
import Simple from "../component/services/simple";
import Work_ethics from "../component/services/work_ethics";
import Timeline from "../component/services/timeline";
import Menu from "../component/menu";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Services() {
  // this is for the menu
  const [left, setleft] = useState("200vh");
  const [right, setright] = useState("-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(0);

  // this function below changes the headers as being used
  const { scrollY } = useScroll();
  const width = globalThis.innerWidth;
  const first = width * 1.13;
  const second = width * 1.8;
  const third = width * 2.4;
  const fourth = width * 2.85;
  const finish = fourth + width * 0.4;

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(third);
    // console.log(latest);
    if (latest >= first) {
      setwhite(1);
    } else if (latest <= first) {
      setwhite(0);
    }

    if (latest >= second) {
      setwhite(0);
    }

    if (latest >= third) {
      setwhite(1);
    }
    if (latest >= fourth) {
      setwhite(0);
    }
    if (latest >= finish) {
      setwhite(1);
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
      <div className="">
        <Hero_services
          setright={setright}
          setleft={setleft}
          setopacity={setopacity}
          white={white}
        />
        <Method />
        <Timeline />
        <Work_ethics />
        <Simple />
        <Portfolio />
        <Mission />
        <Laptop_on_footer />
        <Footer />
      </div>
    </>
  );
}
