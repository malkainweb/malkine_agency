"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import rev from "../../../public/menu/rev.webp";
import star from "../../../public/menu/star.webp";
import { useState } from "react";
import Menu_Logo from "./menu_logo";

const Menu = (props: any) => {
  const {
    setleft,
    left,
    setright,
    right,
    height,
    setheight,
    opacity,
    setopacity,
  } = props;
  const pathname = usePathname();

  const [menu_arr, setmenu_arr] = useState([
    {
      txt: "home",
      no: "01",
      link: "/",
    },
    {
      txt: "Our Services",
      no: "02",
      link: "/services",
    },
    {
      txt: "About Us",
      no: "03",
      link: "/about",
    },
    {
      txt: "Portfolio",
      no: "04",
      link: "/portfolio",
    },
    {
      txt: "Reviews",
      no: "05",
      link: "/Reviews",
    },
    {
      txt: "Contact Us",
      no: "06",
      link: "/contact",
    },
  ]);

  const handleCancel = () => {
    setleft("100%");
    setright("-100%");
    setheight("0px");
    setopacity(0.2);
  };

  return (
    <>
      <div
        className="w-auto  fixed z-[109] top-0 left-0  flex "
        style={{ height: height }}
      >
        <motion.div
          animate={{ y: left, backgroundColor: "#D01717", opacity: opacity }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.7 }}
          className="h-[100vh]  w-[30vw] px-[2.6vw] py-[5.3vw] flex items-center"
        >
          <div className=" h-[40vw] w-full flex justify-between flex-col">
            <Link href="/">
              <Image src={logo} alt="menu image" className="w-[8vw] h-fit" />
            </Link>

            <div className="w-full flex flex-col gap-[15px]">
              <p className="novabold text-[1.66vw] text-[#BFBFBF]">
                Lets help bring your amazing <br />
                idea to life
              </p>
            </div>
          </div>
        </motion.div>

        {/* second section begins here  */}

        <motion.div
          animate={{ y: right, backgroundColor: "#0C0C0C", opacity: opacity }}
          initial={{ y: "-100%" }}
          transition={{ duration: 0.7 }}
          className="h-[100vh]  w-[70vw] px-[2.6vw] py-[5.3vw]  flex justify-center items-center"
        >
          <div className="flex justify-between w-full h-full  items-center ">
            {/* the first flex with the big options */}

            <div className="w-auto h-[40vw] gap-[30px] flex flex-col justify-between  text-white novabold">
              <p className="text-[1.3vw] text-[#9E9E9E] ">Navigation</p>
              <div className="w-full h-full flex flex-col justify-between    ">
                {menu_arr.map((e: any, index: any) => {
                  return (
                    <div className="flex items-center gap-[5px]" key={index}>
                      <p
                        className="novabold capitalize text-[4.6vw]  leading-[100%] cursor-pointer hover:text-[#CD6464] transition duration-[1]"
                        style={{
                          color: e.link == pathname ? "#D01717" : "",
                        }}
                      >
                        {e.txt}
                      </p>
                      <p className="text-[#9E9E9E] text-[1.3vw]  h-fit">
                        {e.no}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* the second flex with the small small options */}
            <div className=" w-fit  h-[40vw] flex  flex-col  justify-between ">
              <div className="flex gap-[20px] items-center">
                <Link
                  href="/"
                  className="nova hover:bg-[#CDCCCC] transition-all text-[1.33vw] text-[#4B4B4B] bg-[#F3F3F3] py-[0.75vw] px-[1.3vw] rounded-[45px]"
                >
                  Become a client
                </Link>
                <i
                  className="bi bi-x-lg py-[0.75vw] px-[1.2vw] text-[1.6vw] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] cursor-pointer hover:bg-[#B1A2A2] text-white"
                  onClick={handleCancel}
                ></i>
              </div>

              <div className="flex w-auto gap-[10px] items-center">
                <div className="flex flex-col gap-[15px] novabold">
                  <p className="text-[1.2vw] text-[#FFFFFF]">
                    Support@rancroft.com <i className="bi bi-clipboard"></i>
                  </p>
                  <p className="text-[1.06vw] text-[#9E9E9E]">
                    Privacy policy&Cookies
                  </p>
                  <p className="text-[0.8vw] text-[#9E9E9E]">
                    <i className="bi bi-c-circle"></i>Rancroft2023
                  </p>
                </div>

                {/* the gloabal and exclamation mark
                 */}
                <div className="w-auto flex flex-col gap-[10px]">
                  <i className="bi bi-globe2 py-[5px] px-[10px] text-[1vw] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] text-white"></i>
                  <i className="bi bi-exclamation-lg py-[5px] px-[10px] text-[1vw] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Menu;
