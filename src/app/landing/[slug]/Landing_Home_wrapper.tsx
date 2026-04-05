"use client";

import Footer from "@/app/component/fotter/footer";
import Footer_hand from "@/app/component/landing_template/footer_hand";
import Landing_nav from "@/app/component/landing_template/landing_nav";
import Processes from "@/app/component/landing_template/process";
import Service_hero from "@/app/letsgetteslas/hero";

import line from "../../../../public/new_service/line.png";
import mobile_line from "../../../../public/new_service/mobile.png";
import architect_one from "../../../../public/new_service/process_1.webp";
import architect_two from "../../../../public/new_service/process_2.webp";
import architect_three from "../../../../public/new_service/process_3.webp";
import Writing from "@/app/component/landing_template/writing";
import Past_work_template from "@/app/component/landing_template/past_work_template";
import New_service from "@/app/letsgetteslas/new_service";
import { useEffect, useState } from "react";
import Who_we_are from "@/app/letsgetteslas/who_we_are_mobile";
import How_to_find_us from "@/app/letsgetteslas/how_to_find_us";
import Mobile_Process from "@/app/letsgetteslas/mobile_process";
import { NeueHaasDisplay_roman } from "@/app/utils/fonts";
import Go_high_level_form from "@/app/letsgetteslas/contact_us_pop_up";
import { useSearchParams } from "next/navigation";
import Campaign_New_scroll_hand from "@/app/campaign/scroll_hand";
import Campaign_hero from "@/app/campaign/campaign_hero";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/app/utils/fire_base_config";
import { GoogleTrack } from "@/app/utils/gtm";
import Edit_text from "@/app/[slug]/edit_text";
import MalkainIsForYouIf from "@/app/campaign/MalkainIsForYouIf";
import Modal_text_edit from "@/app/[slug]/modal_text_edit";
import BrandCards from "./BrandCards";
import ServicesScroll from "./we_offer";
import TakeOff from "./TakeOff";
import LandingPageFooter from "./footer";
import Landing_past_work_template from "./landing_past_work_template";
import Landing_Hero_section from "./Hero_section";
import Landing_Hero_section_Second_hero from "./secondhero";

const Landing_Home_wrapper = ({ form_link, id }: any) => {
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
    // console.log("this is contactusclick");
    // window.dataLayer?.push({
    //   event: "ContactUsClick",
    // });
    // GoogleTrack("ContactUsClick", "appointment successfully submitted");

    if (search) {
      setsubmit(true);

      setgo_high_level_start_anime(true);

      console.log("tracking form submit");

      // Facebook Pixel
      window.fbq?.("track", "GoHighLevelFormSubmit", {
        value: "Go High Level form successfully submitted",
      });
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
          value: "Go High Level form successfully submitted",
        });

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

  const hero = searchParams.get("hero");
  return (
    <>
      <iframe src={form_link} className="h-0 w-0 absolute top-0 left-0" />
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
      <div className="sm:w-full sm:flex sm:justify-center sm:left-[50%]  z-[10000] sm:pb-[3vw]  right-[2vw] sm:translate-x-[-50%]  fixed bottom-[1vw] sm:bottom-[0]">
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
            Book a call
          </p>
        </button>
      </div>
      {/* this is because of what we are implementing on there tha'ts why i am changing this  */}
      <div className="h-[6vw] sm:h-[25vw] sm:hidden "></div>
      {/* <Service_hero show_btn={true} /> */}

      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      {/* DESKTOP SCREENS  */}
      <div className=" md:block sm:hidden">
        <Campaign_hero text={true} show_btn={true} form_link={form_link} />
        <Landing_past_work_template sethide_nav={sethide_nav} />
        <Campaign_New_scroll_hand />
        <MalkainIsForYouIf />
        <div className="sm:block hidden">
          <Who_we_are />
        </div>
        {/* <How_to_find_us /> */}
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
        {/* <Writing /> */}
        <Footer_hand
          form_link={form_link}
          show_btn={true}
          text_color={"#000000"}
        />
      </div>

      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}
      {/* MOBILE SCREENS */}

      <div className="sm:block bg-black md:hidden">
        {hero !== "true" ? (
          <Landing_Hero_section />
        ) : (
          <Landing_Hero_section_Second_hero />
        )}

        <BrandCards />
        <ServicesScroll />
        <TakeOff />
        {/* <LandingAbout /> */}

        <LandingPageFooter form_link={form_link} show_btn={true} />
      </div>
      {/* <Calendy text_color={"#000000"} /> */}
      {/* <Footer landing={true} btn_bg_color={"#D01717"} /> */}
    </>
  );
};

export default Landing_Home_wrapper;
