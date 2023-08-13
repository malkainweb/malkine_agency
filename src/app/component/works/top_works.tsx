"use client";

import { useState } from "react";
import main from "../../../../public/works/main.webp";
import Link from "next/link";

const Top_works = () => {
  const [svg, setsvg] = useState([
    {
      bg: "top",
      txt: "modamu",
      top: "0px",
      left: "0px",
      right: "",
    },
    {
      bg: "top",
      txt: "G buddies",
      top: "7.7vw",
      left: "0px",
      right: "",
    },
    {
      bg: "middle",
      txt: "Bondbullies",
      top: "15.33vw",
      left: "0px",
      right: "",
    },
    {
      bg: "top",
      txt: "",
      top: "0px",
      left: "7.7vw",
      right: "",
    },
    {
      bg: "top",
      txt: "Ash & Beau",
      top: "7.7vw",
      left: "7.7vw",
      right: "",
    },
    // mostly from here third row
    {
      bg: "middle",
      txt: "GHS",
      top: "15.33vw",
      left: "7.7vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "Jesus Fish",
      top: "15.33vw",
      left: "15.33vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "atella",
      top: "15.33vw",
      left: "23vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "atella",
      top: "15.33vw",
      left: "30.7vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "atella",
      top: "15.33vw",
      left: "38.33vw",
      right: "",
    },
    {
      bg: "edges",
      txt: "Station forge",
      top: "15.33vw",
      left: "46vw",
      right: "",
    },

    // fourth section
    {
      bg: "middle",
      txt: "house of adells",
      top: "23vw",
      left: "7.7vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "Evil GSP",
      top: "23vw",
      left: "15.33vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "house of adells",
      top: "23vw",
      left: "23vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "house of adells",
      top: "23vw",
      left: "30.7vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "house of adells",
      top: "23vw",
      left: "38.33vw",
      right: "",
    },

    // fifith section
    {
      bg: "middle",
      txt: "Gus Cooney",
      top: "30.7vw",
      left: "7.7vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "Vibes only",
      top: "30.7vw",
      left: "15.33vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "One off studio",
      top: "30.7vw",
      left: "23vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "",
      top: "30.7vw",
      left: "30.7vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "",
      top: "30.7vw",
      left: "38.33vw",
      right: "",
    },

    // sisxth section
    {
      bg: "middle",
      txt: "",
      top: "38.33vw",
      left: "15.33vw",
      right: "",
    },
    {
      bg: "middle",
      txt: "",
      top: "38.33vw",
      left: "23vw",
      right: "",
    },

    // seveth section
    {
      bg: "middle",
      txt: "",
      top: "46vw",
      left: "15.33vw",
      right: "",
    },
    // eigth  section
    {
      bg: "middle",
      txt: "",
      top: "53.7vw",
      left: "15.33vw",
      right: "",
    },
    // ninth  section
    {
      bg: "edges",
      txt: "",
      top: "61.3vw",
      left: "15.33vw",
      right: "",
    },
  ]);

  const [mobile_svg, setmobile_svg] = useState([
    {
      bg: "top",
      txt: "modamu",
      top: "0px",
      left: "0px",
      right: "",
    },
    {
      bg: "top",
      txt: "",
      top: "0px",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "top",
      txt: "modamu",
      top: "32vw",
      left: "0px",
      right: "",
    },
    {
      bg: "top",
      txt: "",
      top: "32vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "middle",
      txt: "bondbulies",
      top: "64vw",
      left: "0px",
      right: "",
    },
    {
      bg: "middle",
      txt: "GHS",
      top: "64vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "middle",
      txt: "jesus fish",
      top: "64vw",
      left: "",
      right: "0px",
    },
    {
      bg: "middle",
      txt: "atella",
      top: "96vw",
      left: "0px",
      right: "",
    },
    {
      bg: "middle",
      txt: "atella",
      top: "96vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "edges",
      txt: "station forge",
      top: "96vw",
      left: "",
      right: "0px",
    },
    {
      bg: "middle",
      txt: "house of adells",
      top: "128vw",
      left: "0px",
      right: "",
    },
    {
      bg: "middle",
      txt: "evil GSP",
      top: "128vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "middle",
      txt: "house of adeles",
      top: "128vw",
      left: "",
      right: "0px",
    },
    {
      bg: "middle",
      txt: "house of adeles",
      top: "160vw",
      left: "0px",
      right: "",
    },
    {
      bg: "middle",
      txt: "evil GSP",
      top: "160vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "middle",
      txt: "house of adeles",
      top: "160vw",
      left: "",
      right: "0px",
    },
    {
      bg: "middle",
      txt: "",
      top: "192vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "middle",
      txt: "",
      top: "192vw",
      left: "",
      right: "0px",
    },

    // now the nomral middles about 3 of them
    {
      bg: "middle",
      txt: "",
      top: "224vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "middle",
      txt: "",
      top: "256vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
    {
      bg: "edges",
      txt: "",
      top: "288vw",
      left: "50%",
      right: "",
      translate: "-50%",
    },
  ]);
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-[2vw] sm:gap-[10vw] ">
        <div className="w-full h-auto ">
          <h1 className="novabold text-[3.5vw] px-[6vw] text-white font-medium sm:text-[8vw] sm:px-[3.75vw]">
            Our Works{" "}
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center sm:hidden">
          <div className="w-[53.3vw]  relative h-[70vw] ">
            {/* the first left div */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[16.7vw] w-[0.03vw] bg-opacity-[30%] absolute top-[0.7vw] left-[3.3vw] z-[10]"
            ></div>

            {/* second dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[33.3vw] w-[0.03vw] bg-opacity-[30%] absolute top-[0.7vw] left-[11vw] z-[10]"
            ></div>

            {/* third sectio dive dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[46.7vw] bg-opacity-[30%] absolute top-[18.7vw] left-[3.3vw] z-[10]"
            ></div>

            {/* fourth sectio dive dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[33.3vw] bg-opacity-[30%] absolute top-[26.3vw] left-[10vw] z-[10]"
            ></div>

            {/* fifth sectio dive dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[33.3vw] bg-opacity-[30%] absolute top-[34vw] left-[10vw] z-[10]"
            ></div>

            {/* sixth  dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[46.7vw] w-[0.03vw] bg-opacity-[30%] absolute top-[16.7vw] left-[18.7vw] z-[10]"
            ></div>

            {/* seventh  dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[26.7vw] w-[0.03vw] bg-opacity-[30%] absolute top-[16.7vw] left-[26.3vw] z-[10]"
            ></div>

            {/* eight  dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[20vw] w-[0.03vw] bg-opacity-[30%] absolute top-[16.7vw] left-[34vw] z-[10]"
            ></div>

            {/* ninth  dive on the section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[20vw] w-[0.03vw] bg-opacity-[30%] absolute top-[16.7vw] left-[41.7vw] z-[10]"
            ></div>
            {svg.map((e: any, index: any) => {
              return (
                <Link
                  href="#"
                  className={`w-[6.7vw] z-[30] h-[6.7vw] absolute rounded-[100%]  works flex justify-center items-center ${e.bg} text-white font-[helvetica] text-[0.87vw] hover:bg-[#D01717] transition duration-[0.7s] px-[0.7vw] capitalize text-center hover:border-white hover:border`}
                  key={index}
                  style={{
                    top: e.top,
                    left: e.left,
                    right: e.right,
                  }}
                >
                  {e.txt}
                </Link>
              );
            })}
          </div>
        </div>
        {/* mobile wrapper sha */}
        <div className="sm:block hidden  p_r flex justify-center items-center">
          <div className=" w-full h-[320vw] relative">
            {/* the first columen div section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[155vw] w-[0.03vw] bg-opacity-[30%] absolute top-[10vw] left-[13.4vw] z-[10]"
            ></div>
            {/* the second columen div section */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
                transform: `translateX(-50%)`,
              }}
              className="h-[300vw] w-[0.03vw] bg-opacity-[30%] absolute top-[10vw] left-[50%] z-[10]"
            ></div>

            {/* the third columen div section */}

            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
                transform: `translateX(-50%)`,
              }}
              className="h-[90vw] w-[0.03vw] bg-opacity-[30%] absolute top-[70vw] right-[13.4vw] z-[10]"
            ></div>

            {/* the first row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[46.7vw] bg-opacity-[30%] absolute top-[13.5vw] left-[4vw] z-[10]"
            ></div>

            {/* the second row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[46.7vw] bg-opacity-[30%] absolute top-[45.5vw] left-[4vw] z-[10]"
            ></div>
            {/* the third row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[80vw] bg-opacity-[30%] absolute top-[77.5vw] left-[4vw] z-[10]"
            ></div>
            {/* the fourth row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[80vw] bg-opacity-[30%] absolute top-[141.5vw] left-[4vw] z-[10]"
            ></div>
            {/* the fifth row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[80vw] bg-opacity-[30%] absolute top-[173.5vw] left-[4vw] z-[10]"
            ></div>
            {/* the sixth row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[40vw] bg-opacity-[30%] absolute top-[205.5vw] right-[8vw] z-[10]"
            ></div>
            {/* the fourth row */}
            <div
              style={{
                border: "0.03vw solid white",
                opacity: "0.3",
                borderStyle: "dashed",
              }}
              className="h-[0.03vw] w-[80vw] bg-opacity-[30%] absolute top-[109.5vw] left-[4vw] z-[10]"
            ></div>
            {mobile_svg.map((e: any, index: any) => {
              return (
                <Link
                  href="#"
                  className={`w-[27vw] ${e.bg} z-[30] h-[27vw] absolute rounded-[100%]  works flex justify-center items-center  text-white font-[helvetica] text-[3vw] hover:bg-[#D01717] transition duration-[0.7s] px-[4vw] capitalize text-center hover:border-white hover:border`}
                  key={index}
                  style={{
                    top: e.top,
                    left: e.left,
                    right: e.right,
                    transform: `translateX(${e.translate})`,
                  }}
                >
                  {e.txt}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Top_works;
