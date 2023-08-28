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
import Logo from "./logo";

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
      link: "/works",
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
  const width = globalThis.innerWidth;

  const handleCancel = () => {
    setleft("100%");
    setright(width <= 650 ? "100%" : "-100%");
    setheight("0px");
    setopacity(0);
  };

  return (
    <>
      <div
        className="w-auto  fixed z-[109] top-0 left-0   flex "
        style={{ height: height }}
      >
        <motion.div
          animate={{ y: left, backgroundColor: "#D01717", opacity: opacity }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.7 }}
          className="h-[100vh] hide_menu relative  w-[30vw] px-[2.6vw] pb-[5.3vw] pt-[3.35vw] flex items-center"
        >
          <div className=" h-[40vw]  sm:hidden  w-full flex justify-end  flex-col ">
            {/* top-[-1.7vw] */}
            <Link href="/" className=" absolute top-[1.65vw]">
              <Image
                priority
                src={logo}
                alt="menu image"
                className="w-[6.62vw]   h-fit"
              />
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
          className="h-[100vh] sm:w-[100vw]  w-[70vw] relative  pl-[3vw] pr-[4.1vw]   pb-[5.3vw] pt-[4.5vw] sm:px-[3vw] sm:py-[0px] flex  justify-center items-center sm:hidden"
        >
          <div className="flex  justify-between w-full h-auto   items-center sm:justify-start sm:flex-col sm:gap-[10vw] sm:items-start">
            {/* the first flex with the big options */}
            <div className="hidden sm:flex  sm:w-full sm:h-[100px] sm:justify-between sm:items-center ">
              <Logo />
              <div className="hidden  sm:flex sm:justify-center sm:items-center sm:w-[10vw] sm:h-[10vw] sm:bg-opacity-[10%] sm:bg-white sm:rounded-[100%] ">
                <i
                  className="bi bi-x-lg  text-[5vw]  font-[700]  cursor-pointer hover:bg-[#B1A2A2] text-white"
                  onClick={handleCancel}
                ></i>
              </div>
            </div>

            <div className="w-auto  h-[40vw] sm:h-[100vw] sm:w-full gap-[30px] flex flex-col justify-between  text-white novabold ">
              <p className="text-[1.3vw] text-[#9E9E9E] sm:hidden  opacity-0">
                {" "}
                i
              </p>
              <div className="w-full h-full flex flex-col justify-between    ">
                {menu_arr.map((e: any, index: any) => {
                  return (
                    <>
                      <div
                        className="flex items-center gap-[5px] sm:gap-[1.25vw]"
                        key={index}
                      >
                        <Link
                          href={e.link}
                          className="novabold capitalize text-[4.6vw] sm:text-[45px] leading-[100%] cursor-pointer hover:text-[#CD6464] transition duration-[1]"
                          style={{
                            color: e.link == pathname ? "#D01717" : "",
                          }}
                        >
                          {e.txt}
                        </Link>
                        <p className="text-[#9E9E9E] text-[1.3vw] sm:text-[20px]  h-fit">
                          {e.no}
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="hidden sm:block w-[80vw] h-[0.5vw] bg-[#DB4F4F]"></div>
              </div>
            </div>

            <Link
              href="/"
              className="nova hidden sm:block hover:bg-[#CDCCCC] transition-all text-[14px] text-[#4B4B4B] bg-[#F3F3F3] py-[3vw] px-[4vw] rounded-[5vw]"
            >
              Become a client <i className="bi bi-arrow-right"></i>
            </Link>

            {/* the second flex with the small small options */}
            <div className=" w-fit   sm:hidden h-[40vw] flex  flex-col  justify-end  ">
              <div className="flex gap-[1.3vw]  w-fit absolute top-[3vw] right-[3.5vw] items-center ">
                <Link
                  href="/"
                  className="nova  hover:bg-[#CDCCCC] transition-all text-[1.33vw] text-[#4B4B4B] bg-[#F3F3F3] py-[0.75vw] px-[1.3vw] rounded-[3vw]"
                >
                  Become a client
                </Link>
                <div
                  className="h-[3.8vw] w-[3.8vw] text-[1.6vw] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] cursor-pointer hover:bg-[#B1A2A2] text-white flex justify-center items-center"
                  onClick={handleCancel}
                >
                  <i className="bi bi-x-lg  "></i>
                </div>
              </div>

              <div className="flex w-auto gap-[10px] items-center">
                <div className="flex flex-col gap-[15px] novabold">
                  <p className="text-[1.2vw] text-[#FFFFFF]">
                    support@rancroft.com <i className="bi bi-clipboard"></i>
                  </p>
                  <p className="text-[1.06vw] text-[#9E9E9E]">
                    Privacy policy & Cookies
                  </p>
                  <p className="text-[0.8vw] text-[#9E9E9E]">
                    <i className="bi bi-c-circle"></i>Rancroft2023
                  </p>
                </div>

                {/* the gloabal and exclamation mark
                 */}
                <div className="w-auto flex flex-col gap-[10px]">
                  <div className="h-[2.2vw] w-[2.2vw] flex justify-center items-center text-[1vw] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] text-white">
                    <i className="bi bi-globe2 "></i>
                  </div>
                  <div className="h-[2.2vw] w-[2.2vw] flex justify-center items-center text-[1vw] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] text-white">
                    <i className="bi bi-exclamation-lg  "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: right, backgroundColor: "#0C0C0C", opacity: opacity }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.7 }}
          className="h-[100vh] sm:w-[100vw]  w-[70vw] px-[2.6vw]   py-[5.3vw] sm:px-[3vw] sm:py-[0px] hidden justify-center items-center sm:flex "
        >
          <div className="flex justify-between w-full h-full  items-center sm:justify-start sm:flex-col sm:gap-[10vw] sm:items-start">
            {/* the first flex with the big options */}
            <div className="hidden sm:flex  sm:w-full sm:h-[100px] sm:justify-between sm:items-center ">
              <Logo />
              <div className="hidden  sm:flex sm:justify-center sm:items-center sm:w-[10vw] sm:h-[10vw] sm:bg-opacity-[10%] sm:bg-white sm:rounded-[100%] ">
                <i
                  className="bi bi-x-lg  text-[5vw]  font-[700]  cursor-pointer hover:bg-[#B1A2A2] text-white"
                  onClick={handleCancel}
                ></i>
              </div>
            </div>

            <div className="w-auto h-[40vw]  sm:h-[100vw] sm:w-full gap-[30px] flex flex-col justify-between  text-white novabold ">
              <p className="text-[1.3vw] text-[#9E9E9E] sm:hidden  opacity-0">
                {" "}
                i
              </p>
              <div className="w-full  h-full flex flex-col justify-between    ">
                {menu_arr.map((e: any, index: any) => {
                  return (
                    <>
                      <div
                        className="flex items-center gap-[5px] sm:gap-[1.25vw]"
                        key={index}
                      >
                        <Link
                          href={e.link}
                          className="novabold capitalize text-[4.6vw] sm:text-[45px] leading-[100%] cursor-pointer hover:text-[#CD6464] transition duration-[1]"
                          style={{
                            color: e.link == pathname ? "#D01717" : "",
                          }}
                        >
                          {e.txt}
                        </Link>
                        <p className="text-[#9E9E9E] text-[1.3vw] sm:text-[20px]  h-fit">
                          {e.no}
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="hidden sm:block w-[80vw] h-[0.5vw] bg-[#DB4F4F]"></div>
              </div>
            </div>

            <Link
              href="/"
              className="nova hidden sm:block hover:bg-[#CDCCCC] transition-all text-[14px] text-[#4B4B4B] bg-[#F3F3F3] py-[3vw] px-[4vw] rounded-[5vw]"
            >
              Become a client <i className="bi bi-arrow-right"></i>
            </Link>

            {/* the second flex with the small small options */}
            <div className=" w-fit   sm:hidden h-[40vw] flex  flex-col  justify-between ">
              <div className="flex gap-[20px] items-center">
                <Link
                  href="/"
                  className="nova  hover:bg-[#CDCCCC] transition-all text-[1.33vw] text-[#4B4B4B] bg-[#F3F3F3] py-[0.75vw] px-[1.3vw] rounded-[3vw]"
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
                    support@rancroft.com <i className="bi bi-clipboard"></i>
                  </p>
                  <p className="text-[1.06vw] text-[#9E9E9E]">
                    Privacy policy & Cookies
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
