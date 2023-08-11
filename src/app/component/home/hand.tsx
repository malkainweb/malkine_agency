"use client";

import Image from "next/image";
import React, { useRef } from "react";
import client_logo from "../../../../public/home/client.webp";
import add_logo from "../../../../public/home/add_logo.png";

import { useInView } from "framer-motion";
import aeroplane_malkaine from "../../../../public/home/home_service.webp";
import hand_left from "../../../../public/home/hand_left.webp";
import hand_right from "../../../../public/home/hand_right.webp";
import hand_middle from "../../../../public/home/hand_middle.webp";
import { useState, useEffect } from "react";
// import { useInView } from "react-cool-inview";

const Hands = (props: any) => {
  const { general } = props;
  const [check, setcheck] = useState("absolute");
  const [bottom, setbottom] = useState("");
  const [top, settop] = useState("0");
  const ref = useRef(null);
  const outref = useRef(null);
  const isoutview = useInView(outref);
  const isInView = useInView(ref);

  //
  //

  return (
    <>
      <div className="w-full  p_r pt-[6vw] pb-[8vw] h-auto" ref={ref}>
        <div className="w-full h-[40vw]  relative flex flex-col gap-[4.7vw]">
          <div className="flex z-[2] flex-col text-white nova text-[2.7vw]">
            <p className="font-[700]">Our Top</p>
            <p className=" px-[4.7vw]  italic font-light">Client Logos</p>
          </div>

          <div className="w-full h-auto  flex flex-col gap-[0.2vw]">
            <div className="flex">
              <div className="w-[4vw] "></div>
              <p className="text-[#737373] capitalize">
                Our top 12 logo designs
              </p>
            </div>
            <div className="flex text-white ">
              <div className="w-[4vw] h-full  text-[red] font-[900] text-[2.7vw] justify-center flex">
                <Image
                  priority
                  src={add_logo}
                  alt="start logo"
                  className=" w-[1.3vw] h-fit "
                />
              </div>
              <p className="nova text-[1vw] font-medium">
                We design with quality and brand <br />
                identity in view
              </p>
            </div>
          </div>
          <div className="border2 w-full h-auto">
            {/* tomorrow i would work on this  */}
          </div>
        </div>
      </div>
      {/* logo is foound up  */}

      {/*  */}

      {/*  */}

      {/*  */}
      <div
        className="w-full h-[140vw]   flex hand_bg"
        style={{ alignItems: "flex-start" }}
      >
        <div
          className="flex  justify-center bottom-[-3.33vw]  w-fit items-center h-auto "
          style={{
            position: "sticky",
            left: "50%",
            alignSelf: "flex-end",
            transform: " translateX(-50%)",
          }}
        >
          <Image
            priority
            src={hand_middle}
            alt="work image"
            className=" w-[45vw]  h-fit transition delay-[2s]"
          />
        </div>
      </div>

      <div className="py-[3.33vw] w-full h-auto p_r bg-white" ref={outref}>
        <div className="w-full flex items-end pb-[6.7vw]  h-[53.3vw] home_service  relative">
          <Image
            priority
            src={aeroplane_malkaine}
            alt="aeroplan malkaine"
            className="w-full absolute top-0 left-0 h-full "
          />

          <div className=" items-center z-[10] text-white w-full flex justify-between p_r">
            <div className="flex flex-col gap-[0.33vw] w-fit">
              <p className="text-[3vw] inter font-medium">2023</p>
              <p className="uppercase nova text-[0.8vw]">malkain, newyork</p>
            </div>
            {/* Services we offer */}
            <div className="flex flex-col gap-[0.7vw] text-[0.8vw]  w-fit uppercasep nova">
              <p className="text-[3vw]">Services we offer </p>
              <div className="flex gap-[0.33vw]">
                <div className="flex items-center  h-fit gap-[0.33vw]">
                  <p className="uppercase ">our working system </p>
                  <div className="w-[6.7vw] h-[0.07vw] bg-white"></div>
                </div>
                <p className="uppercase">
                  Lets help take off your next project <br /> from end to end
                  covering from <br /> research down to deployment
                </p>
              </div>
            </div>
          </div>
          <button
            className="nova absolute bottom-[0.2vw] left-[50%] text-[1vw] font[900]  rounded-[2.6vw] px-[2vw] py-[1.07vw] bg-[#D01717] text-white hover:bg-[#920808]"
            style={{ transform: "translateX(-50%)" }}
          >
            Work with us <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hands;
