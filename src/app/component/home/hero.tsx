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
    const newtime = scrollPosition / 100;
    if (scrollPosition >= 50) {
      setdisplay("absolute");
    }
    if (time >= 3) {
      setdisplay("fixed");
      // settop(scrollPosition / 6 + "px");
    }
    // if (scrollPosition <= 500) {
    //   settop("80px");
    //   setdisplay("fixed");
    // }

    if (time >= 7) {
      settop(top);
      // settime(7);
    }

    // if (time <= 8) {
    //   settime(newtime);
    // }
    if (scrollPosition >= 2800) {
      setdisplay("absolute");
      setbottom("200px");
      settop("");
    }

    if (scrollPosition <= 2800) {
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
      {/* <div className="w-full h-auto"> */}
      {/* <div className="w-full h-[3000px] relative  flex justify-center  "> */}
      {/* <div
            className=" "
            style={{ top: top, bottom: bottom, position: display }}
          > */}
      <video
        src="home/laptop.webm"
        id="vid"
        className="w-full "
        preload={"auto"}
        controls
        loop
        onLoadStart={() => {
          console.log("onLoadStart", new Date());
        }}
        onLoad={() => {
          console.log("onLoad", new Date());
        }}
      ></video>
      {/* <div className="w-full h-full relative border2 pl-[70%] pt-[30.25%]   "> */}
      {/* <ReactPlayer
                controls={false}
                className="border2"
                url="home/laptop.webm"
                width="100%"
                height="100%"
                onReady={(player) => {
                  player.seekTo(time, "seconds");
                }}
                ref={ref}
                // playing={false}
                style={{ position: "absolute", top: "0", left: "0" }}
              /> */}

      {/* <video
                src="home/laptop.MP4"
                className="border2 w-full h-full"
              ></video> */}
      {/* </div> */}
      {/* </div>/
        </div>
      </div> */}
    </>
  );
};

export default Home_hero;
