"use client";

import { useState } from "react";
import img1 from "../../../../public/works/research.webp";
import img2 from "../../../../public/works/design.webp";
import img3 from "../../../../public/works/development.webp";
import img4 from "../../../../public/works/deploy.webp";
import Image from "next/image";

const Work_system = () => {
  const [system, setsystem] = useState([
    { img: img1, txt: "research" },
    { img: img2, txt: "design" },
    { img: img3, txt: "development" },
    { img: img4, txt: "deployment" },
  ]);
  return (
    <>
      <div className="w-full  p_r pt-[3.3vw] pb-[26.7vw] sm:pb-[13vw]">
        <div className="w-full flex flex-col gap-[6.7vw] sm:gap-[13vw]">
          {/* heading */}
          <div className="w-full flex flex-col justify-center items-center  gap-[1.3vw] text-white">
            <h3 className="text-[2.7vw] sm:text-[6vw]">Work System </h3>
            <div className="w-[50%] h-[0.03vw] sm:w-full sm:h-[0.25vw] bg-[#D9D9D9]"></div>
          </div>

          {/* body */}
          <div className="w-full h-[13vw] sm:h-auto sm:justify-center  sm:items-center   flex flex-wrap justify-center  items-center gap-[4vw] sm:gap-[8.5vw]">
            {system.map((e: any, index: any) => {
              return (
                <div
                  className="w-[10vw] sm:w-[25vw] sm:justify-center sm:gap-[5vw]   h-full justify-between   items-center flex flex-col "
                  key={index}
                >
                  <Image
                    priority
                    src={e.img}
                    alt={e.txt}
                    className="w-full sm:w-[70%] h-fit "
                  />
                  <p className="text-[1.3vw] sm:text-[3.25vw] text-center uppercase text-white nova">
                    {e.txt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Work_system;
