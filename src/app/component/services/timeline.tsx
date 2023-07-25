"use client ";

import Image from "next/image";
import React from "react";
import timeline_top from "../../../../public/services/timeline_mak.svg";
import timeline_mak from "../../../../public/services/timeline_top.svg";

const Timeline = () => {
  return (
    <>
      <div className="py-[20px] w-full flex h-[900px] justify-center ">
        <div className="w-full h-full  flex flex-col justify-center">
          <div className="h-[40%] w-full  overflow-hidden">
            <Image src={timeline_top} alt="makline img" className="w-full" />
          </div>
          <div className="h-[60%] w-full  flex flex-col text-white bg-black justify-around pl-[65px]">
            <p className="text-[#808080] text-[42px] nova">Timeline</p>
            <div className="h-[1px] w-full bg-white"></div>
            <div className="w-full flex flex-col gap-[45px] inter  text-[20px] font-[400]">
              <p className=" text-[33px] nova font-[400]">4 - 12 Weeks</p>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                elit. Voluptatum maxime aspernatur itaque <br /> ullam
                voluptatibus perferendis in dolore sunt quos? Dignissimos <br />{" "}
                quisquam asperiores eveniet consequatur dolores itaque <br />{" "}
                sapiente quasi, placeat corrupti! Dolor commodi <br /> doloribus
                aut, modi deserunt error <br />
                repellat ipsum iste.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden">
          <Image src={timeline_mak} alt="makline img" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Timeline;
