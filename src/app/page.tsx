"use client";

import Image from "next/image";
import Client_logo from "./component/home/client_logo";
import Footer from "./component/fotter/footer";
import Hands from "./component/home/hand";
import Home_hero from "./component/home/hero";
import { useEffect, useState } from "react";
import Home_Team from "./component/home/team";
import Services from "./component/home/services";
import Home_about from "./component/home/home_about";
import Home_about_us from "./component/home/about_us";
import Optimized from "./component/home/optimized";
import Home_mission from "./component/home/home_mission";
import Home_gallery from "./component/home/home_gallery";
import Home_portfolio from "./component/home/home_portfolio";
import Highlight from "./component/home/highlight";
import Review from "./component/home/review";
import Preloader from "./component/preloader";
import Home_Header from "./component/navigation/home_header";
import Menu from "./component/menu";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import NewHomeHeader from "./component/home/NewHomeHeader";

export default function Home() {
  const width = globalThis.innerWidth;

  const [loader, setloader] = useState(true);
  const [menu, setmenu] = useState(true);
  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");
  const [white, setwhite] = useState(1);
  const [nav_menu, setnav_menu] = useState(1);
  const [nav_ham, setnav_ham] = useState(1);
  const [opacity, setopacity] = useState(0);
  const [scale, setscale] = useState(1.2);
  const [preloader_img_opacity, setpreloader_img_opacity] = useState(0);
  const [beginlines, setbeginlines] = useState(true);

  useEffect(() => {
    document.body.classList.add("hide_now");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log("window.dataLayer", window.dataLayer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("hide_now");
    }, 4650);

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

  // this function below changes the headers as being used
  const { scrollY } = useScroll();
  const first = width * 0.54;
  const second = width * 0.9;
  const third = width * 1.93;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (width >= 651) {
      if (latest >= width * 4.18) {
        setwhite(0);
        setnav_ham(0);
        setnav_menu(0);
      } else if (latest <= width * 4.18) {
        setwhite(1);
        setnav_ham(1);
        setnav_menu(1);
      }

      if (latest >= width * 4.35) {
        setwhite(1);
        setnav_ham(1);
        setnav_menu(1);
      }

      if (latest >= width * 8.13) {
        setwhite(0);
      }
      if (latest >= width * 9.53) {
        setwhite(0);
        setnav_ham(0);
        setnav_menu(0);
      }
      if (latest >= width * 10.94) {
        setwhite(1);
        setnav_ham(1);
        setnav_menu(1);
      }

      if (latest >= width * 12.08) {
        setwhite(0);
        setnav_ham(0);
        setnav_menu(0);
      }

      if (latest >= width * 13) {
        setwhite(1);
        setnav_ham(1);
        setnav_menu(1);
        console.log("dkdidi");
      }
    } else if (width <= 650) {
      if (latest >= width * 16.55) {
        setwhite(0);
        setnav_ham(0);
      } else if (latest <= width * 16.55) {
        setwhite(1);
        setnav_ham(1);
      }

      if (latest >= width * 22.8) {
        setwhite(1);
      }
      if (latest >= width * 23.35) {
        setwhite(0);
      }
      if (latest >= width * 23.65) {
        setwhite(1);
        setnav_ham(1);
      }
      if (latest >= width * 25.75) {
        setwhite(0);
        setnav_ham(0);
      }
      if (latest >= width * 28.22) {
        setwhite(1);
        setnav_ham(1);
      }
    }
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    // Initial check
    checkScreenSize();

    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
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
      <div className="w-full h-auto bg-black ">
        {/* <Client_logo /> */}
        <Home_Header
          setleft={setleft}
          setright={setright}
          setopacity={setopacity}
          white={white}
          nav_ham={nav_ham}
          nav_menu={nav_menu}
        />
        {isMobile ? <NewHomeHeader /> : <Home_hero />}

        {/* <NewHomeHeader />
        <Home_hero /> */}
        <Highlight />
        <Home_Team />
        {/* <Home_about /> */}
        <Services />
        <Hands />
        <Home_about_us />
        <Home_portfolio />
        <Optimized />
        <Home_mission />
        <Home_gallery />
        {/* <Review /> */}
        <Footer />
      </div>
    </>
  );
}
