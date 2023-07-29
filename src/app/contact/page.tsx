"use client";
import { useState } from "react";
import One from "../component/contact/one";
import Success from "../component/contact/success";
import Header from "../component/navigation/header";
import Footer from "../component/fotter/footer";

export default function Contact() {
  const [step, setstep] = useState(1);
  return (
    <div className="w-full h-auto bg-[#1A1A1A] ">
      <Header />
      <div className="w-full flex justify-center nova text-[50px] text-[#D9D9D9]  text-center">
        <p className="pt-[20px]">
          {step == 3 ? "Let's start a project <br /> together." : ""}
        </p>
      </div>
      {step == 1 ? <One /> : null}
      {step == 3 ? <Success /> : null}

      <Footer />
    </div>
  );
}
