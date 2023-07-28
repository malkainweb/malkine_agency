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

  useEffect(() => {
    console.log("logo is in view " + isInView);
  }, [isInView]);
  useEffect(() => {
    console.log("plane is in view " + isoutview);
  }, [isoutview]);

  useEffect(() => {
    if (isInView == false) {
      setcheck("fixed");
      setbottom("");
      settop("0");
      return;
    } else if (isInView) {
      setcheck("absolute");
      settop("0");
      setbottom("");
    }
  }, [general]);
  //
  useEffect(() => {
    if (isoutview) {
      setcheck("absolute");
      setbottom("0px");
      settop("");
      // settop("");
    } else if (!isoutview) {
      setcheck("fixed");
      settop("0");
      setbottom("0");
    }
  }, [general]);

  return (
    <>
      <div className="w-full  p_r py-[90px]  h-auto" ref={ref}>
        <div className="w-full h-[600px]  relative flex flex-col gap-[70px]">
          <div className="flex z-[2] flex-col text-white nova text-[40px]">
            <p className="font-[700]">Our Top</p>
            <p className=" px-[70px]  italic font-light">Client Logos</p>
          </div>

          <div className="w-full h-auto  flex flex-col gap-[3px]">
            <div className="flex">
              <div className="w-[60px] "></div>
              <p className="text-[#737373] capitalize">
                Our top 12 logo designs
              </p>
            </div>
            <div className="flex text-white ">
              <div className="w-[60px] h-full  text-[red] font-[900] text-[40px] justify-center flex">
                <Image
                  src={add_logo}
                  alt="start logo"
                  className=" w-[20px] h-fit "
                />
              </div>
              <p className="nova text-[15px] font-medium">
                We design with quality and brand <br />
                identity in view
              </p>
            </div>
          </div>
          <Image
            src={client_logo}
            alt="clients logo"
            className="z-[1] w-[80%] h-fit absolute bottom-0 right-[10%]"
          />
        </div>
      </div>
      {/* logo is foound up  */}

      {/*  */}

      {/*  */}

      {/*  */}
      {/* <div className="w-ful h-[1500px]  relative overflow-hidden hand_bg"> */}
      {/* <Image
          src={hand_left}
          alt="work image"
          className="absolute w-[37%] h-full top-0 left-0 "
        />
        <Image
          src={hand_right}
          alt="work image"
          className="absolute w-[37%] h-full top-0 right-0 "
        /> */}

      {/* <Image
          src={hand_middle}
          alt="work image"
          className=" w-[600px]  h-[100vh] transition delay-[2s]"
          style={{
            position: check,
            left: "calc(50% - 180px)",
            bottom: bottom,
            top: top,
          }}
        /> */}
      {/* </div> */}

      <div className="py-[50px] w-full h-auto p_r bg-white" ref={outref}>
        <div className="w-full flex items-end pb-[100px]  h-[700px] home_service  relative">
          <Image
            src={aeroplane_malkaine}
            alt="aeroplan malkaine"
            className="w-full absolute top-0 left-0 h-full "
          />

          <div className=" items-center z-[10] text-white w-full flex justify-between p_r">
            <div className="flex flex-col gap-[5px] w-fit">
              <p className="text-[45px] inter font-medium">2023</p>
              <p className="uppercase nova text-[12px]">malkain, newyork</p>
            </div>
            {/* Services we offer */}
            <div className="flex flex-col gap-[10px] text-[12px]  w-fit uppercasep nova">
              <p className="text-[45px]">Services we offer </p>
              <div className="flex gap-[5px]">
                <div className="flex items-center  h-fit gap-[5px]">
                  <p className="uppercase ">our working system </p>
                  <div className="w-[100px] h-[1px] bg-white"></div>
                </div>
                <p className="uppercase">
                  Lets help take off your next project <br /> from end to end
                  covering from <br /> research down to deployment
                </p>
              </div>
            </div>
          </div>
          <button
            className="nova absolute bottom-[3px] left-[50%] text-[15px] font[900]text-white rounded-[39px] px-[30px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]"
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
