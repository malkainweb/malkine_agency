"use client";

import Menu from "../component/menu";
import Header_black from "../component/navigation/header_black_nav";
import TermsPage from "../component/terms_of_service";
import { useState, useEffect } from "react";

export default function Terms() {
  const width = globalThis.innerWidth;

  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.body.classList.remove("hide_now");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

      <div className="w-full h-auto bg-gray-100  pt-[10vw] sm:pt-[25vw]">
        <TermsPage />
      </div>
    </>
  );
}
