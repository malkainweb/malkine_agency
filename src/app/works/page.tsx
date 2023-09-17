"use client";
import { useState, useEffect } from "react";
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
  const [white, setwhite] = useState(1);
  const [nav_menu, setnav_menu] = useState(1);
  const [nav_ham, setnav_ham] = useState(1);

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
      <div className="w-full h-auto  bg-[#1A1A1A] ">
        <Home_Header
          setleft={setleft}
          setright={setright}
          setopacity={setopacity}
          white={white}
          nav_ham={nav_ham}
          nav_menu={nav_menu}
        />
        <div className="w-full pt-[15vw]  sm:pt-[45vw]">
          <Top_works />
          <Footer />
        </div>
      </div>
    </>
  );
}
