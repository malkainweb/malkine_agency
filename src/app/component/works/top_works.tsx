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
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-[2vw] ">
        <div className="w-full h-auto">
          <h1 className="novabold text-[3.5vw] px-[150px] text-white font-medium">
            Our Works{" "}
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center">
          <div className="w-[53.3vw]  relative h-[70vw] ">
            {/* the first left div */}
            <div className="h-[16.7vw] w-[0.03vw] bg-white bg-opacity-[30%] absolute top-[0.7vw] left-[3.3vw] z-[10]"></div>

            {/* second dive on the section */}
            <div className="h-[33.3vw] w-[0.03vw] bg-white bg-opacity-[30%] absolute top-[0.7vw] left-[11vw] z-[10]"></div>

            {/* third sectio dive dive on the section */}
            <div className="h-[0.03vw] w-[46.7vw] bg-white bg-opacity-[30%] absolute top-[18.7vw] left-[3.3vw] z-[10]"></div>

            {/* fourth sectio dive dive on the section */}
            <div className="h-[0.03vw] w-[33.3vw] bg-white bg-opacity-[30%] absolute top-[26.3vw] left-[10vw] z-[10]"></div>

            {/* fifth sectio dive dive on the section */}
            <div className="h-[0.03vw] w-[33.3vw] bg-white bg-opacity-[30%] absolute top-[34vw] left-[10vw] z-[10]"></div>

            {/* sixth  dive on the section */}
            <div className="h-[46.7vw] w-[0.03vw] bg-white bg-opacity-[30%] absolute top-[16.7vw] left-[18.7vw] z-[10]"></div>

            {/* seventh  dive on the section */}
            <div className="h-[26.7vw] w-[0.03vw] bg-white bg-opacity-[30%] absolute top-[16.7vw] left-[26.3vw] z-[10]"></div>

            {/* eight  dive on the section */}
            <div className="h-[20vw] w-[0.03vw] bg-white bg-opacity-[30%] absolute top-[16.7vw] left-[34vw] z-[10]"></div>

            {/* ninth  dive on the section */}
            <div className="h-[20vw] w-[0.03vw] bg-white bg-opacity-[30%] absolute top-[16.7vw] left-[41.7vw] z-[10]"></div>
            {svg.map((e: any, index: any) => {
              return (
                <Link
                  href="#"
                  className={`w-[6.7vw] z-[30] h-[6.7vw] absolute rounded-[100%]  works flex justify-center items-center ${e.bg} text-white font-[helvetica] text-[0.87vw] hover:bg-[#D01717] transition duration-[0.7s] px-[0.7vw] capitalize text-center`}
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
      </div>
    </>
  );
};
export default Top_works;
