"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { NeueHaasDisplay_bold } from "../utils/fonts";
import Link from "next/link";

const Each_past_work = ({
  body,
  setpath,
  setstart_anime,
  setopen_iframe,
}: any) => {
  const itemsRefs = useRef<any>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<any>([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry: any, index: any) => {
  //         if (entry.isIntersecting) {
  //           console.log(
  //             entry.target.getAttribute("data-index"),
  //             "this is from each past works",
  //           );
  //           entry.target.classList.add("show_item");
  //           setVisibleIndexes((prevIndexes: any) => [
  //             ...prevIndexes,
  //             //   parseInt(entry.target.dataset.index),
  //             parseInt(entry.target.getAttribute("data-index")),
  //           ]);
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.51 },
  //   );

  //   itemsRefs.current.forEach((ref: any) => {
  //     observer.observe(ref);
  //   });

  //   return () => {
  //     if (itemsRefs) {
  //       itemsRefs.current.forEach((ref: any) => {
  //         if (ref) {
  //           observer.unobserve(ref);
  //         }
  //       });
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");

            entry.target.classList.add("show_item");
            setVisibleIndexes((prevIndexes: any) => [
              ...prevIndexes,
              parseInt(index as string),
            ]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -30% 0px",
      },
    );

    itemsRefs.current.forEach((ref: any) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <>
      {body.map((e: any, index: any) => {
        return (
          <>
            {" "}
            {e.new_tab ? (
              <Link
                href={e.link}
                target="_blank"
                data-index={index}
                key={index}
                ref={(ref) => (itemsRefs.current[index] = ref)}
                className="w-[48%] group  cursor-pointer mb-[-1vw] gap-[0.7vw] translate-y-[10%] opacity-0 overflow-hidden transition duration-[1s] sm:gap-[2vw] sm:w-full  flex flex-col "
              >
                <div className="w-full text-white h-[24vw] bg-[#ffffff71] sm:h-[50vw] overflow-hidden relative sm:rounded-[4.7vw]  rounded-[2.5vw] border border-[#0000005d] ">
                  {" "}
                  <Image
                    src={e.img}
                    alt="img"
                    className="w-full  h-full object-cover group-hover:scale-[1] scale-[1.1] duration-[0.6s] z-[10] transition"
                  />
                  {e.video ? (
                    <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                      <video
                        loop={true}
                        muted={true}
                        style={{
                          transform: e.scale ? "scale(1.5)" : "scale(1)",
                        }}
                        playsInline={true}
                        autoPlay={true}
                        preload="auto"
                        controls={false}
                      >
                        {" "}
                        <source src={e.video_link} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : null}
                </div>
                <p
                  className={` uppercase sm:text-[4.2vw] font-bold  sm:leading-[5vw] text-[1.5vw] leading-[2vw] ${NeueHaasDisplay_bold.className}`}
                >
                  {" "}
                  {visibleIndexes.includes(index) && (
                    <Typewriter
                      words={[e.text]}
                      cursorStyle=""
                      typeSpeed={70}
                      delaySpeed={1000}
                    />
                  )}
                </p>
              </Link>
            ) : (
              <div
                onClick={() => {
                  setpath(e.link);
                  setopen_iframe(e.open_false);
                  setstart_anime(true);
                }}
                data-index={index}
                key={index}
                ref={(ref) => (itemsRefs.current[index] = ref)}
                className="w-[48%]  group cursor-pointer mb-[-1vw] gap-[0.7vw] translate-y-[10%] opacity-0 overflow-hidden transition duration-[1s] sm:gap-[2vw] sm:w-full  flex flex-col "
              >
                <div className="w-full text-white h-[24vw] bg-[#ffffff71] sm:h-[50vw] overflow-hidden relative sm:rounded-[4.7vw]  rounded-[2.5vw] border border-[#0000005d] ">
                  {" "}
                  <Image
                    src={e.img}
                    alt="img"
                    className="w-full h-full object-cover group-hover:scale-[1] scale-[1.1] duration-[0.6s] z-[10] transition"
                  />
                  {e.video ? (
                    <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                      <video
                        loop={true}
                        muted={true}
                        style={{
                          transform: e.scale ? "scale(1.5)" : "scale(1)",
                        }}
                        playsInline={true}
                        autoPlay={true}
                        preload="auto"
                        controls={false}
                      >
                        {" "}
                        <source src={e.video_link} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : null}
                </div>
                <p
                  className={` uppercase sm:text-[4.2vw] font-bold  sm:leading-[5vw] text-[1.5vw] leading-[2vw] ${NeueHaasDisplay_bold.className}`}
                >
                  {visibleIndexes.includes(index) && (
                    <Typewriter
                      words={[e.text]}
                      cursorStyle=""
                      typeSpeed={70}
                      delaySpeed={1000}
                    />
                  )}
                </p>
              </div>
            )}{" "}
          </>
        );
      })}
    </>
  );
};
export default Each_past_work;
