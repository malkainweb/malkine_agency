"use client";
import Link from "next/link";
import Image from "next/image";

import exit from "../../../../public/exit.png";
import { useEffect, useState } from "react";
import Script from "next/script";

const Link_modal = ({ nav_items, path, setstart_anime }: any) => {
  const [start_modal, setstart_modal] = useState(false);

  useEffect(() => {
    setstart_modal(true);
  }, []);

  const hidenow = () => {
    setstart_modal(false);

    setTimeout(() => {
      setstart_anime(false);
    }, 700);
  };

  return (
    <>
      {" "}
      <Script
        type="module"
        src="https://unpkg.com/x-frame-bypass"
        strategy="afterInteractive" // ensures the script is loaded after the page is interactive
      />
      <Script
        src="https://unpkg.com/@ungap/custom-elements-builtin"
        strategy="afterInteractive"
      />
      {/* mobile nav  */}
      <div
        className={`z-[3000] w-full h-full overflow-hidden px-[1.5%] bg-black gap-[1vw] sm:gap-[2.5vw] pt-[0.55vw] fixed top-0 flex flex-col justify-end items-center ${
          start_modal ? "backdrop-blur-xl bg-opacity-[70%]" : "bg-opacity-0"
        }`}
        style={{ transition: "0.5s ease" }}
        onClick={hidenow}
      >
        <button
          style={{ transition: "0.5s ease" }}
          className={`h-[8%] w-fit  cursor-pointer flex justify-center ${
            start_modal ? "opacity-[70%]" : "opacity-0"
          } items-center`}
        >
          <Image src={exit} alt="Exit" className="w-fit h-[90%] " />
        </button>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ transition: "0.5s ease" }}
          className={`w-full bg-white h-[90%]  border-white border-x-[0.2vw] border-t-[0.2vw] sm:border-x-[1.1vw] sm:border-t-[1.1vw]  overflow-hidden relative ${
            start_modal ? "translate-y-0" : "translate-y-[120%]"
          } rounded-t-[2vw] sm:rounded-t-[7vw] gap-[1.8rem]`}
        >
          <iframe
            src={path}
            is="x-frame-bypass"
            // frameBorder="0"
            width="100%"
            height="100%"
            className=" "
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Link_modal;
