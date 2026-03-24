"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { inter_font, passion_one } from "@/app/utils/fonts";
import anzaa from "@/../public/malkain_landing_page/anzaa.webp";
import brala from "@/../public/malkain_landing_page/brala_.webp";
import kind_choas from "@/../public/malkain_landing_page/kind_choas.webp";
import pawp from "@/../public/malkain_landing_page/pawp.webp";

interface BrandCard {
  title: string;
  image: StaticImageData | string;
  link: string;
}

const cards: BrandCard[] = [
  { title: "ANZZA CHIPS", image: anzaa, link: "/anzza-chips" },
  { title: "PAWP WATER", image: pawp, link: "/pawp-water" },
  { title: "BRALA'S BEST", image: brala, link: "/bralas-best" },
  { title: "KIND CHOAS", image: kind_choas, link: "/kind-choas" },
];

const AnimatedCard = ({ card }: { card: BrandCard }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0.6 1"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate, y, x, transition: "0.3s ease-out" }}
      className="w-full bg-[#F2EDD8] p-1.5  rounded-[5.38px] flex flex-col gap-3"
    >
      {/* Image */}
      <div className="w-full aspect-[1.7/1] rounded-[5.38px] relative overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-[#D01717] mt-3 text-center text-4xl leading-none font-normal uppercase">
        {card.title}
      </h2>

      {/* Button */}
      <Link
        href={card.link}
        className={`${inter_font.className} w-full bg-[#D01717] text-white text-center py-4 rounded-lg sm:text-sm text-xs uppercase`}
      >
        VIEW MORE
      </Link>
    </motion.div>
  );
};

const BrandCards = () => {
  return (
    <div
      className={`w-full py-6 flex items-center flex-col gap-4 ${passion_one.className}`}
    >
      <h2 className="font-bold text-center text-4xl text-[#EA1D2F] uppercase tracking-[-5%]">
        Our past work
      </h2>
      <div className="grid lg:grid-cols-4 w-full md:grid-cols-2 sm:flex flex-col items-center gap-3 px-6 sm:px-2">
        {cards.map((card, index) => (
          <AnimatedCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
