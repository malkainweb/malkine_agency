"use client";

import Image from "next/image";
import hand from "../../../../public/landingpage_template/footer_hand.webp";
import Link from "next/link";
import { useEffect } from "react";

const Footer_hand = () => {
  useEffect(() => {
    // Select the animated element
    const animatedElement: any = document.querySelector(".footer-hand-image");

    // Define the event listener functions
    const startAnimation = () => {
      animatedElement.style.animation = "move_hand 1.5s linear infinite";
    };

    const pauseAnimation = () => {
      animatedElement.style.animationPlayState = "paused";
    };

    // Add event listeners
    animatedElement.addEventListener("mouseenter", startAnimation);
    animatedElement.addEventListener("mouseleave", pauseAnimation);

    // Clean up the event listeners when the component unmounts
    return () => {
      animatedElement.removeEventListener("mouseenter", startAnimation);
      animatedElement.removeEventListener("mouseleave", pauseAnimation);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[63vw] mt-[4vw] sm:h-[150vw]  flex flex-col justify-between items-center ">
        <div className="flex flex-col  ">
          <h3 className="font_helvetica text-white text-[5vw] sm:text-[10vw] text-center">
            Let{"'"}s Get Started
          </h3>

          {/* the button */}
          <div className="w-full flex justify-center pt-[2vw]">
            <Link
              href="contact"
              className="  text-[1.5vw] h-auto font[500]  rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808] sm:text-[3.5vw] sm:mb-[18vw] sm:mt-[2vw]"
            >
              Work with us <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
        <Image
          src={hand}
          alt="hand"
          className="w-[20vw] translate-x-[30%] cursor-pointer footer-hand-image  sm:w-[50vw] h-fit"
        />
      </div>
    </>
  );
};

export default Footer_hand;
