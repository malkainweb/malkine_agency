"use client";

import React, { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import Image from "next/image";
import showcase1 from "../../../../public/home/gallery/13.webp";
import showcase2 from "../../../../public/showcase/Good_Juju.webp";
import showcase3 from "../../../../public/home/gallery/13.webp";
import showcase4 from "../../../../public/showcase/Harc.webp";
import showcase5 from "../../../../public/showcase/Gus_COONEY.webp";
import showcase6 from "../../../../public/showcase/Atella .webp";
import { League_Spartan } from "next/font/google";
import Link from "next/link";
const league = League_Spartan({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const Slide_showcase = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [items, setitems] = useState([
    {
      heading: "Q department",
      sub_heading: "website design & development",
      link: "https://www.qdepartment.com/",
      img: showcase1,
      video: true,
      video_link:
        "https://res.cloudinary.com/dwovcsb1d/video/upload/v1697180459/q_rzr7sz.mp4",
    },
    {
      heading: "good juju",
      sub_heading: "website design & development",
      link: "https://heygoodjuju.com/",
      img: showcase2,
      video: false,
    },
    {
      heading: "spoiled child",
      sub_heading: "website  development",
      link: "https://spoiledchild.com/",
      img: showcase3,
      video: true,
      video_link:
        "https://res.cloudinary.com/dwovcsb1d/video/upload/v1697180647/s_sw2iga.mp4",
    },
    {
      heading: "harc ",
      sub_heading: "website design & development",
      link: "https://harc.casa/",
      img: showcase4,
      video: false,
    },
    {
      heading: "gus cooney",
      sub_heading: "portfolio website design & development",
      link: "https://www.guscooney.com/",
      img: showcase5,
      video: false,
    },
    {
      heading: "atella",
      sub_heading: "portfolio website design & development",
      link: "https://www.atella.ca/",
      img: showcase6,
      video: false,
    },
  ]);

  const [check, setcheck] = useState(0);
  const [move, setmove] = useState("translate-x-[200vw]");
  // const videoRefs: any = items.map(() => useRef());

  // useEffect(() => {
  //   if (currentVideoIndex !== null && videoRefs[currentVideoIndex]?.current) {
  //     videoRefs[currentVideoIndex].current.play();
  //   }
  // }, [currentVideoIndex]);

  const width = globalThis.innerWidth;

  // console.log(width);
  const { scrollY } = useScroll();

  const scroll_lever = useTransform(
    scrollY,
    // Map x from these values:
    [0, width * 4],

    // Into these values:
    [0, 360],
  );

  // use motion values to console .log
  useMotionValueEvent(scroll_lever, "change", (latest) => {
    {
      globalThis.innerWidth > 650 && setcheck(latest);
    }

    // setmove(`translate-x-[${-latest + "vw"}]`);
  });
  return (
    <>
      <div className="w-full h-[400vw] sm:h-auto relative bg-black sm:pb-[18vw] sm:pt-[20vw]">
        <div
          className={`w-[70vw] sm:w-full  bg-black h-[100vh] sm:h-auto sm:relative  fixed top-0 right-0 z-[9]  transition duration-[1s] pt-[3vw]`}
        >
          <h1
            className={`${league.className} hidden sm:block text-[6vw] league text-white text-center pb-[5vw] font-[600]`}
          >
            Our Work
          </h1>

          <Link
            href={"/contact"}
            className={`${league.className} league hidden sm:block fixed bottom-[4vw] z-[11] left-[50%] translate-x-[-50%] py-[2.5vw] px-[6vw] text-[4vw] hover:bg-[#920808] bg-[#D01717] text-white  sm:rounded-[9.75vw]`}
          >
            Contact Us
          </Link>
          {/* the container tht hadnles it  */}
          <div
            className={`w-[370vw] sm:w-full h-full relative top-0 justify-center items-center gap-[4vw] sm:gap-[6vw] right-0  flex pl-[4vw] sm:pl-0 sm:flex-col`}
            style={{ transform: `translateX(-${check}vw)` }}
          >
            {items.map((e: any, index: any) => {
              return (
                <Link
                  href={e.link}
                  target="_blank"
                  className="w-[70%]  sm:w-[90vw] h-auto flex flex-col gap-[0.2vw] text-white hover:scale-[1.01] hover:text-[#D01717] transition duration-[0.3s]"
                  key={index}
                >
                  <div className="w-full h-[35vw] sm:h-[50vw] overflow-hidden flex justify-center items-center ">
                    {e.video ? (
                      <div className="w-full  h-full">
                        <video
                          // ref={videoRefs[index]}
                          loop={true}
                          className="scale-[1.2]"
                          muted={true}
                          playsInline={true}
                          autoPlay={true}
                          preload="auto"
                          controls={false}
                          onPlay={() => setCurrentVideoIndex(index)}
                        >
                          {" "}
                          <source src={e.video_link} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <Image
                        src={e.img}
                        alt="showcase images "
                        className="w-full scale-[1.3] sm:scale-[1] h-fit "
                      />
                    )}
                  </div>

                  <div className="flex flex-col   capitalize">
                    <h2
                      className={`${league.className} text-[3vw] league font-[700] sm:text-[6vw]`}
                    >
                      {e.heading}
                    </h2>
                    <p className="text-[1.5vw] opacity-[60%] sm:text-[3vw]  text-white">
                      {e.sub_heading}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Slide_showcase;