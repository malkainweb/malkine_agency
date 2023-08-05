"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import img1 from "../../../../public/about/team1.webp";
import img2 from "../../../../public/about/team2.webp";
import img3 from "../../../../public/about/team3.webp";
import img4 from "../../../../public/about/team4.webp";
import img5 from "../../../../public/about/team5.webp";
import img6 from "../../../../public/about/team6.webp";

const Team = () => {
  const [team, setteam] = useState([
    {
      img: img1,
      name: "Emmanuel Nwosu",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["management"], ["team planning"]],
    },
    {
      img: img2,
      name: "Kalu Chijoke",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["ui design"], ["prototyping"], ["web design"]],
    },
    {
      img: img3,
      name: "Nathan Chris",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["management"], ["team planning"]],
    },
    {
      img: img4,
      name: "Mirian Achonwa",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["ui design"], ["prototyping"], ["web design"]],
    },
    {
      img: img5,
      name: "Joseph Etim",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["management"], ["team planning"]],
    },
    {
      img: img6,
      name: "Onyinye Philips",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["ui design"], ["prototyping"], ["web design"]],
    },
  ]);

  const teamArray = [
    {
      img: img1,
      name: "emmanuel nwosu",
      des: "Lorem ipsum dolor sit amet consectetur. At et varius vitae elementum sociis sit. Ut convallis ipsum vel justo amet eu ullamcorper id morbi.",
      skill: [["management"], ["team planning"]],
    },
  ];

  //   useEffect(() => {
  //     setteam(teamArray);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <>
      <div className="w-full h-auto flex flex-col bg-black gap-[50px] pt-[300px] pb-[100px] p_r">
        {/* first section */}
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <h1 className="nova text-[64px] text-white">Our vision</h1>
          <p className="text-[#c3c2c2] text-[20px] text-center nova font-[300]">
            <span className="font-[700] text-white"> Our team</span> works hard
            to create profound design asethetics that <br />
            are well crafted . We explore and push boundaries
          </p>
        </div>

        {/* second section */}
        <div className="w-full h-auto flex flex-wrap justify-between gap-[50px] ">
          {team.map((main: any, index: any) => {
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
                    <div className="flex flex-wrap gap-[10px] nova items-center">
                      {main.skill.map((a: any, m: any) => {
                        return (
                          <p
                            className="border-black border rounded-[24px] text-[12px]  py-[10px] px-[16px] uppercase"
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
