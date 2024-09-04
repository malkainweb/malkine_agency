"use client";
import Image from "next/image";
import img2 from "../../../../public/landingpage_template/port2.webp";
import img1 from "../../../../public/landingpage_template/port1.webp";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Link_modal from "../modal/link_modal";
import {
  NeueHaasDisplay_bold,
  NeueHaasDisplay_light,
  NeueHaasDisplay_medium,
} from "@/app/utils/fonts";
import drop_down from "@/../public/new_service/drop_down.png";

// NOW FOR THE IAMGES

// ECCOMERCE
// ECCOMERCE
// ECCOMERCE

import vibes_only from "@/../public/past_work/eccomerce/vibes_only.webp";
import get_unity from "@/../public/past_work/eccomerce/get_unity.webp";
import kate_perry from "@/../public/past_work/eccomerce/kate_perry.webp";
import wild_brands from "@/../public/past_work/eccomerce/wild_brands.webp";
import with_character from "@/../public/past_work/eccomerce/with_character.webp";
import spoil_child from "@/../public/landingpage_template/academy_pastworks_images/past_work2.webp";

// GENERAL WEBSITE
// GENERAL WEBSITE
// GENERAL WEBSITE
import q_department from "@/../public/landingpage_template/academy_pastworks_images/past_work1.webp";
import good_juuju from "@/../public/landingpage_template/academy_pastworks_images/past_work5.webp";
import atella_studio from "@/../public/landingpage_template/architect_imgaes/past_work3.webp";
import re_origin from "@/../public/past_work/general_website/re_origin.webp";
import orbit_law from "@/../public/past_work/general_website/orbit_law.webp";
import apr from "@/../public/past_work/general_website/apr.webp";

// HEALTHCARE
// HEALTHCARE
// HEALTHCARE
import cabinet_health from "@/../public/landingpage_template/practice_past_work_images/past_work5.webp";
import decibel from "@/../public/landingpage_template/practice_past_work_images/past_work6.webp";
import ysotope from "@/../public/landingpage_template/practice_past_work_images/past_work3.webp";
import pico from "@/../public/landingpage_template/practice_past_work_images/past_work2.webp";
import exo from "@/../public/past_work/healthcare/exo.webp";

// SOFTWARE
// SOFTWARE
// SOFTWARE
import modamu from "@/../public/past_work/software/modamu.webp";
import climb_onsight from "@/../public/past_work/software/climb_onsight.webp";

// ARCHITECTURE
// ARCHITECTURE
// ARCHITECTURE

import harc from "@/../public/landingpage_template/academy_pastworks_images/past_work4.webp";
import atella_ca from "@/../public/landingpage_template/academy_pastworks_images/past_work6.webp";
import archier from "@/../public/past_work/architecture/archier.webp";
import mitrex from "@/../public/past_work/architecture/mitrex.webp";
import hastings from "@/../public/landingpage_template/architect_imgaes/past_work4.webp";

