"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  passion_one,
  inter_font,
  PPMoriRegular,
  SFProDisplay_medium,
} from "../../utils/fonts";
import web_design from "@/../public/new_service/services/web_design.webp";

import ads from "@/../public/malkain_landing_page/ads.webp";
import eccomerce from "@/../public/new_service/services/eccomerce.webp";

const services = [
  {
    title: "Website & Platform Design",
    image: web_design,
  },
  {
    title: "Landing page design",
    image: eccomerce,
  },
];

const ServicesScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-black flex flex-col gap-10 sm:gap-12 py-14 pt-20 sm:pb-10">
      {/* Title */}
      <h2
        className={`${SFProDisplay_medium.className} text-[#F8F0E5] font-black text-center text-4xl uppercase leading-[0.8] `}
      >
        Our Services
      </h2>

      {/* Scrolling cards */}
      <div
        ref={scrollRef}
        className="sm:flex grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-2 px-3 scrollbar-hide"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative sm:w-[83vw] border border-white/10 aspect-[1/0.8] sm:aspect-[1.1/1] snap-center rounded-[30px] overflow-hidden flex-shrink-0"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div
              className="absolute bottom-0 left-0 w-full h-2/5 backdrop-blur-md"
              style={{
                background: "rgba(7, 7, 7, 0.31)",
                maskImage: "linear-gradient(to bottom, transparent, black 70%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 50%)",
              }}
            />
            <p
              className={`${PPMoriRegular.className} max-w-[70%] text-balance absolute bottom-4 left-4 text-white text-xl font-medium leading-tight`}
            >
              {service.title}
            </p>
          </div>
        ))}
      </div>

      {/* Arrows — mobile only */}
      <div className="hidden sm:flex  text-4xl justify-center gap-4">
        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full bg-[white]/20 flex items-center justify-center text-white"
        >
          <i className=" bi bi-arrow-left-short"></i>
        </button>
        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-full bg-[white]/20 flex items-center justify-center text-white"
        >
          <i className=" bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default ServicesScroll;
