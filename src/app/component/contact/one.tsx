"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const One = (props: any) => {
  const [err, seterr] = useState("");
  const {
    name,
    setname,
    phone,
    setphone,
    business,
    setbusiness,
    email,
    setemail,
    prject_info,
    setprject_info,
    setstep,
  } = props;

  const handleclick = (i: any) => {
    if (!name || !phone || !business || !email || !prject_info) {
      seterr("Please fill all fields below *");
      // 👇️ scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    } else {
      seterr("");
      setstep(i);
    }
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
            className="w-full h-auto flex flex-col gap-[4vw] sm:gap-[18vw] sm:pb-[12vw] text nova "
          >
            <p className="text-[#D01717] nova ">{err}</p>
            {/* YOUR NAME  */}
            <div className="flex flex-col">
              <input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
                placeholder="Your name * "
                type="text"
                className="w-full capitalize bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[0.4vw] px-[0.7vw]  ease-in-out border-white focus:border-b-white"
              />
            </div>

            {/* YOUR EMAIL */}
            <div className="flex flex-col">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="Your email *"
                value={email}
                type="email"
                className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[0.4vw] px-[0.7vw]  ease-in-out border-white focus:border-b-white"
              />
            </div>

            {/* YOUR PHONE NUMBER  */}
            <div className="flex flex-col">
              <input
                onChange={(e) => {
                  const inputText = e.target.value;

                  // Use a regular expression to remove any characters that are not numbers or symbols
                  const sanitizedText = inputText.replace(/[^0-9+()\-\s]/g, "");
                  setphone(sanitizedText);
                }}
                placeholder="Your phone number"
                type="text"
                value={phone}
                className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[0.4vw] px-[0.7vw]  ease-in-out border-white focus:border-b-white"
              />
            </div>

            {/* BUSINESS NAME  */}
            <div className="flex flex-col">
              <input
                onChange={(e) => {
                  setbusiness(e.target.value);
                }}
                value={business}
                placeholder="Business name"
                type="text"
                className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[0.4vw] px-[0.7vw]  ease-in-out border-white focus:border-b-white"
              />
            </div>

            {/* tell us about your project */}
            <div className="flex flex-col">
              <input
                type="text"
                onChange={(e) => {
                  setprject_info(e.target.value);
                }}
                placeholder="Tell us about your project"
                value={prject_info}
                className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[0.4vw] px-[0.7vw]  ease-in-out border-white focus:border-b-white"
              />
            </div>

            {/* ctn button */}
            <div className="w-full  flex justify-end">
              <button
                className="nova  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.8vw] py-[1.07vw] bg-[#D01717]  hover:bg-[#920808] flex justify-center items-center gap-[0.4vw] sm:text-[4vw]  sm:block  sm:text-[3vw] font[900]  sm:rounded-[9.75vw] sm:px-[11vw] w-fit sm:py-[3.5vw] bg-[#D01717] sm:text-white hover:bg-[#920808]"
                onClick={() => {
                  handleclick(2);
                }}
              >
                Next <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default One;
