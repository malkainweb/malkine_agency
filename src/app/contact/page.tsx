"use client";
import { useState } from "react";
import One from "../component/contact/one";
import Success from "../component/contact/success";
import Home_Header from "../component/navigation/home_header";
import Footer from "../component/fotter/footer";
import Two from "../component/contact/two";
import Menu from "../component/menu";

export default function Contact() {
  const [step, setstep] = useState(3);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [business, setbusiness] = useState("");
  const [email, setemail] = useState("");
  const [prject_info, setprject_info] = useState("");
  const [interest, setinterest] = useState("");
  const [budget, setbudget] = useState("");
  const [hear_us, sethear_us] = useState("");
  const [opacity, setopacity] = useState(0.2);

  // this is for the menu
  const [left, setleft] = useState("1200vh");
  const [right, setright] = useState("-1200vh");
  const [height, setheight] = useState("0px");
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
          />
        ) : null}
        {step == 3 ? <Success /> : null}

        <Footer />
      </div>
    </>
  );
}
