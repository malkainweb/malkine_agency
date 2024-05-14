"use client";
import Image from "next/image";
import img2 from "../../../../public/landingpage_template/port2.webp";
import img1 from "../../../../public/landingpage_template/port1.webp";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// import Typewriter from "typewriter-effect";
const Past_work_template = () => {
  //   const info_array = ["", "", "", "", "", ""];

  const data_array = [
    {
      img: img2,
      text: "HEALTH-ADE - WE HELPED HEALTH-ADE FOLLOW THEIR GUT",
    },
    {
      img: img1,
      text: "SMARTSWEETS - EXPANDING THE CANDY UNIVERSE WITH SMARTSWEETS.",
    },
    {
      img: img1,
      text: "NYLON - REDESIGNING AN ICONIC MAGAZINE FOR THE INTERNET AGE.",
    },
    {
      img: img2,
      text: "HEALTH-ADE - WE HELPED HEALTH-ADE FOLLOW THEIR GUT",
    },
    {
      img: img2,
      text: "MAEV - THE WELLNESS BRAND FOR CITY DOGS AND THEIR HUMANS.",
    },
    {
      img: img1,
      text: "PETFOLK - RESHAPING PET CARE FOR TODAY",
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
      { threshold: 0.63 },
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
        <h3 className="font_helvetica leading-[4.2vw] text-white text-[3.8vw] font-bold sm:text-[6vw] sm:leading-[7vw]  text-center">
          We Don{"'"}t Just Talk The Talk <br /> We Walk The Walk{" "}
        </h3>
        <div className="w-full flex px-[1vw] sm:gap-[5vw] sm:px-[3vw] justify-center gap-[3vw] flex-wrap ">
          {data_array.map((e: any, index: any) => {
            return (
              <Link
                href={"/"}
                data-index={index}
                key={index}
                ref={(ref) => (itemsRefs.current[index] = ref)}
                className="w-[45%] mb-[-1vw] gap-[0.7vw] translate-y-[10%] opacity-0 transition duration-[1s] sm:gap-[2vw] sm:w-full  flex flex-col "
              >
                <div className="w-full text-white h-[24vw] bg-[#ffffff71] sm:h-[50vw] overflow-hidden sm:rounded-[4.7vw]  rounded-[2.5vw]">
                  <Image src={e.img} alt="img" className="w-full h-fit" />
                </div>
                <p className="text-white sm:text-[3vw] sm:leading-[3.5vw] text-[0.9vw] font_helvetica">
                  {visibleIndexes.includes(index) && (
                    <Typewriter
                      words={[e.text]}
                      cursorStyle=""
                      typeSpeed={30}
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
    </>
  );
};

export default Past_work_template;
