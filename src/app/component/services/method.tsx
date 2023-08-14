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
  const [mbbilemeth1, setmbbilemeth1] = useState(["Research", "Design"]);
  const [mbbilemeth2, setmbbilemeth2] = useState([
    "Developement ",
    "Deployment",
  ]);
  const [mobile_center, setmobile_center] = useState(["user testing  "]);

  return (
    <>
      <div className="w-full px-[6.7vw] sm:px-[3.5vw] py-[3.3vw] flex  flex-col gap-[3.3vw]">
        <div className="w-full sm:flex-col  flex justify-between items-center sm:gap-[7vw]">
          <div className="flex flex-col gap-[0.8vw] sm:gap-[2.5vw] w-full ">
            <p className="text-[1.6vw] nova font-[900] text-[#D01717] capitalize sm:text-[3vw]">
              method
            </p>
            <h1 className="novabold w-full sm:hidden  font-[500] text-black text-[4vw] capitalize sm:text-[5.5vw]">
              We offer an end to end project system
            </h1>
            <h1 className="novabold w-full hidden sm:block font-[600] text-black text-[4vw] capitalize sm:text-[5.5vw]">
              We offer an end to <br />
              end project system
            </h1>
          </div>
          <div className=" min-w-[40%] flex justify-end sm:w-full ">
            <p className="text-[1.4vw] text-black nova font-[300] sm:hidden ">
              We offer a slue of different services <br /> which spans research,
              design, logos,
              <br /> development and deployment. We offer <br />
              an end to end system where we cover
              <br /> all of your project needs. We are <br />
              determined, detailed, focused and goal <br />
              minded given that we aim to always push <br />
              boundaries and think outside the box
            </p>

            <p className="sm:text-[3.5vw] hidden sm:block ">
              We ofer a slue of different services which spans research, design,
              logos, development and deployment. We offer an end to end system
              where we cover all of your project needs. We are determined,
              detailed, focused and goal minded given that we aim to always puh
              boundaries and think outside the box
            </p>
          </div>
        </div>
        {/* the diagrmas */}
        {/*  */}

        <div className="w-full flex flex-col sm:py-[5vw] sm:gap-[1vw]">
          <div className="flex justify-center sm:hidden gap-[3.3vw] capitalize text-[20px] nova ">
            {meth.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw]  h-[18vw]  flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    priority
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[6.6vw] h-fit top-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[0.8vw] h-fit right-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    priority
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[6.6vw] h-fit bottom-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={left_arrow}
                    alt="left_arrow"
                    className="absolute w-[1vw] h-fit left-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <div
                    className="h-full  w-full flex justify-center font-[700] items-center nova rounded-[100%] "
                    style={{ border: "2vw solid #DAD6D3 " }}
                  >
                    <p className="text-[1.6vw]"> {e} </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* this is the destop  */}
          <div className="flex justify-center sm:hidden capitalize gap-[3.3vw] text-[20px] nova font-[700]">
            {meth2.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw] h-[18vw]  flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    priority
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[6.6vw] h-fit top-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[0.8vw] h-fit right-[0.8vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    priority
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[6.6vw] h-fit bottom-[0.8vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
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

          {/* now below it the mobile  */}
          <div className="hidden sm:flex justify-between gap-[3.3vw] capitalize text-[20px] nova ">
            {mbbilemeth1.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw]  h-[18vw] sm:w-[35vw]  sm:h-[35vw]   flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    priority
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[15vw] h-fit top-[1.9vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[2vw] h-fit right-[1.9vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    priority
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[15vw] h-fit bottom-[1.9vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={left_arrow}
                    alt="left_arrow"
                    className="absolute w-[2.5vw] h-fit left-[1.9vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <div
                    className="h-full  w-full flex justify-center font-[700] items-center nova rounded-[100%] "
                    style={{ border: "4vw solid #DAD6D3 " }}
                  >
                    <p className="text-[3.25vw]"> {e} </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* now below it the  second row mobile  */}
          <div className="hidden sm:flex justify-center gap-[3.3vw] capitalize text-[20px] nova ">
            {mobile_center.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw]  h-[18vw] sm:w-[35vw]  sm:h-[35vw]   flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    priority
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[15vw] h-fit top-[1.9vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[2vw] h-fit right-[1.9vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    priority
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[15vw] h-fit bottom-[1.9vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={left_arrow}
                    alt="left_arrow"
                    className="absolute w-[2.5vw] h-fit left-[1.9vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <div
                    className="h-full  w-full flex justify-center font-[700] items-center nova rounded-[100%] "
                    style={{ border: "4vw solid #DAD6D3 " }}
                  >
                    <p className="text-[3.25vw]"> {e} </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* now below it the mobile  */}
          <div className="hidden sm:flex justify-between gap-[3.3vw] capitalize text-[20px] nova ">
            {mbbilemeth2.map((e: any, index: any) => {
              return (
                <div
                  className="w-[18vw]  h-[18vw] sm:w-[35vw]  sm:h-[35vw]   flex justify-center rounded-[100%] items-center relative"
                  key={index}
                >
                  <Image
                    priority
                    src={top_arrow}
                    alt="top_arrow"
                    className="absolute w-[15vw] h-fit top-[1.9vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={right_arrow}
                    alt="right arrow"
                    className="absolute w-[2vw] h-fit right-[1.9vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <Image
                    priority
                    src={bottom_arrow}
                    alt="bottom_arrow"
                    className="absolute w-[15vw] h-fit bottom-[1.9vw] left-[50%]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                  <Image
                    priority
                    src={left_arrow}
                    alt="left_arrow"
                    className="absolute w-[2.5vw] h-fit left-[1.9vw] top-[50%]"
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <div
                    className="h-full  w-full flex justify-center font-[700] items-center nova rounded-[100%] "
                    style={{ border: "4vw solid #DAD6D3 " }}
                  >
                    <p className="text-[3.25vw]"> {e} </p>
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
