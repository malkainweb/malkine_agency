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

import localFont from "next/font/local";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { CabinetGrotesk_bold, NeueHaasDisplay_roman } from "../utils/fonts";
import Go_high_level_form from "./contact_us_pop_up";

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

  const [prev_active_item, setprev_active_item] = useState<any>(null);

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
      setleft(15);
      setactive_item(0);
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
  const containerRef = useRef<any>(null);

  const handleTouchStart = (event: any) => {
    const touchStart = event.touches[0].pageX;
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
      container.dataset.touchStartX = touchStart.toString();
    }
  };

  const threshold = 80; // Set the minimum scroll distance (threshold) here

  const handleTouchMove = (event: any) => {
    const touchCurrent = event.touches[0].pageX;
    const container = containerRef.current;
    if (container) {
      const touchDelta = Number(container.dataset.touchStartX!) - touchCurrent;
      const isSignificantScroll = Math.abs(touchDelta) > threshold;

      if (isSignificantScroll) {
        if (touchDelta > 0) {
          // Scrolling right (next)
          if (width > 650) {
            setactive_item(active_item + 1);
            setleft(left - 21);
          } else if (width < 650) {
            setactive_item(active_item + 1);
            setleft(left - 70);
          }
        } else {
          // Scrolling left (prev)
          if (width > 650) {
            setactive_item(active_item - 1);
            setleft(left + 21);
          } else if (width < 650) {
            setactive_item(active_item - 1);
            setleft(left + 70);
          }
        }
        container.dataset.touchStartX = touchCurrent.toString();
      }
    }
  };
  const handleTouchEnd = () => {
    const container = containerRef.current;
    if (container) {
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.dataset.touchStartX = "";
    }
  };

  const [go_high_level_start_anime, setgo_high_level_start_anime] =
    useState(false);
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
          ref={containerRef}
          onTouchStart={handleTouchStart}
          className={`w-full relative    h-[46vw]     sm:h-[138vw] overflow-hidden sm:rounded-[8vw]`}
        >
          <div
            className={`w-auto absolute  sm:gap-[0vw] ${
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
                      className={`sm:w-[70vw] z-[20] sm:h-fit sm:mt-[10vw]  cursor-pointer w-[25vw] rounded-[1.2vw]    relative ${
                        active_item == -1 * (last_array.length - index)
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[4vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        // transform: active_item == index ? "scale(1.1)" : "scale(0.8)",
                        transition: "1s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[8vw] flex flex-col sm:gap-[1vw]  overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[1.5vw]">
                        <div className="w-full     rounded-[1.2vw] relative  sm:rounded-[7vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[80vw] border border-black/20  ">
                          <Image
                            src={e.mob_img}
                            alt={e.text}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="sm:text-[6vw] capitalize mt-[1.8vw] text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>

                        {/* now the button */}
                        <div className="flex justify-center sm:px-[3vw]">
                          <button
                            className={` sm:w-[39vw] sm:block hidden sm:h-[10vw] w-[13.5vw] h-[4.5vw] rounded-[0.73vw] sm:rounded-[8.75vw] sm:text-[3.5vw] ${NeueHaasDisplay_roman.className} bg-[#D01717] text-white`}
                          >
                            Preview the website
                          </button>
                        </div>
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
                      className={`sm:w-[70vw] sm:h-fit sm:mt-[10vw] z-[20] cursor-pointer w-[25vw] rounded-[1.2vw]   relative ${
                        active_item == -1 * (last_array.length - index)
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[4vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        // transform: active_item == index ? "scale(1.1)" : "scale(0.8)",
                        transition: "1s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]    sm:pb-[8vw] flex flex-col sm:gap-[1vw]  overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[1.5vw] ">
                        <div className="w-full     rounded-[1.2vw] relative  sm:rounded-[7vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[80vw] border border-black/20 ">
                          {e.demo && (
                            <div
                              className={`${NeueHaasDisplay_roman.className} bg-[black] text-white px-[1rem] text-sm py-[0.4rem] rounded-full absolute top-[1rem] right-[1rem] `}
                            >
                              Demo
                            </div>
                          )}
                          <Image
                            src={e.mob_img}
                            alt={e.text}
                            className="w-full  h-full object-cover"
                          />
                        </div>

                        <p className="sm:text-[6vw] mt-[1.8vw] capitalize text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>

                        {/* now the button */}
                        <div className="flex justify-center sm:px-[3vw]">
                          <button
                            className={` sm:w-[39vw] sm:block hidden sm:h-[10vw] w-[13.5vw] h-[4.5vw] rounded-[0.73vw] sm:rounded-[8.75vw] sm:text-[3.5vw] ${NeueHaasDisplay_roman.className} bg-[#D01717] text-white`}
                          >
                            Preview the website
                          </button>
                        </div>
                      </div>
                    </div>
                  )}{" "}
                </>
              );
            })}
          </div>

          <div
            className={`w-auto absolute   sm:gap-[0vw] ${
              active_item < 0 ? "ml-[10vw] sm:ml-0 " : ""
            }   gap-[0vw] flex sm:top-[0vw] top-[9vw]  h-auto`}
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
                      className={`sm:w-[70vw] z-[20] sm:h-fit sm:mt-[10vw]   cursor-pointer  w-[25vw] rounded-[1.2vw]   relative ${
                        active_item == index
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[3vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]   overflow-hidden`}
                      style={{
                        transition: "0.7s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[8vw] flex flex-col sm:gap-[1vw]  overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[1.5vw] ">
                        <div className="w-full    rounded-[1.2vw] relative  sm:rounded-[7vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[80vw] border border-black/20  ">
                          <Image
                            src={e.mob_img}
                            alt={e.text}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="sm:text-[6vw] mt-[1.8vw] capitalize text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>
                        {/* now the button */}
                        <div className="flex justify-center sm:px-[3vw]">
                          <button
                            className={` sm:w-[39vw] sm:block hidden sm:h-[10vw] w-[13.5vw] h-[4.5vw] rounded-[0.73vw] sm:rounded-[8.75vw] sm:text-[3.5vw] ${NeueHaasDisplay_roman.className} bg-[#D01717] text-white`}
                          >
                            Preview the website
                          </button>
                        </div>
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
                      className={`sm:w-[70vw] z-[20] sm:h-fit sm:mt-[10vw]  cursor-pointer w-[25vw] rounded-[1.2vw]   relative ${
                        active_item == index
                          ? "sm:scale-[1.1] scale-[1.15]  sm:mx-0 mx-[3vw]  "
                          : "sm:scale-[0.8] scale-[0.75]  sm:mx-0 mx-[-2vw] "
                      }  flex justify-center sm:rounded-[8vw]  overflow-hidden`}
                      style={{
                        transition: "0.7s ease",
                      }}
                    >
                      <div className="sm:w-full w-[25vw]  z-[99] h-[32vw]   sm:pb-[8vw] flex flex-col sm:gap-[1vw]  overflow-hidden sm:h-fit   sm:rounded-[6vw]  border-[1.2vw] rounded-[1.2vw] border-[#EDEDED] bg-[#EDEDED] sm:border-[1.5vw]">
                        <div className="w-full    rounded-[1.2vw] relative  sm:rounded-[7vw] overflow-hidden h-[21vw] flex justify-center items-center  sm:h-[80vw] border border-black/20  ">
                          {e.demo && (
                            <div
                              className={`${NeueHaasDisplay_roman.className} bg-[black] text-white px-[1rem] text-sm py-[0.4rem] rounded-full absolute top-[1rem] right-[1rem] `}
                            >
                              Demo
                            </div>
                          )}
                          <Image
                            src={e.mob_img}
                            alt={e.text}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <p className="sm:text-[6vw] capitalize mt-[1.8vw] text-[2vw] font-bold text-center sm:mt-[3vw]">
                          {e.text}
                        </p>

                        {/* now the button */}
                        <div className="flex justify-center sm:px-[3vw]">
                          <button
                            className={` sm:w-[39vw] sm:block hidden sm:h-[10vw] w-[13.5vw] h-[4.5vw] rounded-[0.73vw] sm:rounded-[8.75vw] sm:text-[3.5vw] ${NeueHaasDisplay_roman.className} bg-[#D01717] text-white`}
                          >
                            Preview website
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        {/* <div className="flex justify-center sm:px-[3vw]">
          <button
            onClick={() => {
              setgo_high_level_start_anime(true);
              window.fbq("track", "ContactUsClick", {
                value: "Customer clicked on Contact Us button", // Optional, to track a specific value
              });
              window.gtag("event", "ContactUsClick", {
                event_category: "Lead Generation",
                event_label: "Customer clicked on Contact Us button",
              });
            }}
            className={` sm:w-[60vw] sm:block hidden sm:h-[12vw] w-[13.5vw] h-[4.5vw] rounded-[0.73vw] sm:rounded-[8.75vw] sm:text-[4.5vw] ${NeueHaasDisplay_roman.className} bg-[#D01717] text-white`}
          >
            Get started
          </button>
        </div> */}
        <div
          className={` w-full  ${
            dont_hide ? " sm:py-[5vw] pb-[2vw] " : "sm:py-[5vw]"
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
      {go_high_level_start_anime && (
        <Go_high_level_form
          // nav_items={nav_items}
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
    </>
  );
};

export default Mobile_Live_past_work;
