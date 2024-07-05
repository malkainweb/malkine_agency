"use client";
import Link from "next/link";
import Image from "next/image";

import exit from "../../../../public/exit.png";
import { useEffect, useState } from "react";

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
      {/* mobile nav  */}
      <div
        className={`z-[3000] w-full h-full overflow-hidden bg-black fixed top-0 flex flex-col justify-end items-end ${
          start_modal ? "backdrop-blur-xl bg-opacity-[70%]" : "bg-opacity-0"
        }`}
        style={{ transition: "0.6s ease" }}
        onClick={hidenow}
      >
        <button className="h-[8%] w-fit">
          <Image
            src={exit}
            alt="Exit"
            className="w-fit pr-[2rem] cursor-pointer"
          />
        </button>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ transition: "0.6s ease" }}
          className={`w-full bg-white h-[92%] overflow-hidden relative ${
            start_modal ? "translate-y-0" : "translate-y-[120%]"
          } rounded-t-[1rem] gap-[1.8rem]`}
        >
          <iframe
            src={path}
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
