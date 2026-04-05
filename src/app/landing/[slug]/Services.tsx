"use client";

import { useRef } from "react";
import {
  CabinetGrotesk_medium,
  inter_font,
  passion_one,
  SFProDisplay_medium,
} from "../../utils/fonts";

const stats = [
  {
    stat: "9 Years",
    description: "Providing Amazing Services",
    bg: "bg-[#EA1D2F]",
    text: "text-white",
  },
  {
    stat: "18 Total",
    description: "Full-time in-house Employees",
    bg: "bg-white",
    text: "text-black",
  },
];

const Landing_Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-black sm:items-start z-10 items-center py-10 flex flex-col gap-7">
      {/* Title */}
      <h2
        className={`${SFProDisplay_medium.className} w-full text-[#F3EBE0] font-black text-center text-4xl uppercase`}
      >
        about Us
      </h2>

      {/* Scrolling cards */}
      <div
        ref={scrollRef}
        className="flex  overflow-x-scroll w-full gap-4 px-6 "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${CabinetGrotesk_medium.className} ${item.bg} ${item.text} w-[75vw] shrink-0 rounded-2xl p-6 flex flex-col gap-4`}
          >
            <p className="text-5xl">{item.stat}</p>
            <p className="text-2xl">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Arrows — mobile only */}
      <div className="hidden sm:flex  mx-auto text-4xl justify-center gap-4">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full bg-[white]/20 flex items-center justify-center text-white"
        >
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-[white]/20 flex items-center justify-center text-white"
        >
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default Landing_Services;
