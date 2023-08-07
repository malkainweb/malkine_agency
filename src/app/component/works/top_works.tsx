"use client";

import Image from "next/image";
import { useState } from "react";
import main from "../../../../public/works/main.webp";

const Top_works = () => {
  const [svg, setsvg] = useState([
    {
      bg: "grey",
      txt: "emma",
      top: "0px",
      left: "0px",
      right: "",
    },
    {
      bg: "grey",
      txt: "emma",
      top: "0px",
      left: "0px",
      right: "",
    },
    {
      bg: "grey",
      txt: "emma",
      top: "0px",
      left: "0px",
      right: "",
    },
  ]);
  return (
    <>
      <div className="w-full h-[200px]"></div>
      <div className="w-[750px] border2 relative h-[1000px] ">
        <div className="h-[250px] w-[1px] bg-white absolute top-[10px] left-[48px] z-[10]"></div>
        {svg.map((e: any, index: any) => {
          return (
            <div
              className="w-[100px] z-[30] h-[100px] absolute rounded-[100%] bg-[#393939] flex justify-center items-center text-white font-[helvetica] text-[13px]"
              key={index}
            >
              {e.txt}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Top_works;
