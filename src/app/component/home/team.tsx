"use client";

import Image from "next/image";
import React from "react";
import location from "../../../../public/home/location.webp";

const Home_Team = () => {
  return (
    <>
      <div className="w-full bg-white h-auto  p_r sm:py-[10vw] py-[3.3vw] flex justify-between gap-[1.25vw] items-center  sm:flex-col sm:gap-[4vw] ">
        <div className="flex w-full h-[10.3vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#F1F1F1]  flex-col p-[1.25vw] justify-between  ">
          <div className="w-full flex justify-between nova ">
            <p className="text-[3.5vw] sm:text-[10vw]">34</p>
            <p className="py-[0.7vw] px-[1vw] bg-white  rounded-[1.4vw] h-fit text-[1.1vw] sm:text-[4vw] sm:px-[4vw] sm:rounded-[7.6vw] sm:py-[2vw]">
              Team
            </p>
          </div>
          <p className="text-[1.6vw] sm:text-[6.7vw]">Total Employess</p>
        </div>

        <div className="flex w-full h-[10.3vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#F1F1F1]  flex-col p-[1.25vw] justify-between">
          <div className="w-full flex justify-between nova ">
            <p className="text-[3.5vw] sm:text-[10vw]">02</p>
            <div className="w-[6.7vw] sm:w-[24vw]  h-[4vw] sm:h-[11.25vw]">
              <Image
                priority
                src={location}
                alt="location img"
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-[1.6vw] sm:text-[6.7vw]">Locations</p>
        </div>

        <div className="flex w-full h-[10.3vw] sm:h-[38vw] sm:rounded-[5.57vw] sm:px-[4vw] sm:py-[3vw] rounded-[2vw] bg-[#D01717] border2 flex-col p-[1.25vw] justify-between text-white">
          <div className="w-full flex justify-between nova ">
            <p className="text-[3.5vw] sm:text-[10vw]">123</p>
            <p className="py-[0.7vw] px-[1vw] bg-white  bg-opacity-[26%] rounded-[1.4vw] h-fit text-[1.3vw] sm:text-[3vw] sm:px-[3vw] sm:py-[2vw] sm:rounded-[7.6vw]">
              PROJECTS
            </p>
          </div>
          <p className="text-[1.6vw] sm:text-[6.7vw]">Total projects yealy</p>
        </div>

        {/* <div className="flex w-full h-[200px] rounded-[2vw] bg-[#F1F1F1] border2 flex-col p-[1.25vw] justify-between">
          <div className="w-full flex justify-between ">
            <p className="">34</p>
            <p className="">Team</p>
          </div>
          <p className="">Total Employess</p>
        </div>
        <div className="flex w-full h-[200px] rounded-[2vw] bg-[#D01717] border2 flex-col p-[1.25vw] justify-between">
          <div className="w-full flex justify-between ">
            <p className="">34</p>
            <p className="">Team</p>
          </div>
          <p className="">Total Employess</p>
        </div> */}
      </div>
    </>
  );
};

export default Home_Team;
