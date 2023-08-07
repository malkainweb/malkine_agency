"use client";

import Image from "next/image";
import main from "../../../../public/works/main.webp";

const Top_works = () => {
  return (
    <>
      <div className="w-full h-auto p_r py-[100px]">
        <div className="w-full h-auto justify-center flex gap-[50px] relative">
          <div className="w-auto  nova ">
            <p className="inter text-[24px] text-white text-opacity-[50%]">
              Works
            </p>
            <h1 className="text-[40px] text-white">Our Works</h1>
          </div>
          <Image
            placeholder="blur"
            src={main}
            alt="our works logo"
            className="w-[50%] h-fit "
          />
        </div>
      </div>
    </>
  );
};
export default Top_works;
