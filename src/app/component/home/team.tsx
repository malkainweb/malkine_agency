"use client";

import Image from "next/image";
import React from "react";
import location from "../../../../public/home/location.webp";

const Home_Team = () => {
  return (
    <>
      <div className="w-full bg-white h-auto  p_r py-[50px] flex justify-between gap-[20px] items-center ">
        <div className="flex w-full h-[13.3vw] rounded-[30px] bg-[#F1F1F1]  flex-col p-[20px] justify-between">
          <div className="w-full flex justify-between nova ">
            <p className="text-[55px] ">34</p>
            <p className="py-[10px] px-[15px] bg-white rounded-[21px] h-fit">
              Team
            </p>
          </div>
          <p className="text-[26px]">Total Employess</p>
        </div>

        <div className="flex w-full h-[13.3vw] rounded-[30px] bg-[#F1F1F1]  flex-col p-[20px] justify-between">
          <div className="w-full flex justify-between nova ">
            <p className="text-[55px] ">02</p>
            <div className="w-[100px]   h-[60px]">
              <Image
                src={location}
                alt="location img"
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-[26px]">Locations</p>
        </div>

        <div className="flex w-full h-[13.3vw] rounded-[30px] bg-[#D01717] border2 flex-col p-[20px] justify-between text-white">
          <div className="w-full flex justify-between nova ">
            <p className="text-[55px] ">123</p>
            <p className="py-[10px] px-[15px] bg-white bg-opacity-[26%] rounded-[21px] h-fit">
              PROJECTS
            </p>
          </div>
          <p className="text-[26px]">Total projects yealy</p>
        </div>

        {/* <div className="flex w-full h-[200px] rounded-[30px] bg-[#F1F1F1] border2 flex-col p-[20px] justify-between">
          <div className="w-full flex justify-between ">
            <p className="">34</p>
            <p className="">Team</p>
          </div>
          <p className="">Total Employess</p>
        </div>
        <div className="flex w-full h-[200px] rounded-[30px] bg-[#D01717] border2 flex-col p-[20px] justify-between">
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
