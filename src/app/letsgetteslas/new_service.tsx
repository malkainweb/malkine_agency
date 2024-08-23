"use client";

import {
  NeueHaasDisplay_light,
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "../utils/fonts";
import app_dev from "@/../public/new_service/services/app_dev.webp";
import web_design from "@/../public/new_service/services/web_design.webp";
import web_developement from "@/../public/new_service/services/web_developement.webp";
import custom_api from "@/../public/new_service/services/custom_api.webp";
import eccomerce from "@/../public/new_service/services/eccomerce.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const New_service = () => {
  const items = [
    {
      heading: "Web/Mobile App Development",
      body: "We create more than just mobile apps; we develop powerful software solutions optimized for on-the-go experiences. Our team combines software engineering prowess with a deep understanding of mobile platforms to deliver exceptional user experiences. From concept to deployment, we build native and cross-platform apps that drive user engagement, loyalty,and business results.",

      img: app_dev,
    },

    {
      heading: "Web Design",
      body: "Enhance your portfolio online with our specialized web design services for architecture firms. From intuitive navigation to visually striking elements, our comprehensive approach aims to elevate your brand's visibility and credibility in the competitive online landscape.",
      img: web_design,
    },
    {
      heading: "Software Development",
      body: "Imagine software that feels like an extension of your team. We build applications that seamlessly integrate into your workflow, boosting efficiency and productivity. Our focus is on creating intuitive, user-friendly solutions that empower your business to achieve its full potential.",
      img: web_developement,
    },
    {
      heading: "E-commerce Web Design & Software",
      body: "Our focus is on creating online shopping experiences that captivate customers and drive conversions is unwavering. Through data-driven design and a deep understanding of consumer behavior, we build websites that not only look stunning but also deliver exceptional results. With over 9 years of on the ground experience, we have designs, developed and maintained websites that have processed over $54 million in revenue.",
      img: eccomerce,
    },
    {
      heading: "Custom API Development",
      body: "We don't merely code APIs; we construct the digital connective tissue of your business. Our team is dedicated to crafting robust, scalable, and secure APIs that seamlessly integrate your systems and unlock new possibilities. We build APIs that are not just functional, but intelligent, driving efficiency and innovation.",
      img: custom_api,
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
  return (
    <>
      {/* THIS IS FOR DESKTOP  */}
      {/* THIS IS FOR DESKTOP  */}
      {/* THIS IS FOR DESKTOP  */}
      {/* THIS IS FOR DESKTOP  */}
      <div className="w-full  sm:hidden px-[10vw] relative ">
        <div className="w-full  h-[100vh] sticky top-0 left-0 ">
          <div className="w-full z-[5] absolute h-[25%] bg-gradient-to-b from-white top-0 left-0"></div>
          <div className="w-full z-[5] absolute h-[25%] bg-gradient-to-t from-white bottom-0 left-0"></div>
          <div className="w-[45%]  h-full flex gap-[3vw] flex-col z-[100]   justify-center">
            <h2
              className={`${NeueHaasDisplay_roman.className} z-[10]  text-[4vw] `}
            >
              Services
            </h2>
            <div className="flex flex-col capitalize z-[10] gap-[1vw] ">
              <h3
                className={`${NeueHaasDisplay_medium.className} z-[10] text-[2vw] text-[#FC2200]`}
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
                className={`${NeueHaasDisplay_light.className} z-[10] text-[1.4vw]`}
              >
                {items.map((e: any, index: any) => {
                  return (
                    <>
                      {currentInView == index && (
                        <Typewriter
                          words={[e.body]}
                          key={index}
                          cursorStyle=""
                          typeSpeed={1}
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
      <div className="w-full   overflow-hidden  sm:mb-[15vw]  flex-col gap-[5vw] justify-center md:hidden flex">
        <h3
          className={`${NeueHaasDisplay_roman.className} sm:text-[7vw] text-center sm:leading-[8vw]`}
        >
          Services we offer
        </h3>
        <div className=" w-full   flex items-start  overflow-x-auto  snap-x snap-mandatory md:snap-none  scrollbar-hide mobile-scroll-container   gap-[0.8rem]   px-[5%] pb-[5vw] ">
          {items.map((e: any, index: any) => {
            return (
              <div
                data-index={index} // Set the data-index attribute here
                key={index}
                className={` overflow-hidden gap-[6vw] md:flex-col   flex-none md:flex-auto w-[85vw]  flex flex-col rounded-[5vw] p-[1.5vw] snap-center group
              `}
              >
                <div
                  //   id={`brand-${index}`}
                  className=" bg-[#C9C9C9] items-center p-[1.7vw] gap-[1vw] flex flex-col rounded-[5vw]"
                  //   key={index}
                >
                  <div className="w-full overflow-hidden bg-white rounded-[5vw]">
                    <Image
                      src={e.img}
                      alt={e.heading}
                      className="w-full h-fit"
                    />
                  </div>
                  <p
                    className={`${NeueHaasDisplay_roman.className} text-white leading-[6vw] text-center px-[10%] p-[4vw] text-[5vw]`}
                  >
                    {" "}
                    {e.heading}
                  </p>
                </div>
                <p
                  className={`${NeueHaasDisplay_roman.className} px-[2%] text-center text-[4vw] leading-[6vw]`}
                >
                  {e.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default New_service;
