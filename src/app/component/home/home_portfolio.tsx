"use client";

import React from "react";
import Link from "next/link";

const Home_portfolio = () => {
  return (
    <>
      <div className="w-full  bg-white sm:px-0 px-[3vw]  h-auto flex flex-col gap-[1.33vw] py-[2vw]">
        {/* heading */}
        <div className="flex items-center sm:justify-between gap-[1.33vw] nova sm:px-[3.75vw]">
          <h1 className="nova text-[3.33vw] sm:text-[6vw] sm:font-[600]">
            Our Portfolio
          </h1>
          <Link
            href="works"
            className="sm:text-[4vw] sm:px-[6vw] sm:py-[2vw] sm:border-hidden border-black sm:bg-[#d01717] sm:rounded-[4.25vw] border h-fit bg-transparent  px-[2.33vw] rounded-[0.7vw] py-[1vw] text-[1.3vw]  hover:bg-black hover:text-white sm:text-[white] transition duration-[0.6s]"
          >
            View All
          </Link>
        </div>

        <div className="sm:h-[90vw] sm:overflow-x-scroll sm:relative w-auto  flex  ">
          {/* body of the about section */}
          <div className="w-full flex justify-between h-auto  sm:absolute sm:top-[15vw] sm:left-0 sm:w-auto ">
            <Link
              href="https://www.orbit.law"
              className="h-auto   flex flex-col  w-[27%] sm:w-[48.25vw]  gap-[1vw] sm:ml-[4.5vw] sm:gap-[3vw] hover:scale-[1.03] hover:text-[#d01717] transition duration-[0.5s] "
            >
              <div
                className=" rounded-[0.8vw]  sm:rounded-[1.5vw]  port_gen w-full relative h-[20vw] sm:h-[54.9vw] "
                style={{ backgroundImage: "url(/home/port1.webp)" }}
              >
                <div className="pl-[0.7vw] absolute rounded-bl-[0.8vw] top-[-0.33vw] right-0 pb-[0.7vw]  pt-[0.33vw] bg-white">
                  <div className="text-[1.2vw] py-[0.7vw] px-[1vw] rounded-[0.8vw]  sm:rounded-[1.5vw] sm:flex sm:justify-center sm:items-center bg-black text-white sm:w-[7.5vw] sm:py-0 sm:px-0 sm:h-[6.5vw] sm:text-[3vw]">
                    {" "}
                    <i className="bi  bi-arrow-up-right"></i>
                  </div>
                </div>

                {/* the text */}
              </div>
              <div className="w-full  flex flex-col gap-[0px] nova">
                <p className="text-[1.2vw] text-[grey] sm:text-[2.5vw] capitalize">
                  Law
                </p>
                <h3 className="text-[2.13vw] sm:text-[4vw] font-medium capitalize">
                  Orbit
                </h3>
              </div>
            </Link>

            {/* second link */}
            <Link
              href="https://www.climbonsight.ca"
              className="h-auto   flex flex-col  w-[40%] sm:w-[68.25vw]  gap-[1vw] sm:ml-[4.5vw] sm:gap-[3vw] hover:scale-[1.03] hover:text-[#d01717] transition duration-[0.5s] "
            >
              <div
                className=" rounded-[0.8vw]  sm:rounded-[1.5vw]  port_gen w-full relative h-[20vw] sm:h-[54.9vw] "
                style={{ backgroundImage: "url(/home/port2.webp)" }}
              >
                <div className="pl-[0.7vw] absolute rounded-bl-[0.8vw] top-[-0.33vw] right-0 pb-[0.7vw]  pt-[0.33vw] bg-white">
                  <div className="text-[1.2vw] py-[0.7vw] px-[1vw] rounded-[0.8vw]  sm:rounded-[1.5vw] sm:flex sm:justify-center sm:items-center bg-black text-white sm:w-[7.5vw] sm:py-0 sm:px-0 sm:h-[6.5vw] sm:text-[3vw]">
                    {" "}
                    <i className="bi  bi-arrow-up-right"></i>
                  </div>
                </div>

                {/* the text */}
              </div>
              <div className="w-full  flex flex-col gap-[0px] nova">
                <p className="text-[1.2vw] text-[grey] sm:text-[2.5vw] capitalize">
                  Adventure - Climbing
                </p>
                <h3 className="text-[2.13vw] sm:text-[4vw] font-medium capitalize">
                  Climb Onsight
                </h3>
              </div>
            </Link>

            {/* third link */}

            <Link
              href="https://www.atella.ca"
              className="h-auto   flex flex-col  w-[27%] sm:w-[48.25vw] gap-[1vw]  sm:ml-[4.5vw] sm:mr-[4.5vw] sm:gap-[3vw] hover:scale-[1.03] hover:text-[#d01717] transition duration-[0.5s] "
            >
              <div
                className=" rounded-[0.8vw]  sm:rounded-[1.5vw]  port_gen w-full relative h-[20vw] sm:h-[54.9vw] "
                style={{
                  backgroundImage: "url(/home/port3.webp)",
                }}
              >
                <div className="pl-[0.7vw] absolute rounded-bl-[0.8vw] top-[-0.33vw] right-0 pb-[0.7vw]  pt-[0.33vw] bg-white">
                  <div className="text-[1.2vw] py-[0.7vw] px-[1vw] rounded-[0.8vw]  sm:rounded-[1.5vw] sm:flex sm:justify-center sm:items-center bg-black text-white sm:w-[7.5vw] sm:py-0 sm:px-0 sm:h-[6.5vw] sm:text-[3vw]">
                    {" "}
                    <i className="bi  bi-arrow-up-right"></i>
                  </div>
                </div>

                {/* the text */}
              </div>
              <div className="w-full  flex flex-col gap-[0px] nova">
                <p className="text-[1.2vw] text-[grey] sm:text-[2.5vw] capitalize">
                  Housing - Construction
                </p>
                <h3 className="text-[2.13vw] sm:text-[4vw] font-medium capitalize">
                  Atella
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_portfolio;
