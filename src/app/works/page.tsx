"use client";
import { useState } from "react";
import Home_Header from "../component/navigation/home_header";
import Footer from "../component/fotter/footer";
import Top_works from "../component/works/top_works";
import Work_system from "../component/works/work_system";
import Menu from "../component/menu";

export default function Contact() {
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
      <div className="w-full h-auto  bg-[#1A1A1A] ">
        <Home_Header
          setleft={setleft}
          setright={setright}
          setopacity={setopacity}
        />
        <div className="w-full pt-[15vw] sm:pt-[45vw]">
          <Top_works />
          <Work_system />
          <Footer />
        </div>
      </div>
    </>
  );
}
