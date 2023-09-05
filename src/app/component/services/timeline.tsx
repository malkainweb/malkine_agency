"use client ";

import Image from "next/image";
import React from "react";
import timeline_top from "../../../../public/services/timeline_mak.png";
import timeline_mak from "../../../../public/services/timeline_top.png";

const Timeline = () => {
  return (
    <>
      <div className="py-[20px] w-full flex h-[60vw] sm:h-[105vw] justify-center ">
        <div className="w-full h-full  flex flex-col justify-center">
          <div className="h-[40%] w-full  overflow-hidden timeline_right">
            {/* <Image src={timeline_top} alt="makline img" className="w-full" /> */}
          </div>
          <div className="h-[60%]  w-full  flex flex-col text-white bg-black justify-around pl-[4.3vw] py-[2vw] sm:pl-[4vw] sm:justify-start sm:py-[4vw] sm:gap-[5vw]">
            <p className="text-[#808080] text-[2.5vw] nova sm:text-[3vw]">
              Elevate experiences and <br /> activate growth
            </p>
            <div className="h-[1px] w-full bg-[#808080] "></div>
            <div className="w-full flex flex-col gap-[2.5vw] sm:gap-[5vw] inter  text-[20px] font-[400] ">
              <p className=" text-[2.2vw] nova font-[400] sm:text-[5vw] ">
                What we do
              </p>
              <p className="text-[1.2vw] sm:text-[2vw] sm:font-[400] nova opacity-[90%]">
                From bold new ideas to innovative platforms <br /> and branding
                solutions, {"we’ve"} got you covered. <br /> Our team works
                closely with you to strategize <br />
                the next move and build custom solutions that <br /> unlock your
                full potential.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden timeline_top">
          {/* <Image src={timeline_mak} alt="makline img" className="w-full" /> */}
        </div>
      </div>
    </>
  );
};

export default Timeline;
