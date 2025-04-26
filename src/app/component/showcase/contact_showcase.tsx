"use client";

import React, { useState } from "react";
import axios from "axios";
import { League_Spartan } from "next/font/google";
const league = League_Spartan({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Contact_showcase = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [business, setbusiness] = useState("");
  const [email, setemail] = useState("");
  const [prject_info, setprject_info] = useState("");
  const [interest, setinterest] = useState("");
  const [budget, setbudget] = useState("");
  const [hear_us, sethear_us] = useState("");
  const [err, seterr] = useState("");
  const [sending, setsending] = useState(false);

  // const handle_submit = () => {
  //   if (
  //     !prject_info ||
  //     !email ||
  //     !business ||
  //     !name ||
  //     !budget ||
  //     !hear_us ||
  //     !interest
  //   ) {
  //     seterr("Kindly provide your information below.");
  //     // 👇️ scroll to top on page load
  //     return;
  //   } else {
  //     seterr("");
  //     setsending(true);

  //     //    setdisabled(!disabled);
  //     window.gtag("event", "form_submission", {
  //       event_category: "Contact Form",
  //       event_label: "Submit",
  //     });

  //     window.fbq("trackCustom", "submit form");
  //     let data = JSON.stringify({
  //       name: name,
  //       phone: phone,
  //       email: email,
  //       business: business,
  //       project_info: prject_info,
  //       interest: interest,
  //       budget: budget,
  //       hear_us: hear_us,
  //     });
  //     axios
  //       .post("/api/contact_showcase", data, {
  //         headers: { "Content-Type": "application/json" },
  //       })
  //       .then((response) => {
  //         if (response.data.emailSent == true) {
  //           // console.log(response.data.emailSent);
  //           // setsendbtn("Submit");
  //           setsending(false);
  //           seterr(
  //             "Thank you for reaching out. Your email has been received and will be reviewed promptly",
  //           );
  //           setname("");
  //           setemail("");
  //           setbusiness("");
  //           setphone("");
  //           setprject_info("");
  //           setinterest("");
  //           setbudget("");
  //           sethear_us("");
  //           // setstep(3);
  //         } else {
  //           seterr("Something went wrong. Please try again or reload the page");
  //           console.log("something went wrong");
  //           // setdisabled(!disabled);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setsending(false);
  //         seterr(
  //           "Something went wrong. Please try again or reload the page and try again",
  //         );
  //         //   setdisabled(!disabled);
  //       });
  //   }
  // };
  return (
    <>
      <div
        className={`fixed left-0 top-0 w-[30vw] min-h-[100vh]  bg-[#101519] z-[10] px-[3vw] pt-[6vw]  text-[#E8E7D7] sm:hidden ${league.className} font-[700] flex justify-center flex-col`}
      >
        <h1 className="league font-[700] text-[2.3vw] mb-[2vw] text-[#E8E7D7]">
          Contact Us
        </h1>
        <p
          className="league text-[0.8vw]  w-full"
          style={{
            color:
              err ==
              "Thank you for reaching out. Your email has been received and will be reviewed promptly"
                ? "green"
                : "red",
          }}
        >
          {err}
        </p>
        <div className="w-full h-auto flex flex-col gap-[2.5vh]">
          <input
            onChange={(e) => {
              seterr("");
              setname(e.target.value);
            }}
            value={name}
            placeholder="Name"
            type="text"
            className="w-full capitalize bg-transparent outline-none border-b-2 transition duration-[0.5s] text-opacity-[100%]   py-[0.4vw]   ease-in-out border-[#D01717] text-[1.6vw] placeholder-[#E8E7D7] focus:border-b-white text-[#E8E7D7] "
          />
          <input
            onChange={(e) => {
              seterr("");
              setemail(e.target.value);
            }}
            value={email}
            placeholder="Email"
            type="text"
            className="w-full capitalize bg-transparent outline-none border-b-2 transition duration-[0.5s]   py-[0.4vw]   ease-in-out border-[#D01717] text-[1.6vw] placeholder-[#E8E7D7] focus:border-b-white text-[#E8E7D7] league"
          />
          <input
            onChange={(e) => {
              seterr("");
              setbusiness(e.target.value);
            }}
            value={business}
            placeholder="Company Name"
            type="text"
            className="w-full capitalize bg-transparent outline-none border-b-2 transition duration-[0.5s]   py-[0.4vw]   ease-in-out border-[#D01717] text-[1.6vw] placeholder-[#E8E7D7] focus:border-b-white text-[#E8E7D7] league"
          />
          <input
            onChange={(e) => {
              seterr("");
              setprject_info(e.target.value);
            }}
            value={prject_info}
            placeholder="Tell Us About the Project"
            type="text"
            className="w-full capitalize bg-transparent outline-none border-b-2 transition duration-[0.5s]   py-[0.4vw]   ease-in-out border-[#D01717] text-[1.6vw] placeholder-[#E8E7D7] focus:border-b-white text-[#E8E7D7] league"
          />

          <div className="flex flex-col">
            <select
              name=""
              id=""
              onChange={(e) => {
                seterr("");
                setinterest(e.target.value);
              }}
              value={interest}
              className=" w-full bg-[#101519] outline-none border-b-2 transition duration-[0.5s]  py-[0.4vw]  sm:py-[2vw] sm:h-full ease-in-out border-[#D01717] focus:border-b-white text-[#E8E7D7]  text-[1.6vw] placeholder-[#E8E7D7] league"
            >
              <option style={{}} value="" disabled selected hidden>
                Service
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
              <option style={{ color: "white" }} value="Custom API Development">
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

          <div className="flex flex-col relative">
            <span className="text-[1.6vw] absolute right-0 right-0 h-full flex justify-center items-center w-fit">
              $
            </span>
            <input
              name=""
              id=""
              placeholder={"What's your budget ? "}
              className="   w-full bg-[#101519]  outline-none border-b-2 transition duration-[0.5s]  pr-[0.7vw] py-[0.4vw]  ease-in-out border-[#D01717] focus:border-b-white text-[#E8E7D7]  text-[1.6vw] placeholder-[#E8E7D7] league sm:py-[2vw] sm:h-full"
              onChange={(e) => {
                seterr("");
                const inputValue = e.target.value;

                // Remove existing commas and non-numeric characters
                const numericValue = inputValue.replace(/[^0-9]/g, "");

                // Add commas after every 3 digits
                const formatted = numericValue.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                );

                // Add .00 to the end
                setbudget(formatted);
              }}
              value={budget}
            ></input>
          </div>

          <div className="flex flex-col">
            <select
              name=""
              id=""
              className=" w-full bg-[#101519]  outline-none border-b-2 transition duration-[0.5s]   py-[0.13vw] ease-in-out border-[#D01717] focus:border-b-white text-[#E8E7D7]  sm:py-[2vw] sm:h-full text-[1.6vw] placeholder-[#E8E7D7] league"
              onChange={(e) => {
                seterr("");
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
          {/* call to action button  */}

          <div className="w-full h-auto  flex justify-end gap-[1vw] items-center">
            <button
              className="bg-[#D01717] text-[1.3vw] h-[3vw] w-full hover:bg-[#920808] transition duration-[0.5s] league mt-[0.5vw] flex justify-center items-center"
              type="submit"
              // onClick={handle_submit}
            >
              {" "}
              {sending ? (
                <div className="rounded-[100%] h-[2vw] w-[2vw]  border-solid  border-t-[0.4vw] border-[white] animate-spin"></div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Contact_showcase;
