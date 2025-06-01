"use client";
import { useEffect, useState } from "react";
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
import Services_template from "../component/landing_template/services_template";

const Landing_template = ({ data }: any) => {
  const width = globalThis.innerWidth;

  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(1);
  const [nav_menu, setnav_menu] = useState(1);
  const [nav_ham, setnav_ham] = useState(1);

  useEffect(() => {
    // Access the body element
    const body = document.body;

    // Add the class 'change_bg_color' to the body element

    if (data.background_color == "white") {
      body.classList.add("change_bg_to_white");
    }

    // Change the background color of the body element
    if (data.background_color) {
      body.style.backgroundColor = data.background_color;
    } else {
      body.style.backgroundColor = "#0e0e0e";
    }

    // Optionally, return a cleanup function to remove the class when the component unmounts
    return () => {
      body.classList.remove("change_bg_to_white");
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

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
      <Preloader_template traingle_color={data.prealoader_bg} />
      <Landing_nav />
      <div className="h-[6vw] sm:h-[25vw] "></div>
      <Template_hero
        caption={data.caption}
        heading={data.hero_text}
        desktop_size={data.desktop_size}
        size={data.size}
        mobile_size={data.mobile_size}
        text_color={data.header_text_color}
        btn_bg_color={data.btn_bg_color}
      />
      <Scrolling_hands
        left_img={data.scroll_left_img}
        right_img={data.scroll_right_img}
        main_img={data.main_img}
        mob_left_img={data.mob_scroll_left_img}
        mob_right_img={data.mob_scroll_right_img}
        bg_gradient_color={data.background_color}
      />
      {data.extra_pastwork && (
        <Past_work_template
          heading={data.extra_pastwork.heading}
          pastwork={data.extra_pastwork.works}
          text_color={data.header_text_color}
        />
      )}
      <Past_work_template
        heading={data.pastwork.heading}
        pastwork={data.pastwork.works}
        text_color={data.header_text_color}
      />
      <Writing
        writing_one={data.writing_one}
        writing_text_color={data.writing_text_color}
        img={data.about_image}
        btn_bg_color={data.btn_bg_color}
        writing_two={data.writing_two}
      />
      <Calendy text_color={data.header_text_color} />

      <Services_template
        services={data.services}
        color={data.service_text_color}
        text_color={data.header_text_color}
        mobile_control_prev_arrow={data.mobile_control_prev_arrow}
        mobile_control_next_arrow={data.mobile_control_next_arrow}
      />

      <Processes
        process={data.process}
        btn_bg_color={data.btn_bg_color}
        text_color={data.header_text_color}
        arrow_icon={data.arrow_icon}
        straight_line_image={data.straight_line_image}
        mobile_straight_line_image={data.mobile_straight_line_image}
      />
      <Footer_hand
        text_color={data.header_text_color}
        btn_bg_color={data.btn_bg_color}
      />
      <Footer landing={true} btn_bg_color={data.btn_bg_color} />
      {/* <div className="h-[100vw]"></div> */}
    </>
  );
};

export default Landing_template;
