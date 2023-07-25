"use client";

import React from "react";
const Method = () => {
  return (
    <>
      <div className="w-full px-[100px] pt-[60px] pb-[80px]  flex flex-col gap-[80px]">
        <div className="w-full  flex justify-between items-center">
          <div className="flex flex-col gap-[12px] w-full ">
            <p className="text-[24px] nova font-[900] text-[#D01717] capitalize">
              method
            </p>
            <h1 className="nova w-full font-[500] text-black text-[60px] capitalize">
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

        <div className="w-full">
          <div className="flex justify-center capitalize text-[20px] nova font-[700]">
            <div className="w-[25vw] h-[25vw] flex justify-center items-center method_bg ">
              Research
            </div>
            <div className="w-[25vw] h-[25vw] flex justify-center items-center method_bg ">
              Design
            </div>
            <div className="w-[25vw] h-[25vw] flex justify-center items-center method_bg ">
              User testing
            </div>
          </div>
          <div className="flex justify-center capitalize text-[20px] nova font-[700]">
            <div className="w-[25vw] h-[25vw] flex justify-center items-center method_bg ">
              Development
            </div>
            <div className="w-[25vw] h-[25vw] flex justify-center items-center method_bg ">
              Deployment
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Method;
