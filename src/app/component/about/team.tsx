"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import img1 from "../../../../public/about/team1.webp";

const Team = () => {
  const [team, setteam] = useState([
    {
      img: img1,
      name: "emmanuel nwosu",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: ["management, team planning"],
    },
  ]);

  const teamArray = [
    {
      img: img1,
      name: "emmanuel nwosu",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: ["management, team planning"],
    },
  ];

  //   useEffect(() => {
  //     setteam(teamArray);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-[50px] py-[100px] p_r">
        {/* first section */}
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <h1 className="nova text-[64px] text-white">Our vision</h1>
          <p className="text-[#e4e4e4] text-[20px] text-center nova font-[300]">
            <span className="font-[700]"> Our team</span> works hard to create
            profound design asethetics that <br />
            are well crafted . We explore and push boundaries
          </p>
        </div>

        {/* second section */}
        <div className="w-full h-auto flex flex-wrap justify-between gap-[50px] border">
          {teamArray.map((main: any, index: any) => {
            return (
              <div
                className="bg-white rounded-[10px] px-[50px] py-[70px] w-[48%] h-[500px]  flex justify-between items-center"
                key={index}
              >
                <div className="w-[25%] h-full ">
                  <Image
                    src={main.img}
                    className="w-full h-full"
                    alt="team members"
                  />
                </div>
                {/* the clients imformaiton */}
                <div className="flex flex-col justify-between w-[70%]  h-full">
                  <div className="flex flex-col gap-[10px]">
                    <h1 className="font-[700] nova text-[35px] capitalize">
                      {main.name}
                    </h1>
                    <p className="text-[18px] ">{main.des}</p>
                  </div>
                  {/* skilss section */}
                  <div className="flex flex-col gap-[10px]">
                    <p className="nova text-[24px] text-[red] font-[500]">
                      Skills
                    </p>
                    <div className="flex gap-[10px] nova ">
                      {main.skill.map((a: any, m: any) => {
                        return (
                          <p
                            className="border-black border rounded-[24px]  py-[10px] px-[16px] uppercase"
                            key={m}
                          >
                            {a}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
