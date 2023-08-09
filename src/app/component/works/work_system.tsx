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
      <div className="w-full  p_r pt-[50px] pb-[400px]">
        <div className="w-full flex flex-col gap-[100px]">
          {/* heading */}
          <div className="w-full flex flex-col justify-center items-center gap-[20px] text-white">
            <h3 className="text-[40px]">Work System </h3>
            <div className="w-[50%] h-[0.5px] bg-white"></div>
          </div>

          {/* body */}
          <div className="w-full h-[13vw]  flex flex-wrap justify-center  items-center gap-[4vw]">
            {system.map((e: any, index: any) => {
              return (
                <div
                  className="w-[10vw] h-full justify-between    items-center flex flex-col "
                  key={index}
                >
                  <Image src={e.img} alt={e.txt} className="w-full h-fit " />
                  <p className="text-[20px] text-center uppercase text-white nova">
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
