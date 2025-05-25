"use client";

import {
  CabinetGrotesk_bold,
  CabinetGrotesk_extrabold,
  CabinetGrotesk_medium,
  NeueHaasDisplay_light,
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "../utils/fonts";
import next_works from "@/../public/home/next_works.png";
import prev_works from "@/../public/home/prev_works.png";
import app_dev from "@/../public/new_service/services/app_dev.webp";
import web_design from "@/../public/new_service/services/web_design.webp";
import web_developement from "@/../public/new_service/services/web_developement.webp";
import custom_api from "@/../public/new_service/services/custom_api.webp";
import eccomerce from "@/../public/new_service/services/eccomerce.webp";
import polygon from "@/../public/home/services/polygon.png";
import two from "@/../public/home/services/2.png";
import three from "@/../public/home/services/3.png";
import four from "@/../public/home/services/4.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "framer-motion";

const New_service = ({ goggle }: any) => {
  const items = [
    {
      heading: "Web Design",
      body: "Through data-driven design and a deep understanding of consumer behavior, we build websites that not only look stunning but also deliver exceptional results. With over 9 years of on the ground experience, we have designs, developed and maintained websites that have processed over $54 million in revenue.",
      img: web_design,
      bg: "#FCB525",
      top_img: two,
    },
    {
      heading: "Landing Page Development",
      body: "Walking backwards from your marketing strategy and target audience, we design and development custom pages optimized for marketing funnels. Using powerful API like Cloudinary and Clarity, we build and iterate pages continually based off customer feedback to improve sales.",
      img: web_developement,
      top_img: four,
      bg: "#EF6C52",
    },
    {
      heading: "Custom App Development",
      body: " Imagine software that feels like an extension of your team. We build applications and features that seamlessly integrate into your workflow, boosting efficiency and productivity. Our focus is on creating intuitive, user-friendly solutions that empower your business to achieve its full potential.",
      img: eccomerce,
      top_img: three,
      bg: "#4FA0FF",
    },
    {
      heading: "Marketing Services",
      body: "Following up on branding and web designs, we follow your brand all the way across to your customers by providing graphical and video design services for your media buying campaigns. We deliver custom static ads, final cut videos and A/B split test packages for your media buying needs.",
      img: custom_api,
      top_img: four,
      bg: "#9562E5",
    },
  ];

  const [currentInView, setCurrentInView] = useState<any>(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let foundInView = false;

      items.forEach((_, index) => {
        const element = document.getElementById(`brand-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = (rect.top + rect.bottom) / 2;

          // Add an offset (e.g., 100 pixels) to consider only the element at the center
          const offset = 100;
          const isInView =
            elementCenter >= viewportCenter - offset &&
            elementCenter <= viewportCenter + offset;

          if (isInView && !foundInView) {
            foundInView = true;
            setCurrentInView(index);
          }
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  useEffect(() => {
    if (currentInView !== null) {
      //   console.log(`Element ${currentInView + 1} is in view`);
      // Do something when the element is in view
    }
  }, [currentInView]);

  const ref = useRef<any>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setanimate_modal(current_index);
      }, 500);
      // console.log(isInView);
    } else if (isInView == false) {
      setanimate_modal(1000);
    }
  }, [isInView]);
  const [current_index, setcurrent_index] = useState(0);
  const [animate_modal, setanimate_modal] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setanimate_modal(current_index);
    }, 500);
  }, [current_index]);

  const [windowWidth, setWindowWidth] = useState<any>(null);

  useEffect(() => {
    setWindowWidth(globalThis.innerWidth);
    const handleResize = () => setWindowWidth(globalThis.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef<any>(null);

  const handleTouchStart = (event: any) => {
    const touchStart = event.touches[0].pageX;

    const container = ref.current;
    if (container) {
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
      container.dataset.touchStartX = touchStart.toString();
    }
  };

  const threshold = 80; // Set the minimum scroll distance (threshold) here

  const handleTouchMove = (event: any) => {
    const touchCurrent = event.touches[0].pageX;
    const container = ref.current;
    if (container) {
      const touchDelta = Number(container.dataset.touchStartX!) - touchCurrent;
      const isSignificantScroll = Math.abs(touchDelta) > threshold;

      if (isSignificantScroll) {
        if (touchDelta > 0) {
          // Scrolling right (next)
          if (current_index >= items.length - 1) {
            return;
          }
          setcurrent_index(current_index + 1);
        } else {
          // Scrolling left (prev)
          if (current_index <= 0) {
            return;
          }
          setcurrent_index(current_index - 1);
        }
        container.dataset.touchStartX = touchCurrent.toString();
      }
    }
  };
  const handleTouchEnd = () => {
    const container = ref.current;
    if (container) {
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.dataset.touchStartX = "";
    }
  };

  return (
    <>
      {/* THIS IS FOR DESKTOP  */}
      {/* THIS IS FOR DESKTOP  */}
      {/* THIS IS FOR DESKTOP  */}
      {/* THIS IS FOR DESKTOP  */}
      <div
        className={`w-full  sm:hidden px-[10vw] relative   ${
          goggle ? "text-white sm:text-[black]" : ""
        }  `}
      >
        <div className="w-full  h-[100vh] sticky top-0 left-0 ">
          <div
            className={`w-full z-[5] absolute h-[25%] bg-gradient-to-b top-0 left-0  ${
              goggle ? " from-black" : " from-white"
            } `}
          ></div>
          <div
            className={`w-full z-[5] absolute h-[25%] bg-gradient-to-t  ${
              goggle ? " from-black" : " from-white"
            }  bottom-0 left-0`}
          ></div>
          <div
            className={`w-[45%]  h-full flex gap-[3vw] flex-col z-[100]   justify-center `}
          >
            <h2
              className={`${NeueHaasDisplay_roman.className} z-[10]  text-[4vw] `}
            >
              Services
            </h2>
            <div className="flex flex-col  z-[10] gap-[1vw] ">
              <h3
                className={`${NeueHaasDisplay_medium.className} capitalize z-[10] text-[2vw] text-[#FC2200]`}
              >
                {items.map((e: any, index: any) => {
                  return (
                    <>
                      {currentInView == index && (
                        <Typewriter
                          words={[e.heading]}
                          key={index}
                          cursorStyle=""
                          typeSpeed={10}
                          delaySpeed={1000}
                        />
                      )}
                    </>
                  );
                })}
              </h3>
              <p
                className={`${NeueHaasDisplay_light.className} z-[10] text-[1.2vw] leading-[1.6vw]`}
              >
                {items.map((e: any, index: any) => {
                  return (
                    <>
                      {currentInView == index && (
                        <Typewriter
                          words={[e.body]}
                          key={index}
                          cursorStyle=""
                          typeSpeed={0.7}
                          delaySpeed={1000}
                        />
                      )}
                    </>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-[-60vh] pb-[30vh]  flex justify-end ">
          <div className=" gap-[4vw] w-[43%] flex flex-col">
            {items.map((e: any, index: any) => {
              return (
                <div
                  id={`brand-${index}`}
                  className="border2 bg-[#FC2200] items-center p-[0.5vw] gap-[1vw] flex flex-col rounded-[2vw]"
                  key={index}
                >
                  <div className="w-full overflow-hidden bg-white rounded-[2vw]">
                    <Image
                      src={e.img}
                      alt={e.heading}
                      className="w-full h-fit"
                    />
                  </div>
                  <p
                    className={`${NeueHaasDisplay_roman.className} text-white leading-[2.5vw] text-center px-[10%] p-[1vw] text-[2.3vw]`}
                  >
                    {" "}
                    {e.heading}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* THIS IS FOR MOBILE */}
      {/* THIS IS FOR MOBILE */}
      {/* THIS IS FOR MOBILE */}
      {/* THIS IS FOR MOBILE */}
      {/* this is for mobile */}
      <div className="sm:h-[170vw] sm:gap-[10vw]  hidden  h-[40vw] px-[3vw] sm:px-0 sm:my-[15vw]  sm:w-full  sm:flex flex-col justify-between  items-center">
        <h2
          className={`${NeueHaasDisplay_roman.className} sm:text-center text-[5vw] hidden sm:block   sm:leading-[10vw] sm:text-[9vw]`}
        >
          Services we offer{" "}
        </h2>

        <div className=" w-full sm:overflow-hidden h-[26vw] sm:h-[110vw] relative   ">
          <div
            onTouchStart={handleTouchStart}
            ref={ref}
            className={`sm:absolute  sm:w-auto   sm:top-0 justify-between w-full sm:justify-start  sm:left-0  sm:px-[3vw] h-full flex sm:gap-[3vw] `}
            style={{
              transform:
                windowWidth && windowWidth <= 650
                  ? `translateX(-${current_index * 86.5}vw)`
                  : "none",
              transition: "1s ease",
            }}
          >
            {items.map((e: any, index: any) => {
              return (
                <div
                  // ref={itemRefs[index]}
                  data-index={index}
                  key={index}
                  className="relative h-full sm:rounded-[4vw]   sm:flex sm:items-end service_item"
                >
                  <Image
                    src={e.img}
                    alt={e.title}
                    style={{ transition: "1s ease" }}
                    className="w-full h-fit absolute sm:rounded-[4vw]    z-[0] left-0 service_image   top-0    "
                  />
                  <div
                    className={`sm:rounded-[4vw]  ${
                      animate_modal == index ? "sm:h-[75%]" : "sm:h-full"
                    }  cursor-pointer rounded-[1.5vw] px-[1.5vw] py-[2vw] sm:py-[6vw] sm:px-[4vw] flex flex-col justify-end gap-[4vw] sm:gap-[7vw] relative w-[21.6vw] sm:w-[85vw] h-full main_item `}
                    style={{ backgroundColor: e.bg, transition: "1s ease" }}
                  >
                    <Image
                      src={e.top_img}
                      alt={e.title}
                      className="sm:w-fit absolute h-[12vw] w-fit right-[-1vw]  sm:right-[-2vw] top-[50%] translate-y-[-50%] sm:h-[30vw]  "
                    />

                    <h2
                      className={`${NeueHaasDisplay_roman.className} text-[2vw] leading-[2.3vw] text-white sm:text-[8.37vw] sm:leading-[10.2vw]`}
                    >
                      {e.heading}
                    </h2>

                    <p
                      className={`${NeueHaasDisplay_light.className} text-[1vw]  text-white sm:text-[3.72vw] sm:pr-[8vw]`}
                    >
                      {e.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={` w-full hidden    sm:flex justify-center sm:gap-[6vw] gap-[2vw] items-center`}
        >
          <Image
            src={prev_works}
            onClick={() => {
              if (current_index <= 0) {
                return;
              }
              setcurrent_index(current_index - 1);
            }}
            alt="prev "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
          <Image
            src={next_works}
            onClick={() => {
              if (current_index >= items.length - 1) {
                return;
              }
              setcurrent_index(current_index + 1);
              console.log(current_index);
            }}
            alt="next "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
        </div>
      </div>
    </>
  );
};

export default New_service;
