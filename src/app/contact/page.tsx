"use client";
import { useState } from "react";
import One from "../component/contact/one";
import Success from "../component/contact/success";
import Header from "../component/navigation/header";
import Footer from "../component/fotter/footer";
import Two from "../component/contact/two";

export default function Contact() {
  const [step, setstep] = useState(1);
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [business, setbusiness] = useState("");
  const [email, setemail] = useState("");
  const [prject_info, setprject_info] = useState("");
  const [interest, setinterest] = useState("");
  const [budget, setbudget] = useState("");
  const [hear_us, sethear_us] = useState("");
  return (
    <div className="w-full h-auto bg-[#1A1A1A] ">
      <Header />
      <div className="w-full flex justify-center nova text-[50px] text-[#D9D9D9]  text-center">
        {step == 3 ? (
          ""
        ) : (
          <p className="pt-[20px]">
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
  );
}
