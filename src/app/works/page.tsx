"use client";
import { useState } from "react";
import Home_Header from "../component/navigation/home_header";
import Footer from "../component/fotter/footer";
import Top_works from "../component/works/top_works";
import Menu from "../component/menu";

export default function Contact() {
  const width = globalThis.innerWidth;

  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
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
      <div className="w-full h-auto  bg-[#1A1A1A] ">
        <Home_Header
          setleft={setleft}
          setright={setright}
          setopacity={setopacity}
        />
        <div className="w-full pt-[15vw]  sm:pt-[45vw]">
          <Top_works />
          <Footer />
        </div>
      </div>
    </>
  );
}
