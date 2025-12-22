"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "./component/menu";
import Home_Header from "./component/navigation/home_header";
import Footer from "./component/fotter/footer";

export default function NotFound() {
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
      <Head>
        <title> 404 Page Malkain</title>
      </Head>
      {/* <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link> */}

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
        <div className="w-full h-[50vw] sm:h-[150vw]">
          <div className="w-full flex  justify-center  items-center flex-col h-full">
            <div className="w-full flex gap-[1vw] justify-center items-center ">
              <p
                className="  text-[20vw] sm:text-[20vw] mt-[1vw]   justify-center items-center  h-fit  w-fit    font-[helvetica] font-[700] "
                style={{
                  background:
                    "linear-gradient(180deg, #17BAD0 0%, rgba(0, 0, 0, 0.97) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.5s ease",
                }}
              >
                404{" "}
              </p>
              <p
                className="  text-[20vw] sm:text-[20vw] mt-[1vw]   justify-center items-center  h-fit  w-fit    font-[helvetica] font-[700] "
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, rgba(0, 0, 0, 0.97) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.5s ease",
                }}
              >
                {" "}
                PAGE
              </p>
            </div>
            <Link
              href={"/"}
              className="text-white hover:text-[red] text-[2vw] sm:text-[3vw] transition duration-[0.6s] hover:underline hover:underline-offset-4 nova capitalize "
            >
              Return to homepage
            </Link>
          </div>
          <div className="w-full h-auto bg-[#1A1A1A] ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
