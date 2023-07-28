"use client";

import { useInView } from "framer-motion";
import ReactPlayer from "react-player";
import React, { useState, useEffect, useRef } from "react";
import Header from "../navigation/header";

const Home_hero = (props: any) => {
  const { setgeneral } = props;
  const [top, settop] = useState("120px");
  const [bottom, setbottom] = useState("");
  const [display, setdisplay] = useState<any>("absolute ");
  const [time, settime] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setgeneral(position);
    // position >= 500
  };

  useEffect(() => {
    // console.log(scrollPosition);
    const check = scrollPosition / 100;
    const newtime = scrollPosition / 150;
    if (scrollPosition >= 100) {
      setdisplay("absolute");
    }
    if (time >= 7) {
      setdisplay("fixed");
      // settop(scrollPosition / 6 + "px");
    }
    // if (scrollPosition <= 500) {
    //   settop("80px");
    //   setdisplay("fixed");
    // }

    if (time >= 10) {
      settop(top);
    }
    if (scrollPosition >= 2300) {
      setdisplay("absolute");
      setbottom("200px");
      settop("");
    }

    if (scrollPosition <= 2300) {
      setdisplay("fixed");
      settop("120px");
    }

    // if (time >= 16) {
    //   setdisplay("absolute");
    //   setbottom("100px");
    //   settop("");
    // }
    if (newtime < 16) {
      settime(newtime);
    }
  }, [scrollPosition]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   use in view
  const ref = useRef(null);
  const inview = useInView(ref);

  //   useEffect(() => {
  //     if (inview) {
  //       settop("0");
  //     }
  //   }, [inview]);

  const seek = () => {};

  const playerRef = useRef();

  //   const handleSeekMouseUp = () => {
  //     if (playerRef.current) {
  //       setCurrTime(playerRef.current.getCurrentTime());
  //       setAddComment(true);
  //     }
  //   };
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-[2800px] relative  flex justify-center  ">
          <div
            className=" w-[80%]    h-[400px]"
            style={{ top: top, bottom: bottom, position: display }}
          >
            <div className="w-full h-full relative  pt-[30.25%]   ">
              <ReactPlayer
                controls={false}
                url="home/laptop.MP4"
                width="100%"
                height="100%"
                onReady={(player) => {
                  player.seekTo(time, "seconds");
                }}
                ref={ref}
                playing={true}
                style={{ position: "absolute", top: "0", left: "0" }}
              />

              {/* <video
                src="home/laptop.MP4"
                className="border2 w-full h-full"
              ></video> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_hero;
