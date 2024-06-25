"use client";
import Image from "next/image";
import img2 from "../../../../public/landingpage_template/port2.webp";
import img1 from "../../../../public/landingpage_template/port1.webp";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// import Typewriter from "typewriter-effect";
const Past_work_template = ({ heading, pastwork }: any) => {
  //   const info_array = ["", "", "", "", "", ""];

  const data_array = [
    {
      img: img2,
      text: "Health-ade - we helped health-ade follow their gut",
    },
    {
      img: img1,
      text: "Smartsweets - expanding the candy universe with smartsweets.",
    },
    {
      img: img1,
      text: "Nylon - redesigning an iconic magazine for the internet age .",
    },
    {
      img: img2,
      text: "Health-ade - we helped health-ade follow their gut",
    },
    {
      img: img2,
      text: "Maev - the wellness brand for city dogs and their humans.",
    },
    {
      img: img1,
      text: "Petfolk - reshaping pet care for today",
    },
  ];

  const itemsRefs = useRef<any>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any, index: any) => {
          if (entry.isIntersecting) {
            console.log(entry.target.getAttribute("data-index"));
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
      { threshold: 0.512 },
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
  return (
    <>
      <div className="w-full flex flex-col  pb-[5vw] sm:pb-[15vw] pt-[7vw] gap-[4vw] ">
        {" "}
        <h3 className="font_helvetica leading-[4.2vw] text-white text-[3.8vw] font-bold sm:text-[6vw] px-[20vw] sm:px-[2vw] sm:leading-[7vw]  text-center">
          {heading}{" "}
        </h3>
        <div className="w-full flex  px-[3vw]  sm:gap-[6vw] sm:px-[3vw] justify-center gap-[3vw] flex-wrap ">
          <div className="w-full sm:w-full flex   sm:gap-[6vw] sm:px-[3vw] justify-between gap-[3vw]  flex-wrap ">
            {pastwork.map((e: any, index: any) => {
              return (
                <Link
                  href={e.link}
                  target="_blank"
                  data-index={index}
                  key={index}
                  ref={(ref) => (itemsRefs.current[index] = ref)}
                  className="w-[48%] group mb-[-1vw] gap-[0.7vw] translate-y-[10%] opacity-0 overflow-hidden transition duration-[1s] sm:gap-[2vw] sm:w-full  flex flex-col "
                >
                  <div className="w-full text-white h-[24vw] bg-[#ffffff71] sm:h-[50vw] overflow-hidden relative sm:rounded-[4.7vw]  rounded-[2.5vw]">
                    {" "}
                    <Image
                      src={e.img}
                      alt="img"
                      className="w-full h-fit group-hover:scale-[1] scale-[1.1] duration-[0.6s] z-[10] transition"
                    />
                    {e.video ? (
                      <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                        <video
                          // ref={videoRefs[index]}
                          loop={true}
                          muted={true}
                          style={{
                            transform: e.scale ? "scale(1.5)" : "scale(1)",
                          }}
                          playsInline={true}
                          autoPlay={true}
                          preload="auto"
                          controls={false}
                          // onPlay={() => setCurrentVideoIndex(index)}
                        >
                          {" "}
                          <source src={e.video_link} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : null}
                  </div>
                  <p className="text-white uppercase sm:text-[4.2vw] font-bold  sm:leading-[5vw] text-[1.5vw] leading-[2vw] font_helvetica">
                    {visibleIndexes.includes(index) && (
                      <Typewriter
                        words={[e.text]}
                        cursorStyle=""
                        typeSpeed={70}
                        delaySpeed={1000}
                      />
                    )}
                  </p>
                  {/* <p className="text-white"></p> */}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Past_work_template;
