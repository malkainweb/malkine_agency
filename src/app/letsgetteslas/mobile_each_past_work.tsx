"use client";

import Image from "next/image";
import next_works from "../../../public/home/next_works.png";
import prev_works from "../../../public/home/prev_works.png";
import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import img1 from "../../../public/home/hero.webp";

import cabinet from "../../../public/home/live_past_work/Cabinet.webp";
import Gus_Cooney from "../../../public/home/live_past_work/Gus_Cooney.webp";
import yuri from "../../../public/home/live_past_work/Yuri.webp";
import Garner from "../../../public/home/live_past_work/Garner.webp";
import Decibel from "../../../public/home/live_past_work/Decibel.webp";
import Re_origin from "../../../public/home/live_past_work/Re_origin.webp";

import localFont from "next/font/local";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { CabinetGrotesk_bold } from "../utils/fonts";

const Mobile_Live_past_work = ({
  dont_hide,
  body,
  setpath,
  setstart_anime,
  setopen_iframe,
}: any) => {
  const [active_item, setactive_item] = useState<any>(1);

  const [items, setitems] = useState(body);

  const width = globalThis.innerWidth;
  const [video_modal, setvideo_modal] = useState(false);
  const [active_video, setactive_video] = useState<any>(null);
  const [prev_active_item, setprev_active_item] = useState<any>(null);
  const [video_array, setvideo_array] = useState([]);
  // const [transition, settransition] = useState("1.2s");
  // const [desktop_active, setdesktop_active] = useState(2);
  const [left, setleft] = useState(-55);
  const [screenSize, setScreenSize] = useState(globalThis.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(globalThis.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const screenwidth = globalThis.innerWidth;
  useEffect(() => {
    if (screenwidth > 650) {
      setleft(-8);
      setactive_item(2);
    } else if (screenwidth < 650) {
      setleft(-55);
      setactive_item(1);
    }
  }, [screenSize, screenwidth]);

  const [linksArray, setLinksArray] = useState([]);
  const [last_linksArray, setlast_LinksArray] = useState([]);
  const [last_array, setlast_array] = useState<any>([]);

  const lastArrayRefs = useRef<any>([]);
  const [copy, setcopy] = useState<any>([]);
  const [reverse, setreverse] = useState<any>([]);

  useEffect(() => {
    // Extract links and scales from the items array and create an array of objects
    const extractedLinks: any = items.map((item: any) => ({
      scale: item.scale,
      image: item.Image,
    }));
    setLinksArray(extractedLinks);
    // Extract links and scales from the items array and create an array of objects
    const extractedlast_array_links: any = last_array.map((item: any) => ({
      scale: item.scale,
      image: item.Image,
    }));
    setlast_LinksArray(extractedlast_array_links);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, last_array]); // Empty dependency array ensures the effect runs only once after initial render
  useEffect(() => {
    setcopy(items);
    setlast_array(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  useEffect(() => {
    // console.log(videoRefs);
    const secondElementIndex = -1 * (last_array.length - 2);
    // console.log(secondElementIndex, active_item);
    if (active_item + 3 > items.length) {
      setitems([...items, ...copy]);
    } else if (active_item == secondElementIndex) {
      setlast_array([...copy, ...last_array]);
    }
  }, [active_item]);

  useEffect(() => {
    // setprev_active_item(8);
    if (active_item <= 0) {
      setprev_active_item(-1 * active_item);
      console.log(active_item);
    }
  }, [active_item]);

  return (
    <>
      <div
        className={`w-full relative    border-white  border-opacity-0   ${
          !dont_hide
            ? "sm:mb-[-10vw] pt-[1vw] sm:pt-0  sm:from-transparent  from-[#F5F8FF] bg-gradient-to-b  "
            : " sm:bg-none bg-white sm:mt-[8vw] "
        }  `}
      >
        {/* this is the container that contains the box */}
        <div
          className={`w-full relative    h-[46vw]   sm:h-[145vw] overflow-hidden sm:rounded-[8vw]`}
        >
          {last_array.length > 0 &&
            last_array.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className="w-full hidden sm:rounded-[8vw]   sm:block overflow-hidden sm:h-[100vw] absolute  top-0  "
                  style={{
                    opacity:
                      active_item == -1 * (last_array.length - index) ? 1 : 0,
                    transition: "2s ease",
                  }}
                >
                  {e.video ? (
                    <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[10] h-full">
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
                  ) : null}{" "}
                  <Image
                    src={e.img}
                    alt={e.text}
                    className="w-full absolute top-0 left-0 h-fit scale-[1.5]"
                  />
                </div>
              );
            })}

          {items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className="w-full hidden  sm:rounded-[8vw]   sm:block overflow-hidden sm:h-[100vw] absolute  top-0  "
                style={{
                  opacity: active_item == index ? 1 : 0,
                  transition: "2s ease",
                }}
              >
                {e.video ? (
                  <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[10] h-full">
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
                ) : null}{" "}
                <Image
                  src={e.img}
                  alt={e.text}
                  className="w-full absolute top-0 left-0 h-fit scale-[1.5]"
                />
              </div>
            );
          })}

          <div
            className={`w-auto absolute sm:gap-[0vw] ${
              active_item < 0 ? "mr-[0vw] " : "mr-[10vw] sm:mr-0"
            }   gap-[0vw] flex sm:top-0 top-[9vw]  h-auto`}
            style={{
              transition: `0.6s ease`,
              right:
                typeof globalThis !== "undefined" && globalThis.innerWidth > 650
                  ? `${88.5 - left}vw`
                  : `${100 - left}vw`,
            }}
          >
            {last_array.map((e: any, index: any) => {
              return (
                <>
                  {e.new_tab ? (
                    <Link
                      href={e.link}
                      target="_blank"
                      key={index}
                      className={`sm:w-[70vw] z-[20] cursor-pointer w-[25vw] rounded-[1.2vw] sm:py-[10vw]  relative ${
                        active_item == -1 * (last_array.length - index)
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[4vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        // transform: active_item == index ? "scale(1.1)" : "scale(0.8)",
                        transition: "1s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[4vw] flex flex-col sm:gap-[1vw] sm:mt-[20vw] overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[4vw]">
                        <div className="w-full     rounded-[1.2vw] relative  sm:rounded-[6vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[70vw] ">
                          {e.video ? (
                            <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                              <video
                                loop={true}
                                muted={true}
                                style={{
                                  transform: e.scale
                                    ? "scale(1.5)"
                                    : "scale(1)",
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
                          ) : null}{" "}
                          <Image
                            src={e.img}
                            alt={e.text}
                            className="w-full h-fit scale-[2.5]"
                          />
                        </div>

                        <p className="sm:text-[6vw] mt-[1.8vw] text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div
                      onClick={() => {
                        setpath(e.link);
                        setopen_iframe(e.open_false);
                        setstart_anime(true);
                      }}
                      key={index}
                      className={`sm:w-[70vw]  z-[20] cursor-pointer w-[25vw] rounded-[1.2vw] sm:py-[10vw]  relative ${
                        active_item == -1 * (last_array.length - index)
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[4vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        // transform: active_item == index ? "scale(1.1)" : "scale(0.8)",
                        transition: "1s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[4vw] flex flex-col sm:gap-[1vw] sm:mt-[20vw] overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[4vw]">
                        <div className="w-full     rounded-[1.2vw] relative  sm:rounded-[6vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[70vw] ">
                          {e.video ? (
                            <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                              <video
                                loop={true}
                                muted={true}
                                style={{
                                  transform: e.scale
                                    ? "scale(1.5)"
                                    : "scale(1)",
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
                          ) : null}{" "}
                          <Image
                            src={e.img}
                            alt={e.text}
                            className="w-full h-fit scale-[2.5]"
                          />
                        </div>

                        <p className="sm:text-[6vw] mt-[1.8vw] text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>
                      </div>
                    </div>
                  )}{" "}
                </>
              );
            })}
          </div>

          <div
            className={`w-auto absolute sm:gap-[0vw] ${
              active_item < 0 ? "ml-[10vw] sm:ml-0 " : ""
            }   gap-[0vw] flex sm:top-0 top-[9vw]  h-auto`}
            style={{
              transition: `0.6s ease`,
              left: `${left}vw`,
            }}
          >
            {items.map((e: any, index: any) => {
              return (
                <>
                  {e.new_tab ? (
                    <Link
                      href={e.link}
                      target="_blank"
                      key={index}
                      className={`sm:w-[70vw] z-[20] cursor-pointer w-[25vw] rounded-[1.2vw] sm:py-[10vw]  relative ${
                        active_item == index
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[3vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        transition: "0.7s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[4vw] flex flex-col sm:gap-[1vw] sm:mt-[20vw] overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[4vw]">
                        <div className="w-full    rounded-[1.2vw] relative  sm:rounded-[6vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[70vw] ">
                          {e.video ? (
                            <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                              <video
                                loop={true}
                                muted={true}
                                style={{
                                  transform: e.scale
                                    ? "scale(1.5)"
                                    : "scale(1)",
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
                          ) : null}{" "}
                          <Image
                            src={e.img}
                            alt={e.text}
                            className="w-full h-fit scale-[2.5]"
                          />
                        </div>

                        <p className="sm:text-[6vw] mt-[1.8vw] text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <div
                      onClick={() => {
                        setpath(e.link);
                        setopen_iframe(e.open_false);
                        setstart_anime(true);
                      }}
                      key={index}
                      className={`sm:w-[70vw] z-[20] cursor-pointer w-[25vw] rounded-[1.2vw] sm:py-[10vw]  relative ${
                        active_item == index
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[3vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        transition: "0.7s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[4vw] flex flex-col sm:gap-[1vw] sm:mt-[20vw] overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[4vw]">
                        <div className="w-full    rounded-[1.2vw] relative  sm:rounded-[6vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[70vw] ">
                          {e.video ? (
                            <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[20] h-full">
                              <video
                                loop={true}
                                muted={true}
                                style={{
                                  transform: e.scale
                                    ? "scale(1.5)"
                                    : "scale(1)",
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
                          ) : null}{" "}
                          <Image
                            src={e.img}
                            alt={e.text}
                            className="w-full h-fit scale-[2.5]"
                          />
                        </div>

                        <p className="sm:text-[6vw] mt-[1.8vw] text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div
          className={` w-full  ${
            dont_hide ? " sm:pb-[12vw] pb-[2vw] " : "sm:pb-[12vw]"
          }  flex justify-center sm:gap-[6vw] gap-[2vw] items-center`}
        >
          <Image
            src={prev_works}
            alt="prev "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
            onClick={() => {
              if (width > 650) {
                setactive_item(active_item - 1);
                setleft(left + 21);
              } else if (width < 650) {
                setactive_item(active_item - 1);
                setleft(left + 70);
              }
            }}
          />
          <Image
            src={next_works}
            alt="next "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
            onClick={() => {
              if (width > 650) {
                setactive_item(active_item + 1);
                setleft(left - 21);
              } else if (width < 650) {
                setactive_item(active_item + 1);
                setleft(left - 70);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Mobile_Live_past_work;
