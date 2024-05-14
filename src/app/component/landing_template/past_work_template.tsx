"use client";
import Image from "next/image";
import img from "../../../../public/landingpage_template/port2.webp";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// import Typewriter from "typewriter-effect";
const Past_work_template = () => {
  const info_array = ["", "", "", "", "", ""];

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
      { threshold: 0.6 },
    );

    itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
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
          {info_array.map((e: any, index: any) => {
            return (
              <Link
                href={"/"}
                data-index={index}
                key={index}
                ref={(ref) => (itemsRefs.current[index] = ref)}
                className="w-[45%] gap-[0.7vw] translate-y-[10%] opacity-0 transition duration-[1s] sm:gap-[2vw] sm:w-full  flex flex-col "
              >
                <div className="w-full text-white h-[25vw] bg-white sm:h-[50vw] overflow-hidden sm:rounded-[4.5vw]  rounded-[2.1vw]">
                  <Image src={img} alt="img" className="w-full h-fit" />
                </div>
                <p className="text-white sm:text-[2.5vw] sm:leading-[3vw] text-[0.9vw] font_helvetica">
                  {visibleIndexes.includes(index) && (
                    <Typewriter
                      words={[
                        "VII THE SEVENTH ESTATE - REVOLUTIONIZING WINE WITH CARMELO ANTHONY",
                      ]}
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
