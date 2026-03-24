"use client";

import Image from "next/image";
import Link from "next/link";
import { inter_font } from "../utils/fonts";
import hand from "@/../public/malkain_landing_page/hand.webp";

const LandingPageFooter = () => {
  return (
    <div className="w-full bg-black flex px-6 flex-col items-center pt-10 overflow-hidden">
      {/* Button */}
      <Link
        href="https://calendly.com/emmanuel-malkain/30min"
        className={`${inter_font.className} bg-[#EA1D2F] sm:w-full  w-[30rem] text-white px-10 py-4 rounded-full text-base flex justify-center items-center gap-2`}
      >
        Let's work together <span>→</span>
      </Link>

      {/* Hand */}
      <div className="w-full flex justify-center mt-6 float-hand ">
        <Image
          src={hand}
          alt="hand"
          className="sm:w-[70%] w-[17rem] md:max-w-[50%] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPageFooter;
