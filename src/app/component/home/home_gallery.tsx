"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/next.svg";
import home_gallery from "../../../../public/home/home_gallery.webp";

const Home_gallery = () => {
  const [gall, setgall] = useState([
    { link: "/home/2.webp", height: "0px", left: "10px", right: "0px" },
    { link: "/home/1.webp", height: "-20px", left: "200px", right: "0px" },
    { link: "/home/3.webp", height: "0px", left: "", right: "20px" },
    { link: "/home/4.webp", height: "170px", left: "200px", right: "" },
    { link: "/home/5.webp", height: "170px", left: "400px", right: "" },
    { link: "/home/6.webp", height: "170px", left: "", right: "20px" },
    { link: "/home/7.webp", height: "170px", left: "", right: "200px" },
    { link: "/home/8.webp", height: "340px", left: "480px", right: "0px" },
    { link: "/home/9.webp", height: "340px", left: "750px", right: "0px" },
    { link: "/home/10.webp", height: "340px", left: "", right: "300px" },
    { link: "/home/10.webp", height: "400px", left: "300px", right: "" },
  ]);
  return (
    <>
      <div className="w-full h-auto py-[50px] relative bg-white ">
        <Image
          placeholder="blur"
          src={home_gallery}
          alt="gallery"
          className="abosulute w-full h-full top-0 right-[0]"
        />
        <div className="w-full overflow-hidden h-[600px] relative  bg-[#FAFAFA]  p_r">
          {gall.map((e: any, i: any) => {
            return (
              <div
                className="w-[160px] h-[160px]   rounded-[100%] absolute"
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
