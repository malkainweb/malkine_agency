"use client";

import { CabinetGrotesk_medium, inter_font, passion_one } from "../utils/fonts";

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
  return (
    <div className="w-full bg-black sm:items-start z-10 items-center py-10 flex flex-col gap-5">
      {/* Title */}
      <h2
        className={`${passion_one.className} w-full   text-[#F3EBE0] tracking-[-1.91px] font-black text-center text-5xl uppercase`}
      >
        Our Services
      </h2>

      {/* Scrolling cards */}
      <div className="flex overflow-x-auto gap-4 px-6 scrollbar-hide">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`${CabinetGrotesk_medium.className} ${item.bg} ${item.text} sm:min-w-[75vw] rounded-2xl p-6 flex flex-col gap-4`}
          >
            <p className="text-5xl ">{item.stat}</p>
            <p className="text-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing_Services;
