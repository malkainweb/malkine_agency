"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Two = (props: any) => {
  const [err, seterr] = useState("");
  const {
    interest,
    setinterest,
    budget,
    setbudget,
    hear_us,
    sethear_us,
    setstep,
  } = props;

  const handleclick = (i: any) => {
    if (!budget || !hear_us || !interest) {
      seterr("Complete your information below *");
      // 👇️ scroll to top on page load
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    } else {
      seterr("");
      setstep(i);
    }
  };

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
      <div className="   h-[50vw]">
        <div className="w-full h-auto flex justify-center items-center px-[300px] py-[50px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, duration: 1.5 }}
            className="w-full h-auto flex flex-col gap-[50px] text nova text-white text-opacity-[50%]"
          >
            <p className="text-[#D01717] nova ">{err}</p>
            {/* interested in what   */}
            <div className="flex flex-col">
              <select
                name=""
                id=""
                className="h-[70px]  w-full bg-[#1A1A1A] outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white text-opacity-[50%] "
                onChange={(e) => {
                  setinterest(e.target.value);
                }}
                value={interest}
              >
                <option style={{}} value="" disabled selected hidden>
                  What are you interested in ?{" "}
                  <span className="text-[#D01717] ">*</span>
                </option>
                <option style={{ color: "white" }} value=" Site from Scratch">
                  Site from Scratch
                </option>
                <option style={{ color: "white" }} value=" UX/UI Design">
                  UX/UI Design
                </option>
                <option style={{ color: "white" }} value="Branding">
                  Branding
                </option>
                <option style={{ color: "white" }} value="  Web Development">
                  Web Development
                </option>
                <option style={{ color: "white" }} value="3D">
                  3D
                </option>
                <option style={{ color: "white" }} value="Maintenances">
                  Maintenance
                </option>
              </select>
            </div>
            {/* your budget   */}
            <div className="flex flex-col">
              <select
                name=""
                id=""
                className="h-[70px]  w-full bg-[#1A1A1A] outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white text-opacity-[50%] "
                onChange={(e) => {
                  setbudget(e.target.value);
                }}
                value={budget}
              >
                <option style={{}} value="" disabled selected hidden>
                  What{"'"}s your budget ?{" "}
                  <span className="text-[#D01717] ">*</span>
                </option>
                <option style={{ color: "white" }} value="2k - 10k">
                  2k - 10k
                </option>
                <option style={{ color: "white" }} value="10k - 30k">
                  10k - 30k
                </option>
                <option style={{ color: "white" }} value="40k - 100k">
                  40k - 100k
                </option>
                <option style={{ color: "white" }} value=">100k">
                  {">"}100k
                </option>
              </select>
            </div>
            {/* how did you hear about us  */}
            <div className="flex flex-col">
              <select
                name=""
                id=""
                className="h-[70px]  w-full bg-[#1A1A1A]  outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white text-opacity-[50%] "
                onChange={(e) => {
                  sethear_us(e.target.value);
                }}
                value={hear_us}
              >
                <option style={{}} value="" disabled selected hidden>
                  How did you hear about us ?{" "}
                </option>
                <option
                  style={{ color: "white", borderBottom: "1px solid white" }}
                  value="Twitter"
                >
                  Twitter
                </option>
                <option style={{ color: "white" }} value="A friend">
                  A friend
                </option>
                <option style={{ color: "white" }} value="Linkedin">
                  Linkedin
                </option>
                <option style={{ color: "white" }} value="Word of mouth">
                  Word of mouth
                </option>
                <option style={{ color: "white" }} value="Instagram">
                  Instagram
                </option>
              </select>
            </div>
            {/* demo */}
            {/* <input
            type="text"
            className="w-full bg-transparent outline-none border-b-2 border-opacity-[20%] transition duration-[0.5s] text-white px-[10px] py-[2px] ease-in-out border-white focus:border-b-white"
          /> */}
            {/* ctn button */}
            <div className="w-full  flex justify-between">
              <button
                className="nova  text-[16px] font[900]text-white rounded-[39px] px-[57px] py-[16px] border-[#D01717] border2 text-white hover:bg-[#920808] flex justify-center items-center gap-[5px]"
                onClick={() => {
                  handleback(1);
                }}
              >
                <i className="bi bi-arrow-left"></i> Back
              </button>
              <button
                className="nova  text-[16px] font[900]text-white rounded-[39px] px-[57px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]"
                onClick={() => {
                  handleclick(3);
                }}
              >
                Submit <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Two;
