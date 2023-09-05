"use client";

import Link from "next/link";
import React from "react";

const Home_mission = () => {
  return (
    <>
      <div className="w-full bg-white p_r sm:py-[12vw] h-auto flex  flex-col gap-[1.3vw] py-[3.33vw]">
        {/* heading */}
        <div className="flex items-center  gap-[1.33vw] sm:gap-[2.3vw] nova">
          <h1 className="nova text-[3.33vw] sm:text-[6vw] sm:font-[600]">
            Our Mission
          </h1>
          {/* <Link
            href="about"
            className=" sm:text-[2.5vw] sm:px-[4vw] sm:py-[1vw] sm:rounded-[1.25vw] border h-fit bg-transparent border-black px-[1.33vw] rounded-[0.7vw] py-[0.7vw] text-[1vw]  hover:bg-black hover:text-white transition duration-[0.6s]"
          >
            Read More
          </Link> */}
        </div>

        {/* body of the about section */}
        <div className="w-full   gap-[10vw] h-auto flex justify-center   items-start sm:justify-start  sm:pt-[0vw] ">
          {/* image */}
          {/* <div className="w-[6.6vw] sm:hidden h-[full]"></div> */}

          {/* now the text */}
          <div className="w-full px-[5vw] sm:px-0 flex-col  flex gap-[2vw]  sm:w-full ">
            <div className="text-[1.87vw] inter sm:leading-[7vw]">
              {/* <p className=" sm:hidden ">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                volutpat aliquam. Sit sit sed te
              </p>
              <p className=" sm:block hidden sm:text-[4vw] text-start sm:pl-0">
                {" "}
                <span className="font-[900]">Malkain Designs</span> ut elit
                <br /> volutpat aliquam. Sit sit sed te
              </p> */}

              <p className=" sm:text-[4vw] sm:pt-[6vw] text-start sm:pr-[10vw] sm:block hidden">
                {" We're"} on a journey to craft innovative, <br /> user-centric
                online solutions that <br /> empower businesses and individuals{" "}
                <br />
                to thrive in the digital age.
              </p>
            </div>

            <p className="text-start text-[1.87vw] inter  sm:hidden">
              {"  We're"} on a journey to craft innovative, user-centric online
              solutions <br /> that empower businesses and individuals to thrive
              in the digital age.
            </p>
            <div className="w-full text-[1.87vw] pl-[10vw] sm:pl-0 sm:text-[4vw] inter sm:pt-[3.5vw] sm:leading-[7vw]">
              <p className="text-center sm:hidden">
                We are committed to pushing the boundaries of technology and
                design, <br /> delivering exceptional value to our clients, and
                fostering a culture of creativity, <br /> collaboration, and
                continuous learning.
              </p>
              <p className=" text-start hidden sm:block">
                We are committed to pushing the <br /> boundaries of technology
                and design, <br /> delivering exceptional value to our clients,{" "}
                <br />
                and fostering a culture of creativity, <br /> collaboration, and
                continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_mission;
