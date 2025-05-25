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
  NeueHaasDisplay_roman,
} from "@/app/utils/fonts";
import drop_down from "@/../public/new_service/drop_down.png";

// NOW FOR THE IAMGES

// ECCOMERCE
// ECCOMERCE
// ECCOMERCE

import vibes_only from "@/../public/past_work/eccomerce/vibes_only.webp";
import katePerry from "@/../public/past_work/katePerry.webp";
import cameo from "@/../public/past_work/cameo.webp";
import brala from "@/../public/past_work/brala.webp";
import Vazzi from "@/../public/past_work/eccomerce/vazzi.png";
import Yulia from "@/../public/past_work/eccomerce/Yulia.png";
import dailycomputer from "@/../public/past_work/eccomerce/dailycomputer.png";
import Tinypod from "@/../public/past_work/eccomerce/tinypod.png";
import get_unity from "@/../public/past_work/eccomerce/get_unity.webp";
import wild_brands from "@/../public/past_work/eccomerce/wild_brands.webp";
import with_character from "@/../public/past_work/eccomerce/with_character.webp";
import spoil_child from "@/../public/past_work/eccomerce/spoil_child.webp";

import mob_vibes_only from "@/../public/past_work/eccomerce/mob_vibes_only.webp";
import mob_get_unity from "@/../public/past_work/eccomerce/mob_get_unity.webp";
import mob_wild_brands from "@/../public/past_work/eccomerce/mob_wild_brands.webp";
import mob_with_character from "@/../public/past_work/eccomerce/mob_with_character.webp";
import mob_spoil_child from "@/../public/past_work/eccomerce/mob_spoil_child.webp";

// GENERAL WEBSITE
// GENERAL WEBSITE
// GENERAL WEBSITE
import q_department from "@/../public/past_work/general_website/q_department.webp";
import good_juuju from "@/../public/past_work/general_website/good_juuju.webp";
import atella_studio from "@/../public/past_work/general_website/atella_studio.webp";
import re_origin from "@/../public/past_work/general_website/re_origin.webp";
import orbit_law from "@/../public/past_work/general_website/orbit_law.webp";
import apr from "@/../public/past_work/general_website/apr.webp";

import mob_q_department from "@/../public/past_work/general_website/mob_q_department.webp";
import mob_good_juuju from "@/../public/past_work/general_website/mob_good_juuju.webp";
import mob_atella_studio from "@/../public/past_work/general_website/mob_atella_studio.webp";
import mob_re_origin from "@/../public/past_work/general_website/mob_re_origin.webp";
import mob_orbit_law from "@/../public/past_work/general_website/mob_orbit_law.webp";
import mob_apr from "@/../public/past_work/general_website/mob_apr.webp";

// HEALTHCARE
// HEALTHCARE
// HEALTHCARE
import cabinet_health from "@/../public/past_work/healthcare/cabinet_health.webp";
import decibel from "@/../public/past_work/healthcare/decibel.webp";
import ysotope from "@/../public/past_work/healthcare/ysotope.webp";
import pico from "@/../public/past_work/healthcare/pico.webp";
import exo from "@/../public/past_work/healthcare/exo.webp";

import mob_cabinet_health from "@/../public/past_work/healthcare/mob_cabinet_health.webp";
import mob_decibel from "@/../public/past_work/healthcare/mob_decibel.webp";
import mob_ysotope from "@/../public/past_work/healthcare/mob_ysotope.webp";
import mob_pico from "@/../public/past_work/healthcare/mob_pico.webp";
import mob_exo from "@/../public/past_work/healthcare/mob_exo.webp";

// SOFTWARE
// SOFTWARE
// SOFTWARE
import modamu from "@/../public/past_work/software/modamu.webp";
import climb_onsight from "@/../public/past_work/software/climb_onsight.webp";
import mob_climb_onsight from "@/../public/past_work/software/mob_climb_onsight.webp";

// ARCHITECTURE
// ARCHITECTURE
// ARCHITECTURE

import harc from "@/../public/past_work/architecture/harc.webp";
import atella_ca from "@/../public/past_work/architecture/atella_ca.webp";
import archier from "@/../public/past_work/architecture/archier.webp";
import mitrex from "@/../public/past_work/architecture/mitrex.webp";
import hastings from "@/../public/past_work/architecture/hastings.webp";
import west from "@/../public/past_work/architecture/53_west_53.webp";
import weeks from "@/../public/past_work/architecture/weeks.webp";
import market_vision from "@/../public/past_work/architecture/marketvision.webp";
import autexacoustics from "@/../public/past_work/architecture/autex_acoustics.webp";

