"use client";

import React from "react";

const Home_portfolio = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex flex-col gap-[1.33vw] py-[2vw]">
        {/* heading */}
        <div className="flex items-center gap-[1.33vw] nova">
          <h1 className="nova text-[3.33vw] ">Our Portfolio</h1>
          <button className="border h-fit bg-transparent border-black px-[1.33vw] rounded-[0.7vw] py-[0.7vw] text-[1vw]">
            View All
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full flex justify-between h-auto">
          <div className="h-auto   flex flex-col  w-[27%]">
            <div
              className=" rounded-[0.8vw]  port_gen w-full relative h-[20vw] "
              style={{ backgroundImage: "url(/home/port1.webp)" }}
            >
              <div className="pl-[0.7vw] absolute rounded-l-[0.8vw] top-[-0.33vw] right-0 pb-[0.7vw]  pt-[0.33vw] bg-white">
                <div className="text-[1.2vw] py-[0.7vw] px-[1vw] rounded-[0.8vw] bg-black text-white">
                  {" "}
                  <i className="bi  bi-arrow-up-right"></i>
                </div>
              </div>

              {/* the text */}
            </div>
            <div className="w-full  flex flex-col gap-[0px] nova">
              <p className="text-[1.2vw] text-[grey] capitalize">
                Social Media - Business
              </p>
              <h3 className="text-[2.13vw] font-medium capitalize">
                Bondbullies
              </h3>
            </div>
          </div>
          <div className="h-auto   flex flex-col  w-[40%]">
            <div
              className=" rounded-[0.8vw]  port_gen w-full relative h-[20vw] "
              style={{ backgroundImage: "url(/home/port2.webp)" }}
            >
              <div className="pl-[0.7vw] absolute rounded-l-[0.8vw] top-[-0.33vw] right-0 pb-[0.7vw]  pt-[0.33vw] bg-white">
                <div className="text-[1.2vw] py-[0.7vw] px-[1vw] rounded-[0.8vw] bg-black text-white">
                  {" "}
                  <i className="bi  bi-arrow-up-right"></i>
                </div>
              </div>

              {/* the text */}
            </div>
            <div className="w-full  flex flex-col gap-[0px] nova">
              <p className="text-[1.2vw] text-[grey] capitalize">
                Adventure - Climbing
              </p>
              <h3 className="text-[2.13vw] font-medium capitalize">
                Climb Onsight
              </h3>
            </div>
          </div>
          <div className="h-auto   flex flex-col  w-[27%]">
            <div
              className=" rounded-[0.8vw]  port_gen w-full relative h-[20vw] "
              style={{
                backgroundImage: "url(/home/port3.webp)",
              }}
            >
              <div className="pl-[0.7vw] absolute rounded-l-[0.8vw] top-[-0.33vw] right-0 pb-[0.7vw]  pt-[0.33vw] bg-white">
                <div className="text-[1.2vw] py-[0.7vw] px-[1vw] rounded-[0.8vw] bg-black text-white">
                  {" "}
                  <i className="bi  bi-arrow-up-right"></i>
                </div>
              </div>

              {/* the text */}
            </div>
            <div className="w-full  flex flex-col gap-[0px] nova">
              <p className="text-[1.2vw] text-[grey] capitalize">
                Housing - Construction
              </p>
              <h3 className="text-[2.13vw] font-medium capitalize">Atella</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_portfolio;
