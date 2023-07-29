"use client";
import { useState } from "react";
import Header from "../component/navigation/header";
import Footer from "../component/fotter/footer";
import Top_works from "../component/works/top_works";
import Work_system from "../component/works/work_system";

export default function Contact() {
  return (
    <div className="w-full h-auto bg-[#1A1A1A] ">
      <Header />
      <Top_works />
      <Work_system />
      <Footer />
    </div>
  );
}
