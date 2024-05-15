"use client";
import { useState } from "react";
import Calendy from "../component/calendy";
import Footer from "../component/fotter/footer";
import Footer_hand from "../component/landing_template/footer_hand";
import Processes from "../component/landing_template/process";
import Scrolling_hands from "../component/landing_template/scrolling_hand";
import Writing from "../component/landing_template/writing";
import Menu from "../component/menu";
import Home_Header from "../component/navigation/home_header";
import Template_hero from "../component/landing_template/hero";
import Landing_nav from "../component/landing_template/landing_nav";
import Past_work_template from "../component/landing_template/past_work_template";
import Preloader_template from "../component/landing_template/preloader_template";

const Landing_template = () => {
  const width = globalThis.innerWidth;

  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(1);
  const [nav_menu, setnav_menu] = useState(1);
  const [nav_ham, setnav_ham] = useState(1);

  return (
    <>
      {/* <Menu
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
          setright={setright}
          setleft={setleft}
          setopacity={setopacity}
          white={white}
          nav_ham={nav_ham}
          nav_menu={nav_menu}
        />
      </div> */}
      <Preloader_template />
      <Landing_nav />
      <div className="h-[6vw] sm:h-[25vw] "></div>
      <Template_hero />
      <Scrolling_hands />
      <Writing />
      <Past_work_template />
      <Calendy />
      <Processes />
      <Footer_hand />
      <Footer landing={true} />
      {/* <div className="h-[100vw]"></div> */}
    </>
  );
};

export default Landing_template;
