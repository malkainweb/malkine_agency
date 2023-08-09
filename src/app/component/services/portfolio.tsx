"use client";

import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="w-full  px-[3.3vw] h-auto py-[5.3vw] flex flex-col gap-[1.3vw]">
        <p className="nova text-[2vw] font-[500] pb-[1.3vw]">
          LATEST ON PORFOLIO
        </p>
        <div className="flex   justify-between flex-wrap w-full h-auto">
          <Link
            href="#"
            className="w-[49.5%]  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">finance</p>
                <p className="port_text">BondBullies</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="w-[24.6%]  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">adventure</p>
                <p className="port_text">climb onsight</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="w-[24.6%]  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">beauty</p>
                <p className="port_text">ash&beau</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
        </div>

        {/* this is for the ssecon flex direction */}
        <div className="flex   justify-between flex-wrap w-full h-auto">
          {" "}
          <Link
            href="#"
            className="w-[24.6%]  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">housing</p>
                <p className="port_text">atella</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="w-[24.6%]  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">portfolio</p>
                <p className="port_text">jonah jameson</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
          <Link
            href="#"
            className="w-[49.5%]  port_wrap rounded-[10px]  cursor-pointer py-[2vw] h-[23.3vw] px-[2vw]"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-[10px] capitalize">
                <p className="port_first_text">kids</p>
                <p className="port_text">modamu</p>
              </div>
              <div className="port_ctn">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
