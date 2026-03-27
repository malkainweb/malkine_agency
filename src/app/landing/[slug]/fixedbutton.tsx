"use client";

import Link from "next/link";
import { inter_font } from "../../utils/fonts";

const FixedButton = () => {
  return (
    <div className="fixed bottom-0 pb-4 left-0 w-full flex justify-center z-[9999] px-6">
      {/* Shadow backdrop */}
      <div className="absolute bottom-0 left-0 w-full h-full via-black bg-gradient-to-t from-black to-transparent" />

      <Link
        href="https://calendly.com/emmanuel-malkain/30min"
        className={`${inter_font.className} md:max-w-[50%] sm:w-full shadow-xl w-[30rem] mx-auto bg-[#EA1D2F] text-white text-center py-4 rounded-full text-base flex items-center justify-center gap-2 relative z-10`}
      >
        Book a call <span>→</span>
      </Link>
    </div>
  );
};

export default FixedButton;
