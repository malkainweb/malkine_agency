"use client";

import Image from "next/image";
import React, { useState } from "react";
import top_arrow from "../../../../public/services/top.webp";
import bottom_arrow from "../../../../public/services/bottom.webp";
import left_arrow from "../../../../public/services/left.webp";
import right_arrow from "../../../../public/services/right.webp";
const Method = () => {
  const [meth, setmeth] = useState([
    ["Research"],
    ["Design"],
    ["User Testing"],
  ]);
  const [meth2, setmeth2] = useState(["Developement ", "Deployment"]);

  return (
    <>
      <div className="w-full px-[100px] py-[50px] flex flex-col gap-[50px]">
        <div className="w-full  flex justify-between items-center">
          <div className="flex flex-col gap-[12px] w-full ">
            <p className="text-[24px] nova font-[900] text-[#D01717] capitalize">
              method
            </p>
            <h1 className="novabold w-full font-[500] text-black text-[60px] capitalize">
              We offer an end to end project system
            </h1>
          </div>
          <div className=" min-w-[40%] flex justify-end">
            <p className="text-[20px] text-black nova font-[300]  ">
              We offer a slue of different services <br /> which spans research,
              design, logos,
              <br /> development and deployment. We offer <br />
              an end to end system where we cover
              <br /> all of your project needs. We are <br />
              determined, detailed, focused and goal <br />
              minded given that we aim to always push <br />
              boundaries and think outside the box
            </p>
          </div>
        </div>
        {/* the diagrmas */}
        {/*  */}

        <div className="w-full flex flex-col ">
          <div className="flex justify-center gap-[3.3vw] capitalize text-[20px] nova ">
            {meth.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw] h-[18vw]  flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[6.6vw] h-fit top-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[0.8vw] h-fit right-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[6.6vw] h-fit bottom-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    src={left_arrow}
                    alt="left_arrow"
                    className="absolute w-[1vw] h-fit left-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <div
                    className="h-full w-full flex justify-center font-[700] items-center nova rounded-[100%] "
                    style={{ border: "2vw solid #DAD6D3 " }}
                  >
                    <p className="text-[1.6vw]"> {e} </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center capitalize gap-[3.3vw] text-[20px] nova font-[700]">
            {meth2.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw] h-[18vw]  flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[6.6vw] h-fit top-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[0.8vw] h-fit right-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[6.6vw] h-fit bottom-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    src={left_arrow}
                    alt="left_arrow"
                    className="absolute w-[1vw] h-fit left-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <div
                    className="h-full w-full flex justify-center font-[700] items-center nova rounded-[100%] "
                    style={{ border: "2vw solid #DAD6D3 " }}
                  >
                    <p className="text-[1.6vw]"> {e} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Method;
