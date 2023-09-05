"use client";

import Image from "next/image";
import React from "react";
import mob_home_about from "../../../../public/home/mob_home_about.webp";
import home_about_img from "../../../../public/home/home_about_img.webp";
import Link from "next/link";

const Home_about_us = () => {
  return (
    <>
      <div className="w-full bg-white p_r sm:py-[10vw]  pb-[8vw]   h-auto flex flex-col gap-[1vw] py-[2vw]">
        {/* heading */}
        <div className="flex items-center sm:items-start sm:flex-col gap-[1.3vw] nova">
          <h1 className="nova sm:font-[600] text-[3.33vw] sm:order-1 sm:text-[10vw]">
            About Us
          </h1>
          <Link
            href="about"
            className="border h-fit bg-transparent border-black px-[1.3vw] rounded-[0.7vw] py-[0.7vw] text-[1vw] sm:text-[2vw] sm:rounded-[1.25vw] sm:px-[4vw] sm:py-[2vw] hover:bg-black hover:text-white transition duration-[0.6s]"
          >
            Learn More
          </Link>
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
            <div className="text-[1.87vw] inter sm:text-[4vw] sm:flex sm:flex-col ">
              <p className=" hidden sm:block sm:pl-0 sm:leading-[7vw]">
                {" "}
                <span className="font-[900]">Malkain </span> is a future-focused
                design and development firm,
              </p>
              <p className="pl-[13.3vw] sm:hidden sm:pl-0 ">
                {" "}
                <span className="font-[900]">Malkain </span>is a future-focused
                design and development firm,
              </p>

              <p className="text-start sm:hidden">
                formed to bridge the divide between great ideas and exceptional
                execution. <br /> Our consumer oriented approach to design
                aligns our user <br /> interface directly with our main
                consumers - the end users. <br /> We help our clients form their{" "}
                futures, create industry leading <br /> campaign creative, and{" "}
                launch new products and services into the world.
              </p>
              <p className="text-start sm:block hidden sm:leading-[7vw]">
                formed to bridge the divide between great <br /> ideas and
                exceptional execution. <br />
                Our consumer oriented approach to design <br /> aligns our user
                interface directly with our main <br />
                consumers - the end users. We help our clients <br /> form their
                futures, create industry leading <br /> campaign creative, and
                launch new products <br /> and services into the world.
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
                CREATING USER FRIENDLY, <br />
                BUT HIGH AESTHETICS DESIGNS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about_us;
