"use client";

import Footer from "../component/fotter/footer";
import Footer_hand from "../component/landing_template/footer_hand";
import Landing_nav from "../component/landing_template/landing_nav";
import Processes from "../component/landing_template/process";
import Service_hero from "../letsgetteslas/hero";

import line from "../../../public/new_service/line.png";
import mobile_line from "../../../public/new_service/mobile.png";
import architect_one from "../../../public/new_service/process_1.webp";
import architect_two from "../../../public/new_service/process_2.webp";
import architect_three from "../../../public/new_service/process_3.webp";
import Writing from "../component/landing_template/writing";
import Past_work_template from "../component/landing_template/past_work_template";
import New_service from "../letsgetteslas/new_service";
import { useEffect, useState } from "react";
import Who_we_are from "../letsgetteslas/who_we_are_mobile";
import How_to_find_us from "../letsgetteslas/how_to_find_us";
import Mobile_Process from "../letsgetteslas/mobile_process";
import { NeueHaasDisplay_roman } from "../utils/fonts";
import Go_high_level_form from "../letsgetteslas/contact_us_pop_up";
import { useSearchParams } from "next/navigation";
import Campaign_New_scroll_hand from "./scroll_hand";
import Campaign_hero from "./campaign_hero";
import MalkainIsForYouIf from "./MalkainIsForYouIf";
import Webuild from "./WeBuild";

const Campaign_Home_wrapper = () => {
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
  const [go_high_level_start_anime, setgo_high_level_start_anime] =
    useState(false);

  const [submit, setsubmit] = useState(false);

  const searchParams = useSearchParams();

  const search = searchParams.get("success");

  useEffect(() => {
    if (search) {
      setsubmit(true);
      // console.log("tracking");
      setgo_high_level_start_anime(true);
      window.fbq("track", "GoHighLevelFormSubmit", {
        value: "Go High Level form successfully submitted", // Optional, to track lead value
      });
      // window.gtag("event", "GoHighLevelFormSubmit", {
      //   event_category: "Lead Generation",
      //   event_label: "Go High Level form successfully submitted",
      // });
    } else {
      setgo_high_level_start_anime(false);
      setsubmit(false);
    }
  }, [search]);
  return (
    <>
      {" "}
      {hide_nav && <Landing_nav />}
      {go_high_level_start_anime && (
        <Go_high_level_form
          submit={submit}
          // sethide_nav={sethide_nav}
          setsubmit={setsubmit}
          // nav_items={nav_items}
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
      <div className="sm:w-full sm:flex sm:justify-center sm:left-[50%]  z-[1000000] sm:pb-[3vw]  right-[2vw] sm:translate-x-[-50%]  fixed bottom-[1vw] sm:bottom-[0]">
        <div className=" hidden h-full blur-[25px] sm:block border2 w-full bg-black  absolute bottom-0 left-0  "></div>
        <button
          onClick={() => {
            setgo_high_level_start_anime(true);
            window.fbq("track", "ContactUsClick", {
              value: "Customer clicked on Contact Us button", // Optional, to track a specific value
            });
            // window.gtag("event", "ContactUsClick", {
            //   event_category: "Lead Generation",
            //   event_label: "Customer clicked on Contact Us button",
            // });
          }}
          className={`${NeueHaasDisplay_roman.className} league sm:w-[85vw] z-[10] border2 shadow-sm w-[12vw] h-[2.8vw] sm:h-[13vw] text-[1.2vw] sm:text-[5vw] hover:bg-[#920808] bg-[#D01717] text-white  rounded-[1.5vw] sm:rounded-[9.75vw]`}
        >
          <p className="w-full h-full flex justify-center items-center ">
            {" "}
            Contact Us
          </p>
        </button>
      </div>
      <div className="h-[6vw] sm:h-[25vw] sm:hidden "></div>
      {/* <Service_hero show_btn={true} /> */}
      <Campaign_hero show_btn={true} />
      <Campaign_New_scroll_hand />
      <MalkainIsForYouIf />
      {/* <Brands /> */}
      <Past_work_template sethide_nav={sethide_nav} />
      <div className="sm:block hidden">
        <Who_we_are />
      </div>
      {/* <How_to_find_us /> */}
      <New_service />
      {/* <Webuild /> */}
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
      {/* <Writing /> */}
      <Footer_hand show_btn={true} text_color={"#000000"} />
      {/* <Calendy text_color={"#000000"} /> */}
      {/* <Footer landing={true} btn_bg_color={"#D01717"} /> */}
    </>
  );
};

export default Campaign_Home_wrapper;
