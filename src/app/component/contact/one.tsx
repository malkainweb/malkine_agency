"use client";

import React from "react";

const One = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center px-[300px] py-[50px]">
        <div className="w-full h-auto flex flex-col gap-[40px] text nova text-white text-opacity-[50%]">
          {/* YOUR NAME  */}
          <div className="flex flex-col">
            <label htmlFor="">
              Your name
              <span className="text-[#D01717] text-opacity-[50%]"> *</span>{" "}
            </label>
            <input
              type="text"
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* YOUR EMAIL */}
          <div className="flex flex-col">
            <label htmlFor="">
              Your email
              <span className="text-[#D01717] text-opacity-[50%]"> *</span>{" "}
            </label>
            <input
              type="email"
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* YOUR PHONE NUMBER  */}
          <div className="flex flex-col">
            <label htmlFor="">Your phone number</label>
            <input
              type="number"
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* BUSINESS NAME  */}
          <div className="flex flex-col">
            <label htmlFor="">Business name</label>
            <input
              type="text"
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* tell us about your project */}
          <div className="flex flex-col">
            <label htmlFor="">Tell us about your project</label>
            <input
              type="text"
              className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white"
            />
          </div>

          {/* ctn button */}
          <div className="w-full  flex justify-end">
            <button className="nova  text-[16px] font[900]text-white rounded-[39px] px-[57px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
              Next <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default One;
