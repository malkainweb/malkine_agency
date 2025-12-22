"use client";

import Footer from "../../component/fotter/footer";
import Footer_hand from "../../component/landing_template/footer_hand";
import Landing_nav from "../../component/landing_template/landing_nav";
import Processes from "../../component/landing_template/process";
// import Service_hero from "../letsgetteslas/hero";
import { sendGTMEvent } from "@next/third-parties/google";

import line from "@/../public/new_service/line.png";
import mobile_line from "@/../public/new_service/mobile.png";
import architect_one from "@/../public/new_service/process_1.webp";
import architect_two from "@/../public/new_service/process_2.webp";
import architect_three from "@/../public/new_service/process_3.webp";
import Writing from "../../component/landing_template/writing";
import Past_work_template from "../../component/landing_template/past_work_template";
import New_service from "../../letsgetteslas/new_service";
import { useEffect, useState } from "react";
import Who_we_are from "../../letsgetteslas/who_we_are_mobile";
import How_to_find_us from "../../letsgetteslas/how_to_find_us";
import Mobile_Process from "../../letsgetteslas/mobile_process";
import { NeueHaasDisplay_roman } from "../../utils/fonts";
import Go_high_level_form from "../../letsgetteslas/contact_us_pop_up";
import { useSearchParams } from "next/navigation";
import Campaign_New_scroll_hand from "../../campaign/scroll_hand";
import Campaign_hero from "../../campaign/campaign_hero";
// import Modal_text_edit from "../modal_text_edit";
// import Edit_text from "./edit_text";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../utils/fire_base_config";
import MalkainIsForYouIf from "../../campaign/MalkainIsForYouIf";
import Modal_text_edit from "@/app/[slug]/modal_text_edit";
import Edit_text from "@/app/[slug]/edit_text";
import { GoogleTrack } from "@/app/utils/gtm";

