"use client";

import Image from "next/image";
import React from "react";
import location from "../../../../public/home/location.webp";

const Home_Team = () => {
  return (
    <>
      <div className="w-full bg-white h-auto  p_r py-[50px] flex justify-between gap-[1.25vw] items-center ">
        <div className="flex w-full h-[10.3vw] rounded-[2vw] bg-[#F1F1F1]  flex-col p-[1.25vw] justify-between">
          <div className="w-full flex justify-between nova ">
            <p className="text-[3.5vw] ">34</p>
            <p className="py-[0.7vw] px-[1vw] bg-white rounded-[1.4vw] h-fit">
              Team
            </p>
          </div>
          <p className="text-[1.6vw]">Total Employess</p>
        </div>

        <div className="flex w-full h-[10.3vw] rounded-[2vw] bg-[#F1F1F1]  flex-col p-[1.25vw] justify-between">
          <div className="w-full flex justify-between nova ">
            <p className="text-[3.5vw] ">02</p>
            <div className="w-[6.7vw]   h-[4vw]">
              <Image
                priority
                src={location}
                alt="location img"
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-[1.6vw]">Locations</p>
        </div>

        <div className="flex w-full h-[10.3vw] rounded-[2vw] bg-[#D01717] border2 flex-col p-[1.25vw] justify-between text-white">
          <div className="w-full flex justify-between nova ">
            <p className="text-[3.5vw] ">123</p>
            <p className="py-[0.7vw] px-[1vw] bg-white bg-opacity-[26%] rounded-[1.4vw] h-fit">
              PROJECTS
            </p>
          </div>
          <p className="text-[1.6vw]">Total projects yealy</p>
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
