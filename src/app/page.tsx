"use client";

import Image from "next/image";
import Client_logo from "./component/home/client_logo";
import Footer from "./component/fotter/footer";
import Hands from "./component/home/hand";
import Home_hero from "./component/home/hero";
import { useEffect, useState } from "react";
import Home_Team from "./component/home/team";
import Before_client_logo from "./component/home/before_client_logo";
import Home_about from "./component/home/home_about";
import Home_about_us from "./component/home/about_us";
import Header from "./component/navigation/header";
import Aim from "./component/home/our_aim";
import Home_mission from "./component/home/home_mission";
import Home_gallery from "./component/home/home_gallery";
import Home_portfolio from "./component/home/home_portfolio";
import Highlight from "./component/home/highlight";
import Review from "./component/home/review";
import Preloader from "./component/preloader";

export default function Home() {
  const [loader, setloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloader(false);
      document.body.classList.remove("hide_now");
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loader ? <Preloader /> : null}
      <div className="w-full h-auto bg-black ">
        {/* <Client_logo /> */}
        <Header />
        <Home_hero setloader={setloader} />
        <Highlight />
        <Home_Team />
        <Home_about />
        <Before_client_logo />
        <Hands />
        <Home_about_us />
        <Home_portfolio />
        <Aim />
        <Home_mission />
        <Home_gallery />
        <Review />
        <Footer />
      </div>
    </>
  );
}
