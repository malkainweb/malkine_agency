"use client";

import Image from "next/image";
import React from "react";
import mob_home_about from "../../../../public/home/mob_home_about.webp";
import home_about_img from "../../../../public/home/home_about_img.webp";

const Home_about_us = () => {
  return (
    <>
      <div className="w-full bg-white p_r sm:py-[10vw]  h-auto flex flex-col gap-[1.3vw] py-[2vw]">
        {/* heading */}
        <div className="flex items-center sm:items-start sm:flex-col gap-[1.3vw] nova">
          <h1 className="nova sm:font-[600] text-[3.33vw] sm:order-1 sm:text-[10vw]">
            About Us
          </h1>
          <button className="border h-fit bg-transparent border-black px-[1.3vw] rounded-[0.7vw] py-[0.7vw] text-[1vw] sm:text-[2vw] sm:rounded-[1.25vw] sm:px-[4vw] sm:py-[2vw]">
            Learn More
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full   sm:flex-col  items-end gap-[10vw]  h-auto flex justify-center ">
          {/* image */}

          <Image
            src={home_about_img}
            alt="about us image"
            className="w-[10vw]  sm:hidden h-fit"
          />

          {/* now the text */}
          <div className="w-fit sm:w-full flex-col flex  sm:gap-[6vw] gap-[2vw] ">
            <div className="text-[1.87vw] inter sm:text-[4vw] sm:flex sm:flex-col sm:gap-[8vw]">
              <p className="pl-[13.3vw] hidden sm:block sm:pl-0 ">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                volutpat <br /> aliquam. Sit sit sed te
              </p>
              <p className="pl-[13.3vw] sm:hidden sm:pl-0 ">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                volutpat aliquam. Sit sit sed te
              </p>

              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur. Elit dui nulla <br />{" "}
                gravida volutpat eget tortor proin. Posuere porttitor <br /> sed
                erat quisque. Donec quisque orci vestibulum <br />
                suspendisse auctor. Amet elementum facilisis imperdiet
              </p>
            </div>

            <Image
              src={mob_home_about}
              alt="about us image"
              className="w-full hidden sm:block h-fit"
            />
            <div className="w-full flex gap-[1vw] sm:text-[1.7vw] nova uppercase items-center text-[0.8vw] sm:gap-[2vw]">
              <p>goals</p>
              <div className="w-[40%] sm:w-[50%] h-[0.07vw] bg-black"></div>
              <p>
                CREATING USER FRIENDLY, <br />b HIGH AESTHETICS DESIGNS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about_us;