const GoggleHomeHero = ({ form_link, id }: any) => {
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
  const [checkbookcall, setcheckbookcall] = useState(false);
  const [checkbooking, setcheckbooking] = useState(false);
  const [checkappointment, setcheckappointment] = useState(false);

  const searchParams = useSearchParams();

  const search = searchParams.get("success");
  const bookcall = searchParams.get("bookcall");
  const booking = searchParams.get("booking");
  const appointment = searchParams.get("appointment");

  useEffect(() => {
    if (booking) {
      setcheckbooking(true);
      setgo_high_level_start_anime(true);
      // console.log("tracking booking");
      return; // Exit early if booking is true
    }
    if (appointment) {
      setcheckappointment(true);
      setsubmit(true);
      setgo_high_level_start_anime(true);
      // Facebook Pixel
      window.fbq?.("track", "Book appointment", {
        value: "appointment successfully submitted",
      });
      GoogleTrack("Book appointment", "appointment successfully submitted");

      // Google Analytics
      // window.gtag?.("event", "Book appointment", {
      //   event_category: "Lead Generation",
      //   event_label: "Go High Level form successfully submitted",
      // });
      // console.log("tracking booking");
      return; // Exit early if booking is true
    }
    if (bookcall) {
      setcheckbookcall(true);
      setsubmit(true);
      setgo_high_level_start_anime(true);

      // console.log("tracking booking");
      return; // Exit early if booking is true
    }

    // setcheckbookcall(!!bookcall); // ✅ Short way to set true/false based on bookcall

    if (search) {
      setsubmit(true);
      setgo_high_level_start_anime(true);

      console.log("tracking form submit");

      // Facebook Pixel
      window.fbq?.("track", "GoHighLevelFormSubmit", {
        value: "Go High Level form successfully submitted",
      });
      GoogleTrack(
        "GoHighLevelFormSubmit",
        "Go High Level form successfully submitted"
      );

      // Google Analytics
      // window.gtag?.("event", "GoHighLevelFormSubmit", {
      //   event_category: "Lead Generation",
      //   event_label: "Go High Level form successfully submitted",
      // });
    } else {
      setgo_high_level_start_anime(false);
      setsubmit(false);
      console.log("still playing out");
    }
  }, [booking, bookcall, search]);

  const [edit_text, setedit_text] = useState(false);
  const [edit_img, setedit_img] = useState(false);
  const [record_Name, setrecord_Name] = useState("");
  const [record_id, setrecord_id] = useState("");
  const [btn_text, setbtn_text] = useState("");
  const [isloggedin, setisloggedin] = useState(false);

  // get the products now

  // Initialize the data base connection
  initializeApp(firebaseConfig);
  const auth = getAuth();
  // Use useEffect to check if the user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setisloggedin(true);
        // Replace with your protected route
      } else {
        // console.log("logged out");
        setisloggedin(false);
      }
    });

    // Clean up the listener when the component unmounts and go
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-[black] sm:bg-[white]">
      {" "}
      {edit_text && (
        <Modal_text_edit
          edit_text={edit_text}
          record_Name={"form_link"}
          setedit_text={setedit_text}
          table={"pages"}
          record_id={record_id}
        />
      )}
      {hide_nav && <Landing_nav />}
      {go_high_level_start_anime && (
        <Go_high_level_form
          submit={submit}
          checkbooking={checkbooking}
          checkbookcall={checkbookcall}
          checkappointment={checkappointment}
          form_link={form_link}
          // sethide_nav={sethide_nav}
          setsubmit={setsubmit}
          // nav_items={nav_items}
          setgo_high_level_start_anime={setgo_high_level_start_anime}
        />
      )}
      <div className="sm:w-full w-fit flex  justify-center left-[50%]  z-[10000] sm:pb-[3vw] translate-x-[-50%]  fixed bottom-[1vw] sm:bottom-[0]">
        {isloggedin && (
          <Edit_text
            // record={"form_link"}
            setedit_text={setedit_text}
            setrecord_Name={setrecord_Name}
            setrecord_id={setrecord_id}
            id={id} // text={active_user_data[0].text_1}
            text={form_link}
          />
        )}{" "}
        <div className=" hidden h-full blur-[25px] sm:block  w-full bg-black  absolute bottom-0 left-0  "></div>
        <button
          onClick={() => {
            setgo_high_level_start_anime(true);
            window.fbq("track", "ContactUsClick", {
              value: "Customer clicked on Contact Us button", // Optional, to track a specific value
            });

            GoogleTrack(
              "ContactUsClick",
              "Customer clicked on Contact Us button"
            );
            // window.gtag("event", "ContactUsClick", {
            //   event_category: "Lead Generation",
            //   event_label: "Customer clicked on Contact Us button",
            // });
          }}
          className={`${NeueHaasDisplay_roman.className} league sm:w-[85vw] z-[10]  shadow-sm w-[30vw] h-[5.6vw] sm:h-[13vw] text-[1.2vw] sm:text-[5vw] hover:bg-[#920808] bg-[#D01717] text-white  rounded-full sm:rounded-[9.75vw]`}
        >
          <p className="w-full h-full flex justify-center items-center ">
            {" "}
            Book a call
          </p>
        </button>
      </div>
      <div className="h-[6vw] sm:h-[25vw] sm:hidden "></div>
      <Campaign_hero goggle={true} show_btn={true} form_link={form_link} />
      <div className="sm:hidden ">
        <Campaign_New_scroll_hand goggle={true} />
      </div>
      <Past_work_template goggle={true} sethide_nav={sethide_nav} />
      <div className="hidden sm:block">
        <Campaign_New_scroll_hand goggle={true} />
      </div>
      <MalkainIsForYouIf goggle={true} />
      <div className="sm:block hidden">
        <Who_we_are />
      </div>
      <New_service goggle={true} />
      <div className="sm:block hidden">
        <Mobile_Process />
      </div>
      <div className="sm:hidden block">
        <Processes
          goggle={true}
          process={process}
          text_color={"#000000"}
          straight_line_image={line}
          mobile_straight_line_image={mobile_line}
        />
      </div>
      <Footer_hand
        goggle={true}
        form_link={form_link}
        show_btn={true}
        text_color={"#000000"}
      />
    </div>
  );
};

export default GoggleHomeHero;
