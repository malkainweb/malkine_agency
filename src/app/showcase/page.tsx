"use client";

import Menu from "../component/menu";
import Header_black from "../component/navigation/header_black_nav";
import Showcase_header from "../component/navigation/showcase_header";
import Preloader from "../component/preloader";
import Contact_showcase from "../component/showcase/contact_showcase";
import Slide_showcase from "../component/showcase/slide";
import TermsPage from "../component/terms_of_service";
import { useState, useEffect } from "react";

export default function Terms() {
  const width = globalThis.innerWidth;

  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(1);
  const [scale, setscale] = useState(1.2);
  const [preloader_img_opacity, setpreloader_img_opacity] = useState(0);
  const [beginlines, setbeginlines] = useState(true);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // contact_showcase;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.body.classList.add("hide_now");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("hide_now");
    }, 4500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloader(false);
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loader ? (
        <Preloader
          setscale={setscale}
          scale={scale}
          preloader_img_opacity={preloader_img_opacity}
          setpreloader_img_opacity={setpreloader_img_opacity}
          beginlines={beginlines}
          setbeginlines={setbeginlines}
        />
      ) : null}
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
      {/* <Header_black
        setright={setright}
        setleft={setleft}
        white={white}
        setopacity={setopacity}
      /> */}
      <Showcase_header
        setright={setright}
        setleft={setleft}
        white={white}
        setopacity={setopacity}
      />
      <Contact_showcase />
      <Slide_showcase />
    </>
  );
}
