"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/next.svg";
import home_gallery from "../../../../public/home/home_gallery.webp";
import mob_home_gallery from "../../../../public/home/mob_home_gallery.webp";

const Home_gallery = () => {
  const [gall, setgall] = useState([
    { link: "/home/gallery/1.webp", height: "1vw", left: "4vw", right: "" },
    { link: "/home/gallery/2.webp", height: "2vw", left: "19vw", right: "" },
    { link: "/home/gallery/3.webp", height: "3vw", left: "34vw", right: "" },
    { link: "/home/gallery/4.webp", height: "1.3vw", left: "", right: "19vw" },
    { link: "/home/gallery/5.webp", height: "4vw", left: "", right: "4vw" },
    { link: "/home/gallery/6.webp", height: "17vw", left: "6vw  ", right: "" },
    { link: "/home/gallery/7.webp", height: "15vw", left: "23vw", right: "" },
    { link: "/home/gallery/8.webp", height: "15vw", left: "45vw", right: "" },
    { link: "/home/gallery/9.webp", height: "15vw", left: "61vw", right: "" },
    { link: "/home/gallery/10.webp", height: "32vw", left: "10vw", right: "" },
    { link: "/home/gallery/11.webp", height: "30vw", left: "27vw", right: "" },
    { link: "/home/gallery/12.webp", height: "29vw", left: "45vw", right: "" },
    { link: "/home/gallery/13.webp", height: "29vw", left: "61vw", right: "" },
    { link: "/home/gallery/5.webp", height: "25vw", left: "", right: "7vw" },
  ]);

  const [mob_gall, setmob_gall] = useState([
    { link: "/home/2.webp", top: "138.75vw", left: "", right: "3vw" },
    { link: "/home/1.webp", top: "27.75vw", left: "", right: "0px" },
    { link: "/home/3.webp", top: "111vw", left: "", right: "35.55vw" },
    { link: "/home/4.webp", top: "27.75vw", left: "", right: "35.55vw" },
    { link: "/home/5.webp", top: "55.5vw", left: "", right: "35.55vw" },
    { link: "/home/6.webp", top: "138.75vw", left: "", right: "35.55vw" },
    { link: "/home/7.webp", top: "25.5vw", left: "opx", right: "" },
    { link: "/home/8.webp", top: "55.5vw", left: "8.8vw", right: "" },
    { link: "/home/9.webp", top: "111vw", left: "8.8vw", right: "" },
    { link: "/home/10.webp", top: "83.25vw", left: "8.8vw", right: "" },
    { link: "/home/11.webp", top: "2vw", left: "", right: "6vw" },
  ]);
  return (
    <>
      <div className="w-full h-auto py-[3.33vw] relative bg-white ">
        <Image
          priority
          src={home_gallery}
          alt="gallery"
          className="abosulute w-full h-full sm:hidden top-0 right-[0]"
        />
        <Image
          priority
          src={mob_home_gallery}
          alt="gallery"
          className="abosulute w-full h-full sm:block hidden top-0 right-[0]"
        />
        <div className="w-full overflow-hidden h-[47vw] relative   bg-gradient-to-b from-[#FAFAFA]  p_r sm:hidden">
          {gall.map((e: any, i: any) => {
            return (
              <div
                className="w-[13vw] h-[13vw]   rounded-[100%] absolute"
                style={{
                  backgroundImage: `url(${e.link})`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  top: e.height,
                  left: e.left,
                  right: e.right,
                }}
                key={i}
              ></div>
            );
          })}
        </div>

        <div className="hidden sm:block relative h-[172vw] bg-[#FAFAFA] ">
          {mob_gall.map((e: any, index: any) => {
            return (
              <div
                className="w-[24.75vw] h-[24.75vw]  absolute rounded-[100%]"
                key={index}
                style={{
                  top: e.top,
                  left: e.left,
                  right: e.right,
                  backgroundImage: `url(${e.link})`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home_gallery;
