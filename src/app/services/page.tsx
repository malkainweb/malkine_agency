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

export default function Services() {
  // this is for the menu
  const [left, setleft] = useState("200vh");
  const [right, setright] = useState("-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);

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
