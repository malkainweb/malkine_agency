"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/next.svg";
import home_gallery from "../../../../public/home/home_gallery.webp";

const Home_gallery = () => {
  const [gall, setgall] = useState([
    { link: "/home/2.webp", height: "0px", left: "0.6vw", right: "" },
    { link: "/home/1.webp", height: "-20px", left: "13.3vw", right: "" },
    { link: "/home/3.webp", height: "0px", left: "", right: "1.33vw" },
    { link: "/home/4.webp", height: "11.3vw", left: "13.3vw", right: "" },
    { link: "/home/5.webp", height: "11.3vw", left: "26.6vw", right: "" },
    { link: "/home/6.webp", height: "11.3vw", left: "", right: "1.3vw" },
    { link: "/home/7.webp", height: "11.3vw", left: "", right: "13.3vw" },
    { link: "/home/8.webp", height: "22.6vw", left: "32vw", right: "" },
    { link: "/home/9.webp", height: "22.6vw", left: "50vw", right: "" },
    { link: "/home/10.webp", height: "22.6vw", left: "", right: "20vw" },
    { link: "/home/10.webp", height: "26.6vw", left: "20vw", right: "" },
  ]);
  return (
    <>
      <div className="w-full h-auto py-[50px] relative bg-white ">
        <Image
          priority
          src={home_gallery}
          alt="gallery"
          className="abosulute w-full h-full top-0 right-[0]"
        />
        <div className="w-full overflow-hidden h-[41vw] relative  bg-[#FAFAFA]  p_r">
          {gall.map((e: any, i: any) => {
            return (
              <div
                className="w-[11vw] h-[11vw]   rounded-[100%] absolute"
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
      </div>
    </>
  );
};

export default Home_gallery;
