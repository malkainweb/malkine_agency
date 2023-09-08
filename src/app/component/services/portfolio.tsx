"use client";

import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="w-full  px-[3.3vw] sm:px-[3.75vw] sm:pt-[10vw] h-auto py-[5.3vw] flex flex-col gap-[1.3vw] sm:gap-[8vw]">
        <div className="sm:flex sm:flex-col sm:gap-[5vw]">
          <p className="nova text-[2vw] font-[500] pb-[1.3vw] sm:text-[5.5vw] sm:font-[700] ">
            LATEST ON PORFOLIO
          </p>

          {/* the button */}
          <Link
            href="works"
            className="nova hidden sm:block  sm:text-[3vw] font[900]  sm:rounded-[9.75vw] sm:px-[8vw] w-fit sm:py-[4vw] bg-[#D01717] sm:text-white hover:bg-[#920808]"
          >
            See more <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="flex  justify-between  sm:gap-[4.5vw] flex-wrap w-full h-auto">
          <Link
            target="_blank"
            href="https://www.houseofadeles.com"
            className="w-[49.5%]  port_wrap sm:py-[4vw] sm:h-[62.25vw] sm:w-[44vw] rounded-[10px] sm:rounded-[2.5vw]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="sm:gap-[1.25vw] sm:pt-[5vw] flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">Ecommerce</p>
                <p className="port_text">House of Adeles</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right sm:text-[5vw]"></i>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.orbit.law"
            className="w-[24.6%]  port_wrap sm:py-[4vw] sm:h-[62.25vw] sm:w-[44vw] rounded-[10px] sm:rounded-[2.5vw]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="sm:gap-[1.25vw] sm:pt-[5vw] flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">law</p>
                <p className="port_text">Orbit</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right sm:text-[5vw]"></i>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.atella.ca"
            className="w-[24.6%]  port_wrap sm:py-[4vw] sm:h-[62.25vw] sm:w-[44vw] rounded-[10px] sm:rounded-[2.5vw]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="sm:gap-[1.25vw] sm:pt-[5vw] flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">Housing</p>
                <p className="port_text">Atella</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right sm:text-[5vw]"></i>
              </div>
            </div>
          </Link>

          <Link
            target="_blank"
            href="https://www.heygoodjuju.com"
            className="w-[24.6%] sm:block  hidden sm:py-[4vw]idden  port_wrap sm:h-[62.25vw] sm:w-[44vw] rounded-[10px] sm:rounded-[2.5vw]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="sm:gap-[1.25vw] sm:pt-[5vw] flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">Exercise</p>
                <p className="port_text">Good Juju</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right sm:text-[5vw]"></i>
              </div>
            </div>
          </Link>
        </div>

        {/* this is for the ssecon flex direction */}
        <div className="flex   justify-between flex-wrap w-full h-auto">
          {" "}
          <Link
            target="_blank"
            href="https://www.heygoodjuju.com
"
            className="w-[24.6%]  port_wrap sm:hidden rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">Exercise</p>
                <p className="port_text">Good Juju</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.guscooney.com"
            className="w-[24.6%] sm:hidden  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">portfolio</p>
                <p className="port_text">Gus Cooney</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.climbonsight.ca"
            className="w-[49.5%] sm:hidden port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">Adventure</p>
                <p className="port_text">Climb Onsight</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
