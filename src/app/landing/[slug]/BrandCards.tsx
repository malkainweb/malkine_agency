"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  inter_font,
  passion_one,
  SFProDisplay_medium,
} from "@/app/utils/fonts";
import Link_modal from "@/app/component/modal/link_modal";
import anzaa from "@/../public/malkain_landing_page/anzza.webp";
import brala from "@/../public/malkain_landing_page/brala.webp";
import koffiracha from "@/../public/malkain_landing_page/Koffiracha.webp";
import mimio from "@/../public/malkain_landing_page/mimio.webp";
import pawpwater from "@/../public/malkain_landing_page/pawpwater.webp";
import thirsty_bastard from "@/../public/malkain_landing_page/thirsty_bastard.webp";
import unity from "@/../public/malkain_landing_page/unity.webp";
import withcharacter from "@/../public/malkain_landing_page/withcharacter.webp";

interface BrandCard {
  title: string;
  image: StaticImageData | string;
  link: string;
  open_false?: boolean;
  open_iframe?: boolean;
}

const cards: BrandCard[] = [
  { title: "Brala's Best", image: brala, link: "https://bralasbest.com/" },
  { title: "Pawp Water", image: pawpwater, link: "https://pawpwater.com/" },
  {
    title: "Anzza",
    image: anzaa,
    link: "https://6grqhe-iu.myshopify.com",
    open_iframe: true,
  },
  {
    title: "With Character",
    image: withcharacter,
    link: "https://withcharacter.com/",
    open_iframe: true,
  },
  { title: "Unity", image: unity, link: "https://www.getunity.com/" },
  {
    title: "Mimio Health",
    image: mimio,
    link: "https://mimiohealth.com/",
    open_iframe: true,
  },
  {
    title: "Thirsty Bast****S",
    image: thirsty_bastard,
    link: "https://www.thirstybastardwater.com/",
  },
  {
    title: "Koffiracha",
    image: koffiracha,
    link: "https://koffiracha.com/",
    open_iframe: true,
  },
];

const AnimatedCard = ({
  card,
  onViewMore,
}: {
  card: BrandCard;
  onViewMore: (card: BrandCard) => void;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0.1 1"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate, y, x, transition: "0.3s ease-out" }}
      className="w-full bg-[#F2EDD8] p-1.5 rounded-[30px] flex flex-col gap-3"
    >
      {/* Image */}
      <div className="w-full aspect-[1.7/1] rounded-[23px] relative overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-[#EA541D] mt-3 text-center sm:text-[8vw] leading-none font-normal uppercase">
        {card.title}
      </h2>

      {/* Button */}
      <button
        onClick={() => onViewMore(card)}
        className={`${inter_font.className} w-full bg-[#EA541D] text-white text-center py-4 rounded-full sm:text-sm text-xs uppercase`}
      >
        VIEW MORE
      </button>
    </motion.div>
  );
};

const BrandCards = () => {
  const [start_anime, setstart_anime] = useState(false);
  const [path, setpath] = useState("");

  const [open_iframe, setopen_iframe] = useState(false);

  const handleViewMore = (card: BrandCard) => {
    setpath(card.link);
    console.log(card.open_iframe || false);
    setopen_iframe(card.open_iframe || false);
    setstart_anime(true);
  };

  return (
    <div
      className={`w-full pt-20 pb-6 flex items-center flex-col gap-12 ${SFProDisplay_medium.className}`}
    >
      <h2 className="font-bold text-center sm:text-[8vw] leading-[1]  text-[#EA541D] uppercase">
        Our past work
      </h2>
      <div className="grid lg:grid-cols-4 w-full md:grid-cols-2 sm:flex flex-col items-center gap-3 px-6 sm:px-2">
        {cards.map((card, index) => (
          <AnimatedCard key={index} card={card} onViewMore={handleViewMore} />
        ))}
      </div>

      {start_anime && (
        <Link_modal
          path={path}
          setstart_anime={setstart_anime}
          open_iframe={open_iframe}
        />
      )}
    </div>
  );
};

export default BrandCards;
