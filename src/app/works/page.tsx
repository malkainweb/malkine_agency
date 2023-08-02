"use client";
import { useState } from "react";
import Header from "../component/navigation/header";
import Footer from "../component/fotter/footer";
import Top_works from "../component/works/top_works";
import Work_system from "../component/works/work_system";
import Menu from "../component/menu";

export default function Contact() {
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
      <div className="w-full h-auto bg-[#1A1A1A] ">
        <Header setleft={setleft} setright={setright} />
        <Top_works />
        <Work_system />
        <Footer />
      </div>
    </>
  );
}
