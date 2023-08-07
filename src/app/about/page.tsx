"use client";

import Image from "next/image";
import Team from "../component/about/team";
import Footer from "../component/fotter/footer";
import About_hero from "../component/about/about_hero";
import Header_black from "../component/navigation/header_black_nav";
import Menu from "../component/menu";
import { useState } from "react";

export default function About() {
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
      <Header_black
        setright={setright}
        setleft={setleft}
        setopacity={setopacity}
      />

      <div className="w-full h-auto  pt-[150px] ">
        <About_hero />
        <Team />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
