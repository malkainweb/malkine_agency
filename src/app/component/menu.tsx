"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";
import rev from "../../../public/menu/rev.webp";
import star from "../../../public/menu/star.webp";
import { useState } from "react";

const Menu = (props: any) => {
  const { setleft, left, setright, right, height, setheight } = props;
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
  };

  return (
    <>
      <div
        className="w-auto border fixed z-[109] top-0 left-0  flex "
        style={{ height: height }}
      >
        <motion.div
          animate={{ y: left, backgroundColor: "#D01717", opacity: 1 }}
          initial={{ y: "100%", opacity: 0.7 }}
          transition={{ duration: 0.7 }}
          className="min-h-[100vh]  w-[30vw] px-[40px] py-[80px] flex justify-between flex-col"
        >
          <Link href="/">
            <Logo />
          </Link>

          <div className="w-full flex flex-col gap-[15px]">
            <p className="novabold text-[25px] text-[#BFBFBF]">
              Lets help bring your amazing <br />
              idea to life
            </p>
          </div>
        </motion.div>

        {/* second section begins here  */}

        <motion.div
          animate={{ y: right, backgroundColor: "#0C0C0C", opacity: 1 }}
          initial={{ y: "-100%", opacity: 0.7 }}
          transition={{ duration: 0.7 }}
          className="h-[100vh]  w-[70vw] px-[70px] py-[50px] pb-[20px] justify-center items-center"
        >
          <div className="flex justify-between w-full h-full">
            {/* the first flex with the big options */}

            <div className="w-auto h-[600px] gap-[30px] flex flex-col justify-between  text-white novabold">
              <p className="text-[20px] text-[#9E9E9E] ">Navigation</p>
              <div className="w-full h-full flex flex-col justify-between    ">
                {menu_arr.map((e: any, index: any) => {
                  return (
                    <div className="flex items-center gap-[5px]" key={index}>
                      <p
                        className="novabold capitalize text-[70px]  leading-[100%] cursor-pointer hover:text-[#CD6464] transition duration-[1]"
                        style={{
                          color: e.link == pathname ? "#D01717" : "",
                        }}
                      >
                        {e.txt}
                      </p>
                      <p className="text-[#9E9E9E] text-[20px]  h-fit">
                        {e.no}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* the second flex with the small small options */}
            <div className=" w-fit h-[600px] flex  flex-col  justify-between ">
              <div className="flex gap-[20px] items-center">
                <Link
                  href="/"
                  className="nova hover:bg-[#CDCCCC] transition-all text-[20px] text-[#4B4B4B] bg-[#F3F3F3] py-[10px] px-[20px] rounded-[45px]"
                >
                  Become a client
                </Link>
                <i
                  className="bi bi-x-lg py-[10px] px-[15px] text-[25px] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] cursor-pointer hover:bg-[#B1A2A2] text-white"
                  onClick={handleCancel}
                ></i>
              </div>

              <div className="flex w-auto gap-[10px] items-center">
                <div className="flex flex-col gap-[15px] novabold">
                  <p className="text-[18px] text-[#FFFFFF]">
                    Support@rancroft.com <i className="bi bi-clipboard"></i>
                  </p>
                  <p className="text-[16px] text-[#9E9E9E]">
                    Privacy policy&Cookies
                  </p>
                  <p className="text-[12px] text-[#9E9E9E]">
                    <i className="bi bi-c-circle"></i>Rancroft2023
                  </p>
                </div>

                {/* the gloabal and exclamation mark
                 */}
                <div className="w-auto flex flex-col gap-[10px]">
                  <i className="bi bi-globe2 py-[5px] px-[10px] text-[15px] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] text-white"></i>
                  <i className="bi bi-exclamation-lg py-[5px] px-[10px] text-[15px] rounded-[100%] font-[700] bg-[#FFFFFF] bg-opacity-[10%] text-white"></i>
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
