"use client";
import { useState, useEffect } from "react";
import One from "../component/contact/one";
import Success from "../component/contact/success";
import Home_Header from "../component/navigation/home_header";
import Footer from "../component/fotter/footer";
import Two from "../component/contact/two";
import Menu from "../component/menu";

export default function Contact() {
  const width = globalThis.innerWidth;

  const [step, setstep] = useState(1);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [business, setbusiness] = useState("");
  const [email, setemail] = useState("");
  const [prject_info, setprject_info] = useState("");
  const [interest, setinterest] = useState("");
  const [budget, setbudget] = useState("");
  const [hear_us, sethear_us] = useState("");
  const [opacity, setopacity] = useState(0.2);
  const [white, setwhite] = useState(1);
  const [nav_menu, setnav_menu] = useState(1);
  const [nav_ham, setnav_ham] = useState(1);

  // this is for the menu
  const [left, setleft] = useState("200vh");
  const [right, setright] = useState(width <= 650 ? "200vh" : "-200vh");
  const [height, setheight] = useState("0px");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle_submit = () => {
    window.gtag("event", "form_submission", {
      event_category: "Contact Form",
      event_label: "Submit",
    });
  };

  return (
    <>
      <Menu
        setleft={setleft}
        left={left}
        height={height}
        setheight={setheight}
        setright={setright}
        right={right}
        opacity={opacity}
        setopacity={setopacity}
      />
      <div className="w-full h-auto  bg-[#1A1A1A] ">
        <Home_Header
          setright={setright}
          setleft={setleft}
          setopacity={setopacity}
          white={white}
          nav_ham={nav_ham}
          nav_menu={nav_menu}
        />
        <div className="w-full  pt-[10vw] sm:pt-[25vw] flex justify-center nova text-[3.33vw] text-[#D9D9D9]  text-center">
          {step == 3 ? (
            ""
          ) : (
            <p className="pt-[1.33vw] sm:text-[8vw]">
              {" "}
              Let{"'"}s start a project <br /> together.{" "}
            </p>
          )}
        </div>
        {step == 1 ? (
          <One
            name={name}
            setname={setname}
            phone={phone}
            setphone={setphone}
            business={business}
            setbusiness={setbusiness}
            email={email}
            setemail={setemail}
            prject_info={prject_info}
            setprject_info={setprject_info}
            setstep={setstep}
          />
        ) : null}
        {step == 2 ? (
          <Two
            interest={interest}
            setinterest={setinterest}
            budget={budget}
            setbudget={setbudget}
            hear_us={hear_us}
            sethear_us={sethear_us}
            setstep={setstep}
            handle_submit={handle_submit}
          />
        ) : null}
        {step == 3 ? <Success /> : null}

        <Footer />
      </div>
    </>
  );
}