import mob_harc from "@/../public/past_work/architecture/mob_harc.webp";
import mob_atella_ca from "@/../public/past_work/architecture/mob_atella_ca.webp";
import mob_archier from "@/../public/past_work/architecture/mob_archier.webp";
import mob_mitrex from "@/../public/past_work/architecture/mob_mitrex.webp";
import mob_hastings from "@/../public/past_work/architecture/mob_hastings.webp";
import mob_west from "@/../public/past_work/architecture/mob_53_west_53.webp";
import mob_weeks from "@/../public/past_work/architecture/mob_weeks.webp";
import mob_marketvision from "@/../public/past_work/architecture/mob_marketvision.webp";
import mob_autexacoustics from "@/../public/past_work/architecture/mob_autex_acoustics.webp";

// PORTFOLIO
// PORTFOLIO
// PORTFOLIO
import gus_gooney from "@/../public/past_work/portfolio/gus_gooney.webp";
import erica from "@/../public/past_work/portfolio/erica.webp";
import echo_nate from "@/../public/past_work/portfolio/echo_nate.webp";
import hovn_studio from "@/../public/past_work/portfolio/hovn_studio.webp";

import mob_gus_gooney from "@/../public/past_work/portfolio/mob_gus_gooney.webp";
import mob_erica from "@/../public/past_work/portfolio/mob_erica.webp";
import mob_echo_nate from "@/../public/past_work/portfolio/mob_echo_nate.webp";
import mob_hovn_studio from "@/../public/past_work/portfolio/mob_hovn_studio.webp";

