"use client";

import React from "react";

const Home_portfolio = () => {
  return (
    <>
      <div className="w-full bg-white p_r  h-auto flex flex-col gap-[20px] py-[30px]">
        {/* heading */}
        <div className="flex items-center gap-[20px] nova">
          <h1 className="nova text-[50px] ">Our Portfolio</h1>
          <button className="border h-fit bg-transparent border-black px-[20px] rounded-[10px] py-[10px] text-[15px]">
            View All
          </button>
        </div>

        {/* body of the about section */}
        <div className="w-full flex justify-between h-auto">
          <div className="h-auto   flex flex-col  w-[27%]">
            <div
              className=" rounded-[12px]  port_gen w-full relative h-[20vw] "
              style={{ backgroundImage: "url(/home/port1.webp)" }}
            >
              <div className="pl-[10px] absolute rounded-l-[12px] top-[-5px] right-0 pb-[10px]  pt-[5px] bg-white">
                <div className="py-[10px] px-[15px] rounded-[12px] bg-black text-white">
                  {" "}
                  <i className="bi  bi-arrow-up-right"></i>
                </div>
              </div>

              {/* the text */}
            </div>
            <div className="w-full  flex flex-col gap-[0px] nova">
              <p className="text-[18px] text-[grey] capitalize">
                Social Media - Business
              </p>
              <h3 className="text-[32px] font-medium capitalize">
                Bondbullies
              </h3>
            </div>
          </div>
          <div className="h-auto   flex flex-col  w-[40%]">
            <div
              className=" rounded-[12px]  port_gen w-full relative h-[20vw] "
              style={{ backgroundImage: "url(/home/port2.webp)" }}
            >
              <div className="pl-[10px] absolute rounded-l-[12px] top-[-5px] right-0 pb-[10px]  pt-[5px] bg-white">
                <div className="py-[10px] px-[15px] rounded-[12px] bg-black text-white">
                  {" "}
                  <i className="bi  bi-arrow-up-right"></i>
                </div>
              </div>

              {/* the text */}
            </div>
            <div className="w-full  flex flex-col gap-[0px] nova">
              <p className="text-[18px] text-[grey] capitalize">
                Adventure - Climbing
              </p>
              <h3 className="text-[32px] font-medium capitalize">
                Climb Onsight
              </h3>
            </div>
          </div>
          <div className="h-auto   flex flex-col  w-[27%]">
            <div
              className=" rounded-[12px]  port_gen w-full relative h-[20vw] "
              style={{
                backgroundImage: "url(/home/port3.webp)",
              }}
            >
              <div className="pl-[10px] absolute rounded-l-[12px] top-[-5px] right-0 pb-[10px]  pt-[5px] bg-white">
                <div className="py-[10px] px-[15px] rounded-[12px] bg-black text-white">
                  {" "}
                  <i className="bi  bi-arrow-up-right"></i>
                </div>
              </div>

              {/* the text */}
            </div>
            <div className="w-full  flex flex-col gap-[0px] nova">
              <p className="text-[18px] text-[grey] capitalize">
                Housing - Construction
              </p>
              <h3 className="text-[32px] font-medium capitalize">Atella</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_portfolio;
