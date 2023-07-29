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
      <div className="w-full h-auto flex justify-center items-center px-[300px] py-[50px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1.5 }}
          className="w-full h-auto flex flex-col gap-[60px] text nova "
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
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[5px] px-[10px]  ease-in-out border-white focus:border-b-white"
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
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[5px] px-[10px]  ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* YOUR PHONE NUMBER  */}
          <div className="flex flex-col">
            <input
              onChange={(e) => {
                setphone(e.target.value);
              }}
              placeholder="Your phone number"
              type="number"
              value={phone}
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[5px] px-[10px]  ease-in-out border-white focus:border-b-white"
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
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[5px] px-[10px]  ease-in-out border-white focus:border-b-white"
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
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s]  text-white text-opacity-[90%] py-[5px] px-[10px]  ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* ctn button */}
          <div className="w-full  flex justify-end">
            <button
              className="nova  text-[16px] font[900]text-white rounded-[39px] px-[57px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808] flex justify-center items-center gap-[5px]"
              onClick={() => {
                handleclick(2);
              }}
            >
              Next <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default One;