import Each_past_work from "@/app/letsgetteslas/each_past_work";
import Script from "next/script";
import Mobile_Live_past_work from "@/app/letsgetteslas/mobile_each_past_work";
import { noSSR } from "next/dynamic";
// import Typewriter from "typewriter-effect";
const Past_work_template = ({
  heading,
  pastwork,
  text_color,
  sethide_nav,
  goggle,
}: any) => {
  const [start_anime, setstart_anime] = useState(false);
  const [path, setpath] = useState("");

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
      { threshold: 0.51 }
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

  const menu_arr = [
    // THIS IS BECAUE OF MALKAIN UPDATE SO THIS IS FOR IT TO DISPLAY SINGLY
    {
      title: "MalkainSpecial",
      body: [
        {
          demo: true,
          img: katePerry,
          text: "katy perry collection",
          link: "https://kate-perry.vercel.app/",
          mob_img: katePerry,
        },
        {
          // demo: true,
          img: brala,
          text: "Brala's Best",
          link: "https://brala.vercel.app",
          mob_img: brala,
        },
        {
          img: Tinypod,
          text: "The Tinypod ",
          link: "https://thetinypod.com/",
          mob_img: Tinypod,
        },
        {
          img: q_department,
          text: "Q Department ",
          link: "https://www.qdepartment.com/",
          video: true,
          video_link: "/showcase/q.mp4",
          scale: true,
          mob_img: mob_q_department,
        },

        {
          img: exo,
          text: "exo",
          link: "https://www.exo.inc/",
          mob_img: mob_exo,
        },
        {
          img: orbit_law,
          link: "https://orbit.law",
          text: "orbit law",
          open_false: true,
          mob_img: mob_orbit_law,
        },

        {
          img: west,
          text: "53 West 53 ",
          link: "https://53w53.com/",
          mob_img: mob_west,
        },
        {
          img: cameo,
          text: "Cameo Surgery ",
          link: "https://www.cameosurgerycenter.com/",
          mob_img: cameo,
        },

        {
          img: good_juuju,
          text: "Good Juju",
          link: "https://heygoodjuju.com/",
          open_false: true,
          mob_img: mob_good_juuju,
        },

        {
          img: hovn_studio,
          text: "Hovn Studios",
          link: "https://hovnstudios.com/",
          mob_img: mob_hovn_studio,
        },
      ],
    },
    {
      title: "Ecommerce",
      body: [
        // {
        //   img: kate_perry,
        //   text: "katy perry collection",
        //   link: "https://www.malkain.com/",
        // },
        {
          img: q_department,
          text: "Q Department ",
          link: "https://www.qdepartment.com/",
          video: true,
          video_link: "/showcase/q.mp4",
          scale: true,
          mob_img: mob_q_department,
        },
        {
          img: Vazzi,
          text: "Vazzi ",
          link: "https://vazzi.fun/#about",
          mob_img: Vazzi,
        },
        {
          img: Tinypod,
          text: "The Tinypod ",
          link: "https://thetinypod.com/",
          mob_img: Tinypod,
        },
        {
          img: dailycomputer,
          text: "Day Light Computer ",
          link: "https://daylightcomputer.com/",
          mob_img: dailycomputer,
        },
        {
          img: Yulia,
          text: "Yulia ",
          link: "https://www.yulia.world/",
          mob_img: Yulia,
        },
        {
          img: atella_studio,
          text: "Atella Studios",
          link: "https://www.atellastudios.com/",
          mob_img: mob_atella_studio,
        },
        // {
        //   img: spoil_child,
        //   text: "Spoiled Child",
        //   // link: "https://spoiledchild.com/",
        //   link: "https://www.spoiledchild.com/",
        //   video_link: "/showcase/s.mp4",
        //   open_false: true,
        //   new_tab: true,
        //   video: true,
        //   mob_img: mob_spoil_child,
        // },
        // {
        //   img: get_unity,
        //   text: "get unity",
        //   link: "http://getunity.com/",
        //   new_tab: true,
        //   mob_img: mob_get_unity,
        // },

        // {
        //   img: with_character,
        //   text: "With character",
        //   link: "https://www.withcharacter.com/",
        //   open_false: true,
        //   mob_img: mob_with_character,
        // },

        // {
        //   img: wild_brands,
        //   text: "wilde brands",
        //   link: "https://www.wildebrands.com/",
        //   mob_img: mob_wild_brands,
        // },
        {
          img: vibes_only,
          text: "vibes only",
          link: "https://www.vibesonly.com/",
          mob_img: mob_vibes_only,
          open_false: true,
        },
      ],
    },
    {
      title: "Architecture",
      body: [
        // {
        //   img: mitrex,
        //   text: "Mitrex ",
        //   link: "https://www.mitrex.com/",
        //   open_false: true,
        //   mob_img: mob_mitrex,
        // },

        {
          img: west,
          text: "53 West 53 ",
          link: "https://53w53.com/",
          mob_img: mob_west,
        },
        {
          img: weeks,
          text: "Weeks off ",
          link: "https://www.weeks-off.com/en",
          mob_img: mob_weeks,
        },
        {
          img: market_vision,
          text: "Market Vision ",
          link: "https://marketvision.ca/",
          mob_img: mob_marketvision,
        },

        {
          img: autexacoustics,
          text: "Autex  Acoustic  ",
          link: "https://www.autexacoustics.com/",
          mob_img: mob_autexacoustics,
        },
        {
          img: harc,
          text: "Harc ",
          link: "https://harc.casa/",
          mob_img: mob_harc,
        },
        {
          img: hastings,
          text: "gow hastings ",
          link: "https://gowhastings.com/",
          mob_img: mob_hastings,
        },

        // {
        //   img: atella_ca,
        //   text: "Atella",
        //   link: "https://www.atella.ca/",
        //   open_false: true,
        //   mob_img: mob_atella_ca,
        // },
        // {
        //   img: archier,
        //   text: "Archier",
        //   link: "https://archier.com.au/",
        //   open_false: true,
        //   new_tab: true,
        //   mob_img: mob_archier,
        // },
      ],
    },
    {
      title: "General website",
      body: [
        // {
        //   img: q_department,
        //   text: "Q Department ",
        //   link: "https://www.qdepartment.com/",
        //   video: true,
        //   video_link: "/showcase/q.mp4",
        //   scale: true,
        //   mob_img: mob_q_department,
        // },
        {
          img: orbit_law,
          link: "https://orbit.law",
          text: "orbit law",
          open_false: true,
          mob_img: mob_orbit_law,
        },
        {
          img: good_juuju,
          text: "Good Juju",
          link: "https://heygoodjuju.com/",
          open_false: true,
          mob_img: mob_good_juuju,
        },

        // {
        //   img: atella_studio,
        //   text: "Atella Studios",
        //   link: "https://www.atellastudios.com/",
        //   mob_img: mob_atella_studio,
        // },
        {
          img: apr,
          text: "apr",
          link: "https://www.aprguarnizioni.com/",
          mob_img: mob_apr,
        },
        // {
        //   img: re_origin,
        //   text: "re-origin",
        //   link: "https://www.re-origin.com/",
        // },
      ],
    },
    {
      title: "Healthcare",
      body: [
        {
          img: ysotope,
          text: "Ysotope",
          link: "https://www.ysotope.com/",
          mob_img: mob_ysotope,
        },

        {
          img: pico,
          text: "Pico",
          link: "https://www.picoclinics.com/",
          mob_img: mob_pico,
        },
        {
          img: exo,
          text: "exo",
          link: "https://www.exo.inc/",
          mob_img: mob_exo,
        },
        {
          img: cabinet_health,
          text: "cabinet health",
          link: "https://cabinethealth.com/",
          open_false: true,
          new_tab: true,
          mob_img: mob_cabinet_health,
        },
        {
          img: decibel,
          text: "Decibel",
          link: "https://www.decibelhealth.com/",
          mob_img: mob_decibel,
        },
      ],
    },

    {
      title: "Portfolio",
      body: [
        {
          img: echo_nate,
          text: "Echo and Nate",
          link: "https://echoandnate.com",
          open_false: true,
          new_tab: true,
          mob_img: mob_echo_nate,
        },
        {
          img: hovn_studio,
          text: "Hovn Studios",
          link: "https://hovnstudios.com/",
          mob_img: mob_hovn_studio,
        },

        {
          img: erica,
          text: "erica boothby",
          link: "https://erica-malkain.vercel.app/",
          mob_img: mob_erica,
        },
        {
          img: gus_gooney,
          text: "Gus Cooney ",
          link: "https://guscooney.com",
          mob_img: mob_gus_gooney,
        },
      ],
    },
    {
      title: "Software",
      body: [
        {
          img: climb_onsight,
          text: "climb onsight",
          link: "https://app.climbonsight.ca",
          new_tab: true,
          mob_img: mob_climb_onsight,
        },
      ],
    },
  ];

  const [active, setactive] = useState("MalkainSpecial");
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
      <div
        className={`w-full flex flex-col  pb-[4vw] sm:pb-[15vw] pt-[7vw] gap-[4vw] ${
          goggle ? "text-[white] sm:text-[black]" : ""
        }`}
      >
        {" "}
        <h3
          style={
            {
              // color: text_color,
            }
          }
          className={` leading-[4.2vw] pt-[2rem] text-[3.8vw] sm:text-[8.5vw] px-[20vw]  sm:leading-[7vw]  text-center   ${NeueHaasDisplay_roman.className}`}
        >
          Past Work{" "}
        </h3>
        {/* this is for desktop  */}
        {/* THIS WAS HIDDEN BECAUSE OF MALKAIN UPDATE */}
        <div className="w-full hidden  justify-center gap-[2vw] ">
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
        {/* THIS WAS HIDDEN BECAUSE OF MALKAIN UPDATE */}
        <div className="hidden w-full  sm:mx-auto   bg-[#FF0000] py-[2vw] overflow-hidden  justify-center border2 relative sm:w-[50vw] sm:rounded-[8.75vw] sm:text-[3.5vw]   sm:h-[11.2vw]">
          <select
            className={`sm:text-[5vw] select relative bg-[#FF0000]  outline-none  ${NeueHaasDisplay_roman.className} capitalize  justify-center text-center   text-white`}
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
        <div className="w-full flex  px-[3vw]  sm:gap-[6vw] sm:px-0 justify-center gap-[3vw] flex-wrap ">
          {/* DESKTOP DESIGN */}
          <div
            className={`w-full sm:w-full flex sm:hidden   sm:gap-[6vw] sm:px-[3vw] justify-between gap-[3vw]  flex-wrap   `}
          >
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
          {/* MOBILE DESIGN */}
          <div className="w-full sm:w-full sm:flex hidden   sm:gap-[6vw] sm:px-0 justify-between gap-[3vw]  flex-wrap ">
            {menu_arr.map((outer: any, outer_index: any) => {
              return (
                <>
                  {active == outer.title && (
                    <Mobile_Live_past_work
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

      {/* <FetchData /> */}
    </>
  );
};

export default Past_work_template;
