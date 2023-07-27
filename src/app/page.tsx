"use client";

import Image from "next/image";
import Client_logo from "./component/home/client_logo";
import Footer from "./component/fotter/footer";
import Hands from "./component/home/hand";
import Home_hero from "./component/home/hero";
import { useState } from "react";

export default function Home() {
  const [general, setgeneral] = useState("");
  return (
    <div className="w-full h-auto bg-black ">
      {/* <Client_logo /> */}
      <Home_hero setgeneral={setgeneral} />
      <Hands general={general} />
      <Footer />
    </div>
  );
}
