"use client";

import Image from "next/image";
import { passion_one, inter_font, PPMoriRegular } from "../utils/fonts";

const services = [
  {
    title: "Ecommerce Web Design",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
  },
  {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600",
  },
  {
    title: "Brand Identity",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600",
  },
  {
    title: "Mobile App Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
  },
  {
    title: "SEO & Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
  },
];

const ServicesScroll = () => {
  return (
    <div className="w-full bg-black flex flex-col gap-6 py-10">
      {/* Title */}
      <h2
        className={`${passion_one.className} text-white text-center text-5xl uppercase`}
      >
        Our Services
      </h2>

      {/* Scrolling cards */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative min-w-[75vw] h-[75vw] border border-white/10 aspect-[1.1/1] snap-center rounded-2xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              unoptimized
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            {/* Bottom blur overlay */}
            {/* Bottom blur overlay */}
            {/* Bottom blur overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-2/5 backdrop-blur-md"
              style={{
                background: "rgba(7, 7, 7, 0.31)",
                maskImage: "linear-gradient(to bottom, transparent, black 70%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 50%)",
              }}
            />

            {/* Title */}
            <p
              className={`${PPMoriRegular.className} absolute bottom-4  left-4 text-white text-xl font-medium leading-tight`}
            >
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesScroll;
