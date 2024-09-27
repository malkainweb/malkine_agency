"use client";

import Footer from "../component/fotter/footer";
import Footer_hand from "../component/landing_template/footer_hand";
import Landing_nav from "../component/landing_template/landing_nav";
import Processes from "../component/landing_template/process";

import line from "../../../public/new_service/line.png";
import mobile_line from "../../../public/new_service/mobile.png";
import architect_one from "../../../public/new_service/process_1.webp";
import architect_two from "../../../public/new_service/process_2.webp";
import architect_three from "../../../public/new_service/process_3.webp";
import Writing from "../component/landing_template/writing";
import Calendy from "../component/calendy";
import Past_work_template from "../component/landing_template/past_work_template";
import { useState } from "react";
import Service_hero from "../letsgetteslas/hero";
import New_scroll_hand from "../letsgetteslas/scroll_hand";
import New_service from "../letsgetteslas/new_service";
import Mobile_Process from "../letsgetteslas/mobile_process";

export default function Home_wrapper() {
  const process = [
    {
      step_text: "STEP 01: GET STARTED",
      heading: "Onboarding",
      top: "1vw",
      body: "After conducting a compressive assessment to understand project requirement, a tailored on-boarding plan would be created to obtain relevant information poignant to the successful completion of the project.",
      img: architect_one,
      //   reverse: true,
    },
    {
      step_text: "STEP 02: DESIGN",
      heading: "Designing",
      top: "2vw",

      body: "Here we'll design wireframes, lo-fi and hi-fi user interface emphasizing intuitive navigation and compliance with industry regulations. Collaborating closely with all stakeholders involved, ensures that the final UI design prioritizes usability, accessibility, and a seamless user experience.",
      img: architect_two,
      reverse: true,
    },
    {
      step_text: "STEP 03: PROTOTYPING",
      heading: "Prototyping",
      top: "1vw",

      body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
      center: true,
    },
    {
      step_text: "STEP 04: DEVELOPMENT",
      heading: "Developing",
      top: "vw",

      body: "While implementing modular and scalable development stacks, we collaborate to build out backend functionality of the desired outcome and implement front end engineering design structures while maintaining agile development methodology and prioritizing platform security.",
      img: architect_three,
      //   reverse: true,
    },
    {
      step_text: "STEP 05: LONG TERM",
      heading: "Maintenance",

      body: "Gradually we'll evolve wireframes into interactive, high-fidelity prototypes, to achieve an appropriate user journey as customers navigate across the platform.",
      //   img: four,
      center: true,
    },
  ];

  const [hide_nav, sethide_nav] = useState(false);
  return (
    <>
      {" "}
      {hide_nav && <Landing_nav />}
      <div className="h-[6vw] sm:h-[25vw] "></div>
      <Service_hero show_btn={false} />
      <New_scroll_hand />
      <Past_work_template hide_btn={true} sethide_nav={sethide_nav} />
      <Writing show_btn={false} />
      {/* <Calendy text_color={"#000000"} /> */}
      <New_service />
      <div className="sm:block hidden">
        <Mobile_Process />
      </div>
      <div className="sm:hidden block">
        <Processes
          process={process}
          text_color={"#000000"}
          straight_line_image={line}
          mobile_straight_line_image={mobile_line}
        />
      </div>
      <Footer_hand show_btn={false} text_color={"#000000"} />
      {/* <Footer landing={true} btn_bg_color={"#D01717"} /> */}
    </>
  );
}
