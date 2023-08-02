"use client";

import Image from "next/image";
import Team from "../component/about/team";
import Footer from "../component/fotter/footer";
import About_hero from "../component/about/about_hero";
import Header_black from "../component/navigation/header_black_nav";
import Menu from "../component/menu";
import { useState } from "react";

export default function About() {
  const [left, setleft] = useState("100%");
  const [right, setright] = useState("-100%");
  const [height, setheight] = useState("0px");
  return (
    <>
      <Menu
        setleft={setleft}
        left={left}
        height={height}
        setheight={setheight}
        setright={setright}
        right={right}
      />
      <div className="w-full h-auto bg-black">
        <Header_black setright={setright} setleft={setleft} />
        <About_hero />
        <Team />
        <Footer />
      </div>
    </>
  );
}
