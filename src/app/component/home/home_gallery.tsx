"use client";

import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/next.svg";
import home_gallery from "../../../../public/home/home_gallery.webp";
import mob_home_gallery from "../../../../public/home/mob_home_gallery.webp";

const Home_gallery = () => {
  const [active, setactive] = useState(1);
  const [go, setgo] = useState("0vw");
  const [gall, setgall] = useState([
    { link: "/home/gallery/1.webp", height: "1vw", left: "4vw", right: "" },
    {
      color: "#69DF91",
      height: "2vw",
      left: "19vw",
      right: "",
      txt: "18 Full time employees",
    },
    { link: "/home/gallery/3.webp", height: "3vw", left: "34vw", right: "" },
    { link: "/home/gallery/4.webp", height: "1.3vw", left: "", right: "19vw" },
    { link: "/home/gallery/5.webp", height: "4vw", left: "", right: "4vw" },
    { link: "/home/gallery/6.webp", height: "17vw", left: "6vw  ", right: "" },
    { link: "/home/gallery/7.webp", height: "15vw", left: "23vw", right: "" },
    { link: "/home/gallery/8.webp", height: "15vw", left: "45vw", right: "" },
    {
      color: "#314C55",
      txt: "8 Years Providing Amazing services",
      txtColor: "#FEF7DD",
      height: "15vw",
      left: "61vw",
      right: "",
    },
    {
      color: "#DBDCE0",
      height: "32vw",
      left: "10vw",
      right: "",
      txt: "40+ yearly project turn over",
    },
    { link: "/home/gallery/11.webp", height: "30vw", left: "27vw", right: "" },
    {
      color: "#052355",
      height: "29vw",
      txt: "36",
      txtColor: "#C8D6EC",
      txtfont: "5.8vw",
      left: "45vw",
      right: "",
    },
    { link: "/home/gallery/13.webp", height: "29vw", left: "61vw", right: "" },
    {
      txt: "51",
      color: "#A891AB",
      txtColor: "#052355",
      txtfont: "5.8vw",
      height: "25vw",
      left: "",
      right: "7vw",
    },
  ]);

  const [mob_gall1, setmob_gall1] = useState([
    {
      color: "#DBDCE0",
      txt: "40+ yearly project turn over",
      height: "1vw",
      left: "2vw",
      right: "",
    },
    { link: "/home/gallery/6.webp", height: "10vw", left: "40vw", right: "" },
    { link: "/home/gallery/3.webp", height: "1vw", left: "", right: "4vw" },
    {
      link: "/home/gallery/11.webp",
      height: "32vw",
      left: "5vw",
      right: "0vw",
    },
    {
      txt: "18 Full time employees",
      color: "#69DF91",
      height: "32vw",
      left: "",
      right: "10vw",
    },
    {
      color: "#314C55",
      txt: "8 Years Providing Amazing services",
      txtColor: "#FEF7DD",
      height: "53vw",
      left: "36vw  ",
      right: "",
    },
    { link: "/home/gallery/12.webp", height: "60vw", left: "", right: "2vw" },
  ]);

  const [mob_gall2, setmob_gall2] = useState([
    { link: "/home/gallery/1.webp", height: "1vw", left: "", right: "2vw" },
    {
      color: "#314C55",
      txt: "31",
      txtColor: "#FEF7DD",
      txtfont: "12vw",
      height: "5vw",
      left: "2vw",
      right: "",
    },
    { link: "/home/gallery/4.webp", height: "2vw", left: "40vw", right: "" },
    { link: "/home/gallery/8.webp", height: "28vw", left: "28vw", right: "" },
    { link: "/home/gallery/5.webp", height: "40vw", left: "1vw", right: "" },
    { link: "/home/gallery/13.webp", height: "30vw", left: " ", right: "2vw" },
    {
      link: "/home/gallery/9.webp",
      height: "50vw",
      left: "",
      right: "26vw",
    },
  ]);
  return (
    <>
      <div className="w-full h-auto py-[6.33vw] relative bg-white  ">
        {/* <Image
          priority
          src={home_gallery}
          alt="gallery"
          className=" w-full h-full sm:hidden top-0 right-[0]"
        />
        <Image
          priority
          src={mob_home_gallery}
          alt="gallery"
          className=" w-full h-full sm:block hidden "
        /> */}
        <div className="absolute  h-[30vw] sm:hidden w-full top-0 left-0 bg-gradient-to-t from-[#FAFAFA] "></div>
        <div className="absolute  h-[30vw] sm:hidden w-full bottom-0 left-0 bg-gradient-to-b from-[#FAFAFA] "></div>

        <div className="w-full h-[20vw] items-center justify-center sm:bg-gradient-to-b sm:from-[#FAFAFA]  sm:flex hidden">
          <div
            className="w-[50vw] h-[6vw]  bg-[#E8E5E5] rounded-[4vw] flex"
            style={{ border: "0.25vw solid #E8E5E5" }}
          >
            <div
              className="w-full bg-white h-full rounded-[4vw] transition duration-[1s]"
              onClick={() => {
                setactive(1);
                setgo("0vw");
              }}
              style={{ backgroundColor: active == 1 ? "white" : "transparent" }}
            ></div>
            <div
              className="w-full  h-full rounded-[4vw] transition duration-[1s]"
              onClick={() => {
                setactive(2);
                setgo("-100vw");
              }}
              style={{ backgroundColor: active == 2 ? "white" : "transparent" }}
            ></div>
          </div>
        </div>

        <div className="w-full overflow-hidden h-[47vw] relative  p_r sm:hidden">
          {gall.map((e: any, i: any) => {
            return (
              <div
                className="w-[13vw] h-[13vw] items-center justify-center flex rounded-[100%] absolute nova text-center px-[1vw] text-[#052355] text-[1.3vw]"
                style={{
                  backgroundImage: `url(${e.link})`,
                  backgroundPosition: "top center",
                  backgroundColor: e.color,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  top: e.height,
                  left: e.left,
                  right: e.right,
                  color: e.txtColor,
                  fontSize: e.txtfont,
                }}
                key={i}
              >
                <p>{e.txt}</p>
              </div>
            );
          })}
        </div>

        {/* this is just for the coll effecyt of coloruing  */}

        <div
          className="hidden sm:block relative h-[100vw] transition duration-[1.5s] "
          style={{ transform: `translateX(${go})` }}
        >
          <div className="w-[200vw] absolute top-0 left-0 flex h-full   ">
            <div className="relative w-full h-full ">
              {mob_gall1.map((e: any, index: any) => {
                return (
                  <div
                    className="w-[25vw] h-[25vw] items-center justify-center flex  text-[#052355] text-[2.5vw] px-[1.5vw] text-center absolute rounded-[100%]"
                    key={index}
                    style={{
                      top: e.height,
                      left: e.left,
                      right: e.right,
                      backgroundImage: `url(${e.link})`,
                      backgroundPosition: "top center",
                      backgroundColor: e.color,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      color: e.txtColor,
                      fontSize: e.txtfont,
                    }}
                  >
                    <p>{e.txt}</p>
                  </div>
                );
              })}
            </div>

            <div className="relative w-full h-full ">
              {mob_gall2.map((e: any, index: any) => {
                return (
                  <div
                    className="w-[24.75vw] h-[24.75vw]  absolute rounded-[100% text-[2.5vw] px-[1.5vw] items-center justify-center flex text-center absolute rounded-[100%]"
                    key={index}
                    style={{
                      top: e.height,
                      left: e.left,
                      right: e.right,
                      backgroundColor: e.color,

                      backgroundImage: `url(${e.link})`,
                      backgroundPosition: "top center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      color: e.txtColor,
                      fontSize: e.txtfont,
                    }}
                  >
                    {" "}
                    <p>{e.txt}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_gallery;
