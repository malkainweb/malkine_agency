"use client";

import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="w-full  p_r h-auto py-[80px] flex flex-col gap-[50px]">
        <p className="nova text-[30px] font-[500]">LATEST ON PORFOLIO</p>
        <div className="flex   gap-[30px] justify-between flex-wrap w-full h-auto">
          <Link
            href="#"
            className="w-[48%]  port_wrap rounded-[10px]  cursor-pointer py-[30px] h-[350px] px-[30px]"
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
            className="w-[22%]  port_wrap rounded-[10px]  cursor-pointer py-[30px] h-[350px] px-[30px]"
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
            className="w-[22%]  port_wrap rounded-[10px]  cursor-pointer py-[30px] h-[350px] px-[30px]"
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
          <Link
            href="#"
            className="w-[22%]  port_wrap rounded-[10px]  cursor-pointer py-[30px] h-[350px] px-[30px]"
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
            className="w-[22%]  port_wrap rounded-[10px]  cursor-pointer py-[30px] h-[350px] px-[30px]"
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
            className="w-[48%]  port_wrap rounded-[10px]  cursor-pointer py-[30px] h-[350px] px-[30px]"
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