// PORTFOLIO
// PORTFOLIO
// PORTFOLIO
import gus_gooney from "@/../public/landingpage_template/academy_pastworks_images/img1.webp";
import erica from "@/../public/past_work/portfolio/erica.webp";
import echo_nate from "@/../public/landingpage_template/academy_pastworks_images/img2.webp";
import hovn_studio from "@/../public/landingpage_template/academy_pastworks_images/img3.webp";
import Each_past_work from "@/app/letsgetteslas/each_past_work";
import Script from "next/script";
// import Typewriter from "typewriter-effect";
const Past_work_template = ({
  heading,
  pastwork,
  text_color,
  sethide_nav,
}: any) => {
  //   const info_array = ["", "", "", "", "", ""];
  const [start_anime, setstart_anime] = useState(false);
  const [path, setpath] = useState("");

  // const data_array = [
  //   {
  //     img: img2,
  //     text: "Health-ade - we helped health-ade follow their gut",
  //   },
  //   {
  //     img: img1,
  //     text: "Smartsweets - expanding the candy universe with smartsweets.",
  //   },
  //   {
  //     img: img1,
  //     text: "Nylon - redesigning an iconic magazine for the internet age .",
  //   },
  //   {
  //     img: img2,
  //     text: "Health-ade - we helped health-ade follow their gut",
  //   },
  //   {
  //     img: img2,
  //     text: "Maev - the wellness brand for city dogs and their humans.",
  //   },
  //   {
  //     img: img1,
  //     text: "Petfolk - reshaping pet care for today",
  //   },
  // ];

  const itemsRefs = useRef<any>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any, index: any) => {
          if (entry.isIntersecting) {
            // console.log(entry.target.getAttribute("data-index"));
            entry.target.classList.add("show_item");
            setVisibleIndexes((prevIndexes: any) => [
              ...prevIndexes,
              //   parseInt(entry.target.dataset.index),
              parseInt(entry.target.getAttribute("data-index")),
            ]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      if (itemsRefs) {
        itemsRefs.current.forEach((ref: any) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  //   useEffect(() => {
  //     console.log(visibleIndexes);
  //   }, [visibleIndexes]);

  const menu_arr = [
    {
      title: "Ecommerce",
      body: [
        {
          img: kate_perry,
          text: "katy perry collection",
          link: "https://www.malkain.com/",
        },
        {
          img: spoil_child,
          text: "Spoiled Child",
          // link: "https://spoiledchild.com/",
          link: "https://www.spoiledchild.com/",
          video_link: "/showcase/s.mp4",
          open_false: true,
          video: true,
        },
        {
          img: get_unity,
          text: "get unity",
          link: "http://getunity.com/",
        },
        {
          img: vibes_only,
          text: "vibes only",
          link: "https://www.vibesonly.com/",
          open_false: true,
        },
        {
          img: wild_brands,
          text: "wilde brands",
          link: "https://www.wildebrands.com/",
        },
        {
          img: with_character,
          text: "With character",
          link: "https://www.withcharacter.com/",
          open_false: true,
        },
      ],
    },
    {
      title: "General website",
      body: [
        {
          img: q_department,
          text: "Q Department ",
          link: "https://www.qdepartment.com/",
          video: true,
          video_link: "/showcase/q.mp4",
          scale: true,
        },
        {
          img: good_juuju,
          text: "Good Juju",
          link: "https://heygoodjuju.com/",
          open_false: true,
        },
        {
          img: orbit_law,
          link: "https://orbit.law",
          text: "orbit law",
          open_false: true,
        },
        {
          img: apr,
          text: "apr",
          link: "https://www.aprguarnizioni.com/",
        },
        {
          img: atella_studio,
          text: "Atella Studios",
          link: "https://www.atellastudios.com/",
        },
        {
          img: re_origin,
          text: "re-origin",
          link: "https://www.re-origin.com/",
        },
      ],
    },
    {
      title: "Healthcare",
      body: [
        {
          img: cabinet_health,
          text: "cabinet health",
          link: "https://www.cabinethealth.com",
          open_false: true,
        },
        {
          img: decibel,
          text: "Decibel",
          link: "https://www.decibelhealth.com/",
        },
        {
          img: exo,
          text: "exo",
          link: "https://www.exo.inc/",
        },
        {
          img: ysotope,
          text: "Ysotope",
          link: "https://www.ysotope.com/",
        },
        {
          img: pico,
          text: "Pico",
          link: "https://www.picoclinics.com/",
        },
      ],
    },
    {
      title: "Software",
      body: [
        {
          img: modamu,
          text: "modamu village",
          link: "https://app.modamuvillage.com",
          open_false: true,
        },
        {
          img: climb_onsight,
          text: "climb onsight",
          link: "https://app.climbonsight.ca",
        },
      ],
    },
    {
      title: "Architecture",
      body: [
        {
          img: harc,
          text: "Harc ",
          link: "https://harc.casa/",
        },
        {
          img: atella_ca,
          text: "Atella",
          link: "https://www.atella.ca/",
          open_false: true,
        },
        {
          img: mitrex,
          text: "Mitrex ",
          link: "https://www.mitrex.com/",
          open_false: true,
        },
        {
          img: hastings,
          text: "gow hastings ",
          link: "https://gowhastings.com/",
        },
        {
          img: archier,
          text: "Archier",
          link: "https://archier.com.au/",
          open_false: true,
        },
      ],
    },
    {
      title: "Portfolio",
      body: [
        {
          img: gus_gooney,
          text: "Gus Cooney ",
          link: "https://guscooney.com",
        },
        {
          img: erica,
          text: "erica boothby",
          link: "http://www.ericaboothby.com",
        },
        {
          img: hovn_studio,
          text: "Hovn Studios",
          link: "https://hovnstudios.com",
        },
        {
          img: echo_nate,
          text: "Echo and Nate",
          link: "https://echoandnate.com",
          open_false: true,
        },
      ],
    },
  ];

  const [active, setactive] = useState("Ecommerce");
  const [open_iframe, setopen_iframe] = useState<any>(null);

  useEffect(() => {
    sethide_nav(!start_anime);
  }, [start_anime]);
  return (
    <>
      <Script
        type="module"
        // src="https://unpkg.com/x-frame-bypass"
        src="/x-iframe-bypass.js"
        strategy="afterInteractive" // ensures the script is loaded after the page is interactive
      />
      <Script
        src="https://unpkg.com/@ungap/custom-elements-builtin"
        strategy="afterInteractive"
      />
      <div className="w-full flex flex-col  pb-[4vw] sm:pb-[15vw] pt-[7vw] gap-[4vw] ">
        {" "}
        <h3
          style={
            {
              // color: text_color,
            }
          }
          className={` leading-[4.2vw]  text-[3.8vw] sm:text-[7vw] px-[20vw] sm:px-[2vw] sm:leading-[7vw]  text-center ${NeueHaasDisplay_light.className}`}
        >
          Past Work{" "}
        </h3>
        {/* this is for desktop  */}
        <div className="w-full sm:hidden flex justify-center gap-[2vw] ">
          {menu_arr.map((e: any, index: any) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setactive(e.title);
                }}
                style={{ transition: "0.4s ease" }}
                className={`${
                  active == e.title
                    ? "bg-[#FC2200] text-white border-white"
                    : "border-black"
                } text-[1.2vw]  border rounded-[2vw] px-[2.2vw] py-[0.7vw] ${
                  NeueHaasDisplay_light.className
                } `}
              >
                {e.title}
              </button>
            );
          })}
        </div>
        {/* this is for mobile */}
        {/* Dropdown for mobile devices */}
        <div className="hidden w-fit  mx-auto px-[3vw] sm:rounded-[13vw] bg-[#FF0000] py-[1.5vw] overflow-hidden   sm:flex justify-center relative">
          <select
            className={`sm:text-[5vw] select relative bg-[#FF0000]  outline-none  ${NeueHaasDisplay_light.className} capitalize  justify-center text-center   text-black`}
            onChange={(e) => setactive(e.target.value)}
            value={active}
          >
            {" "}
            {menu_arr.map((e: any, index: any) => (
              <option
                className={`  ${NeueHaasDisplay_light.className} sm:text-[5vw] bg-black text-white `}
                key={index}
                value={e.title}
              >
                {e.title}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex  px-[3vw]  sm:gap-[6vw] sm:px-[3vw] justify-center gap-[3vw] flex-wrap ">
          <div className="w-full sm:w-full flex   sm:gap-[6vw] sm:px-[3vw] justify-between gap-[3vw]  flex-wrap ">
            {menu_arr.map((outer: any, outer_index: any) => {
              return (
                <>
                  {" "}
                  {active == outer.title && (
                    <Each_past_work
                      body={outer.body}
                      setopen_iframe={setopen_iframe}
                      setpath={setpath}
                      setstart_anime={setstart_anime}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>

      {start_anime && (
        <Link_modal
          // nav_items={nav_items}
          setstart_anime={setstart_anime}
          path={path}
          open_iframe={open_iframe}
        />
      )}
    </>
  );
};

export default Past_work_template;
