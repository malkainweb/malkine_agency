"use client";

import Image from "next/image";
import Client_logo from "./component/home/client_logo";
import Footer from "./component/fotter/footer";
import Hands from "./component/home/hand";
import Home_hero from "./component/home/hero";
import { useState } from "react";
import Home_Team from "./component/home/team";
import Before_client_logo from "./component/home/before_client_logo";
import Home_about from "./component/home/home_about";
import Home_about_us from "./component/home/about_us";
import Header from "./component/navigation/header";

export default function Home() {
  const [general, setgeneral] = useState("");
  return (
    <div className="w-full h-auto bg-black ">
      {/* <Client_logo /> */}
      <Header />
      <Home_hero setgeneral={setgeneral} />
      <Home_Team />
      <Home_about />
      <Before_client_logo />
      <Hands general={general} />
      <Home_about_us />
      <Footer />
    </div>
  );
}
