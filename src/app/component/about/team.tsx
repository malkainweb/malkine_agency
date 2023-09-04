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
      <div className="w-full h-auto flex flex-col bg-black gap-[3.3vw] pt-[23.3vw] sm:pt-[42vw] pb-[6.7vw] p_r">
        {/* first section */}
        {/* <div className="flex flex-col justify-center items-center gap-[1.33vw] sm:gap-[6px]">
         
          <p className="text-[#c3c2c2] text-[1.33vw] text-center nova font-[300] sm:hidden">
            <span className="font-[700] text-white"> Our team</span> works hard
            to create profound design asethetics that <br />
            are well crafted . We explore and push boundaries
          </p>
          <p className="text-[#c3c2c2] hidden sm:block text-[3.5vw] text-center nova font-[300] w-full ">
            <span className="font-[700] text-white"> Our team</span> works hard
            to create profound design <br /> asethetics that are well crafted .
            We explore and <br /> push boundaries
          </p>
        </div> */}

        {/* second section */}
        <div className="w-full h-auto flex sm:pb-[6vw] flex-wrap justify-between gap-[3.33vw] pt-[2vw] sm:gap-[8vw]  ">
          {team.map((main: any, index: any) => {
            return (
              <div
                className="bg-white rounded-[0.7vw] sm:rounded-[2.5vw] px-[3.3vw] py-[4.6vw] sm:w-[100%] w-[48%] h-auto  flex justify-between items-center gap-[3vw] sm:gap-[6vw]"
                key={index}
              >
                <div className="w-auto h-[24vw] sm:w-[22vw] sm:h-fit flex  justify-center items-center ">
                  <Image
                    priority
                    src={main.img}
                    className="w-fit h-full sm:h-fit sm:w-full"
                    alt="team members"
                  />
                </div>
                {/* the clients imformaiton */}
                <div className="flex flex-col justify-between w-full  h-full sm:gap-[21vw]">
                  <div className="flex flex-col gap-[0.66vw]">
                    <h1 className="font-[700] nova text-[2.33vw] sm:text-[4.5vw] capitalize">
                      {main.name}
                    </h1>
                    <p className="text-[1.2vw] sm:text-[3vw]">{main.des}</p>
                  </div>
                  {/* skilss section */}
                  <div className="flex flex-col gap-[0.66vw]">
                    <p className="nova text-[1.6vw] sm:text-[4vw] text-[red] font-[500]">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-[0.66vw] sm:gap-[2vw] nova items-center">
                      {main.skill.map((a: any, m: any) => {
                        return (
                          <p
                            className="border-black border rounded-[1.6vw] sm:rounded-[6vw] text-[0.8vw] sm:text-[2.5vw] py-[0.7vw] px-[1.07vw] uppercase"
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
