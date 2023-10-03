"use client";

import React from "react";
import Header_transparant from "../navigation/header_transparant";
import { useState } from "react";
import Head from "next/head";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Header_black from "../navigation/header_black_nav";
import Image from "next/image";
import hero from "../../../../public/services/hero.webp";
import mob_hero from "../../../../public/services/mob_hero.webp";
import Link from "next/link";

const Hero_services = (props: any) => {
  const { setleft, setright, setopacity, white } = props;

  const [example, setexample] = useState("sm:sticky");

  const [service_arr, setservice_arr] = useState([
    {
      class: 1,
      des: "Website & Platform Design",
    },
    {
      class: 2,
      des: "Software Design & Development",
    },
    {
      class: 3,
      des: "Ecommerce Website Design & Development",
    },

    {
      class: 4,
      des: "User Management Systems",
    },
    {
      class: 5,
      des: "Custom API Development",
    },
    {
      class: 6,
      des: "Backend System Development",
    },
    {
      class: 7,
      des: "Web/Mobile App Development",
    },
    {
      class: 8,
      des: "UI/UX For Web Mobile Apps",
    },
    {
      class: 9,
      des: "UI/UX For Websites & Platforms",
    },
  ]);

  const [des_translate, setdes_translate] = useState("translate: 0vw 0vw;");

  const [check_num, setcheck_num] = useState(1);

  const width = globalThis.innerWidth;

  const new_width = width * 1;

  const end_width = new_width + width * 2.5;

  const mob_new_width = width * 1;

  const mob_end_width = mob_new_width + width * 2.8;

  const { scrollY } = useScroll();

  const scroll_lever = useTransform(
    scrollY,
    // Map x from these values:
    [
      width >= 651 ? new_width : mob_new_width,
      width >= 651 ? end_width : mob_end_width,
    ],

    // Into these values:
    [0, 11],
  );

  useMotionValueEvent(scroll_lever, "change", (latest) => {
    if (width >= 651) {
      if (latest >= 0 && latest <= 1) {
        setdes_translate("translate-y-[0vw]");
        setcheck_num(1);
      }
      if (latest >= 1 && latest <= 2) {
        setdes_translate("translate-y-[-6vw]");
        setcheck_num(2);
      }
      if (latest >= 2 && latest <= 3) {
        setdes_translate("translate-y-[-12vw]");
        setcheck_num(3);
      }
      if (latest >= 3 && latest <= 4) {
        setdes_translate("translate-y-[-18vw]");
        setcheck_num(4);
      }
      if (latest >= 4 && latest <= 5) {
        setdes_translate("translate-y-[-24vw]");
        setcheck_num(5);
      }
      if (latest >= 5 && latest <= 6) {
        setdes_translate("translate-y-[-30vw]");
        setcheck_num(6);
      }
      if (latest >= 6 && latest <= 7) {
        setdes_translate("translate-y-[-36vw]");
        setcheck_num(7);
      }
      if (latest >= 7 && latest <= 8) {
        setdes_translate("translate-y-[-42vw]");
        setcheck_num(8);
      }
      if (latest >= 8 && latest <= 9) {
        setdes_translate("translate-y-[-48vw]");
        setcheck_num(9);
      }
    } else if (width <= 650) {
      if (latest >= 0 && latest <= 9) {
        setexample("sm:fixed");
      }
      if (latest <= 0.1) {
        setexample("sm:sticky");
      }

      if (latest >= 0 && latest <= 1) {
        setcheck_num(1);
        setexample("sm:sticky");
      }
      if (latest >= 1 && latest <= 2) {
        setcheck_num(2);
      }
      if (latest >= 2 && latest <= 3) {
        setcheck_num(3);
      }
      if (latest >= 3 && latest <= 4) {
        setcheck_num(4);
      }
      if (latest >= 4 && latest <= 5) {
        setcheck_num(5);
      }
      if (latest >= 5 && latest <= 6) {
        setcheck_num(6);
      }
      if (latest >= 6 && latest <= 7) {
        setcheck_num(7);
      }
      if (latest >= 7 && latest <= 8) {
        setcheck_num(8);
      }
      if (latest >= 8 && latest <= 9) {
        setcheck_num(9);
        setexample("sm:fixed");
      }
      if (latest >= 9 && latest <= 10) {
      }
      if (latest >= 10) {
      }
      if (latest >= 10.2) {
        setexample("sm:sticky");
      }
    }
  });

  return (
    <>
      <div className="w-full py-[0.8vw] px-[0.8vw] h-[100vw] sm:h-[160vw]  sm:py-[2vw] sm:px-[1.2vw]">
        <div className="w-full flex flex-col rounded-[3.3vw] gap-[10vw] h-full relative ">
          <Image
            src={hero}
            priority
            alt=""
            className="w-full h-full absolute top-0 left-0 sm:hidden"
          />
          <Image
            src={mob_hero}
            priority
            alt=""
            className="w-full h-full absolute top-0 left-0 sm:block hidden"
          />
          <Header_transparant
            setleft={setleft}
            setright={setright}
            setopacity={setopacity}
            white={white}
          />

          <div className="w-full flex flex-col gap-[1.7vw] sm:gap-[2.5vw] pt-[12vw] sm:pt-[25vw]  blend px-[5.13vw]">
            <p className="nova  text-[1.6vw] font-[900]  text-[#dcdcdc] sm:text-[4vw] ">
              <Head>
                <meta name="robots" content="noindex" />
              </Head>
              Services
            </p>
            <h1
              className="novabold  text-[2.7vw] text-[#232323] leading-[3.2vw]  sm:text-[5vw]  sm:block sm:leading-[6vw] capitalize"
              // style={{ lineHeight: "3.2vw" }}
            >
              We are a full-service <br className="hidden sm:block" /> design{" "}
              <br className="sm:hidden block" />
              and development <br className="hidden sm:block" /> agency{" "}
              <br className="sm:hidden block" /> collaborating with{" "}
              <br className="hidden sm:block" /> brands to{" "}
              <br className="sm:hidden block" /> deliver innovative{" "}
              <br className="hidden sm:block" /> online experiences.
            </h1>

            <Link
              href={"contact"}
              className="nova w-fit  text-[1.07vw] font[900]text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717] text-white hover:bg-[#920808] sm:text-[3vw] font[900]  sm:rounded-[9.75vw] sm:px-[12vw]  sm:py-[4vw]  sm:text-white sm:mt-[2vw] "
            >
              Work with us <i className="bi bi-arrow-right sm:hidden"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* next section under home  */}
      <div className="w-full bg-white pb-[2vw] pt-[7vw] h-[240vw] sm:h-auto p_r flex flex-col sm:gap-[20vw] relative  sm:pb-[20vw] ">
        {/* first div */}
        <div className="w-full flex sm:flex-col sm:gap-[4vw] sm:items-start justify-between items-center  h-auto text-[#0C0A0A]">
          <div className="flex flex-col gap-[2.5vw]  font-[helvetica] ">
            <h3 className=" text-[4vw]  font-[500] sm:text-[6vw]">
              Services we offer
            </h3>
          </div>
        </div>

        {/* second div */}
        <div
          className={`w-full h-[32vw] sm:h-[100vw] sm:hidden items-end sticky ${example} left-0 top-[10vw] sm:top-[40vw]  flex `}
          style={{ overflow: "clip" }}
        >
          {/* first relative box */}
          <div className="absolute top-0 left-0 h-[13vw]   sm:h-[50vw]  w-full  bg-gradient-to-b from-[white] z-[20]"></div>
          {/* second relative box */}
          <div className="absolute bottom-0 left-0 h-[13vw]  sm:h-[50vw]  w-full  bg-gradient-to-t from-[white] z-[20]"></div>
          {/* <div className="absolute top-[13vw]  left-0 h-[6vw]  w-full text-black bg-[red]"></div> */}

          {/* the normaltext animation   */}
          <div
            className={`w-full h-[19vw] sm:h-[56vw]  flex flex-wrap justify-start ${des_translate} transition duration-[1s] z-[10] `}
          >
            {service_arr.map((e: any, index: any) => {
              return (
                <p
                  key={index}
                  className={`w-full text-[4.2vw] sm:text-[4.3vw] sm:font-[600] sm:text-center  h-[6vw] sm:h-[12vw] flex justify-center transition duration-[0.1s] items-center font-[helvetica] text-[${
                    e.class == check_num ? "#D01717" : "black"
                  }]  `}
                >
                  {e.des}
                </p>
              );
            })}
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        {/* <div className="absolute top-[13vw]  left-0 h-[6vw]  w-full text-black bg-[red]"></div> */}

        {/* the normaltext animation */}
        <div
          className={`w-full h-[19vw] hidden sm:h-auto  sm:flex flex-wrap justify-start  sm:gap-[6.5vw]  transition duration-[1s] z-[10]`}
        >
          {service_arr.map((e: any, index: any) => {
            return (
              <p
                key={index}
                className={`w-full text-[4.3vw] sm:text-center sm:text-[5.95vw] text-center sm:font-[600]  flex justify-center transition duration-[0.1s] items-center font-[helvetica] text-[${
                  e.class == check_num ? "#D01717" : "#808080"
                }] `}
              >
                {e.des}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero_services;
