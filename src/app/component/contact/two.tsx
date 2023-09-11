"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Two = (props: any) => {
  const {
    interest,
    setinterest,
    budget,
    setbudget,
    hear_us,
    sethear_us,
    setstep,
    handle_submit,
    err,
    sendbtn,
    disabled,
    setdisabled,
  } = props;

  // const handleclick = (i: any) => {
  //   if (!budget || !hear_us || !interest) {
  //     seterr("Complete your information below *");
  //     // 👇️ scroll to top on page load
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //     return;
  //   } else {
  //     seterr("");
  //     setstep(i);
  //   }
  // };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleback = (i: any) => {
    setstep(i);
  };
  return (
    <>
      {/* JUST FOR THE PURPOSE OF KEEPING THE FOOTER FISWX WE IMPLEMENT THE DIV BELOW  */}
      <div className="   min-h-[60vw]">
        <div className="w-full h-auto flex justify-center items-center px-[20vw] sm:px-[4vw] py-[3.3vw]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1.5 }}
            className="w-full h-auto flex flex-col gap-[3.3vw] text nova text-white text-opacity-[50%] sm:gap-[18vw] sm:pb-[12vw]"
          >
            <p className="text-[#D01717] nova ">{err}</p>
            {/* interested in what   */}
            <div className="flex flex-col">
              <select
                name=""
                id=""
                className="h-[4.7vw]  w-full bg-[#1A1A1A] outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[0.7vw] py-[0.13vw] sm:py-[2vw] sm:h-full ease-in-out border-white focus:border-b-white text-opacity-[50%] "
                onChange={(e) => {
                  setinterest(e.target.value);
                }}
                value={interest}
              >
                <option style={{}} value="" disabled selected hidden>
                  What are you interested in ?{" "}
                  <span className="text-[#D01717] ">*</span>
                </option>
                <option
                  style={{ color: "white" }}
                  value=" Website & Platform Design"
                >
                  Website & Platform Design
                </option>
                <option
                  style={{ color: "white" }}
                  value="Software Design & Development"
                >
                  Software Design & Development
                </option>
                <option
                  style={{ color: "white" }}
                  value=" Ecommerce Website Design & Development"
                >
                  Ecommerce Website Design & Development
                </option>

                <option
                  style={{ color: "white" }}
                  value="  User Management Systems"
                >
                  User Management Systems
                </option>
                <option
                  style={{ color: "white" }}
                  value="Custom API Development"
                >
                  Custom API Development
                </option>
                <option
                  style={{ color: "white" }}
                  value="Backend System Development"
                >
                  Backend System Development
                </option>
                <option
                  style={{ color: "white" }}
                  value="Web/Mobile App Development"
                >
                  Web/Mobile App Development
                </option>
                <option
                  style={{ color: "white" }}
                  value="UI/UX For Web Mobile Apps"
                >
                  UI/UX For Web Mobile Apps
                </option>
                <option
                  style={{ color: "white" }}
                  value="UI/UX For Websites & Platforms"
                >
                  UI/UX For Websites & Platforms
                </option>
              </select>
            </div>
            {/* your budget   */}
            <div className="flex flex-col relative">
              <input
                name=""
                id=""
                placeholder={"What's your budget ? "}
                className="h-[4.7vw]    w-full bg-[#1A1A1A]  outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white pr-[0.7vw] pl-[2vw] sm:pl-[4.3vw] py-[0.13vw] ease-in-out border-white focus:border-b-white text-opacity-[50%] sm:py-[2vw] sm:h-full"
                onChange={(e) => {
                  const inputValue = e.target.value;

                  // Remove existing commas and non-numeric characters
                  const numericValue = inputValue.replace(/[^0-9]/g, "");

                  // Add commas after every 3 digits
                  const formatted = numericValue.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ",",
                  );

                  // Add .00 to the end
                  setbudget(formatted);
                }}
                value={budget}
              ></input>
              <div className="w-fit h-[4.7vw]  absolute top-0 left-[0.5vw] flex justify-center items-center text-[1.5vw]  sm:text-[4vw] sm:h-full">
                $
              </div>
            </div>
            {/* how did you hear about us  */}
            <div className="flex flex-col">
              <select
                name=""
                id=""
                className="h-[4.7vw]  w-full bg-[#1A1A1A]  outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[0.7vw] py-[0.13vw] ease-in-out border-white focus:border-b-white text-opacity-[50%] sm:py-[2vw] sm:h-full"
                onChange={(e) => {
                  sethear_us(e.target.value);
                }}
                value={hear_us}
              >
                <option style={{}} value="" disabled selected hidden>
                  How did you hear about us ?{" "}
                </option>
                <option
                  style={{ color: "white", borderBottom: "0.07vw solid white" }}
                  value="Twitter"
                >
                  Twitter
                </option>

                <option style={{ color: "white" }} value="Linkedin">
                  Linkedin
                </option>
                <option style={{ color: "white" }} value="Word of mouth">
                  Word of mouth
                </option>
                <option style={{ color: "white" }} value="Goggle">
                  Goggle
                </option>
                <option style={{ color: "white" }} value="Bing">
                  Bing
                </option>
                <option style={{ color: "white" }} value="Yahoo">
                  Yahoo
                </option>
              </select>
            </div>
            {/* demo */}
            {/* <input
            type="text"
            className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[0.7vw] py-[0.13vw] ease-in-out border-white focus:border-b-white"
          /> */}
            {/* ctn button */}
            <div className="w-full  flex justify-between">
              <button
                className="nova  text-[1.07vw] font[900]  rounded-[2.6vw] px-[3.8vw] py-[1.07vw] border-[#D01717] border2 text-white hover:bg-[#920808] flex justify-center items-center gap-[0.33vw] sm:text-[4vw]  sm:block   font[900]  sm:rounded-[9.75vw] sm:px-[11vw] w-fit sm:py-[3.5vw] sm:hover:border-[0px] sm:text-white "
                onClick={() => {
                  handleback(1);
                }}
              >
                <i className="bi bi-arrow-left"></i> Back
              </button>
              <button
                className="nova  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.8vw] py-[1.07vw] bg-[#D01717]  hover:bg-[#920808] flex justify-center items-center gap-[0.4vw] sm:text-[4vw]  sm:block   font[900]  sm:rounded-[9.75vw] sm:px-[11vw] w-fit sm:py-[3.5vw]  sm:text-white "
                onClick={() => {
                  handle_submit();
                }}
                disabled={disabled}
              >
                {sendbtn} <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Two;
