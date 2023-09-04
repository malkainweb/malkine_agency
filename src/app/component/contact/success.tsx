"use client";

import Image from "next/image";
import success from "../../../../public/contact/success.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
const Success = (props: any) => {
  return (
    <>
      {/* JUST FOR THE PURPOSE OF KEEPING THE FOOTER FISWX WE IMPLEMENT THE DIV BELOW  */}
      <div className="   min-h-[60vw]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1.5 }}
          className="w-full flex h-auto flex-col py-[6.7vw] justify-center items-center gap-[1.33vw] sm:gap-[10vw] sm:pb-[40vw]"
        >
          <Image
            priority
            src={success}
            alt="sucees image"
            className="w-[6.7vw] h-fit sm:w-[20vw]"
          />
          <p className="text-[2.67vw] sm:text-[6vw] nova text-white text-center">
            Thank You for your submission! <br /> We will contact you in 48 - 72
            hrs.
          </p>
          <Link
            href="/"
            className="nova  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.8vw] py-[1.07vw] bg-[#D01717]  hover:bg-[#920808] sm:text-[4vw] sm:py-[3.5vw] sm:px-[11vw] sm:rounded-[9.75vw]"
          >
            Back to homepage <i className="bi bi-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Success;
