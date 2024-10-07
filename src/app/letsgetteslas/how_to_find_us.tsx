"use client";

import { CabinetGrotesk_medium, NeueHaasDisplay_roman } from "../utils/fonts";

const How_to_find_us = () => {
  return (
    <>
      <div className="w-full h-auto  px-[3vw] flex sm:gap-[5vw] flex-col pb-[5vw] pt-[5vw] sm:py-[10vw]   justify-center gap-[1.5vw]">
        {/* the title */}
        <h2
          className={`${NeueHaasDisplay_roman.className} text-center sm:text-[7vw] text-[5vw]`}
        >
          Catch us in Downtown <br className="hidden sm:block" />
          New Brunswick
        </h2>
        {/* the map below */}
        <div className="w-full shadow-xl h-[33vw] sm:h-[100vw] sm:rounded-[5vw] overflow-hidden  rounded-[2vw]">
          <iframe
            className="rounded-[2vw] sm:rounded-[5vw]"
            src="https://www.google.com/maps/embed?pb=!4v1705199459044!6m8!1m7!1sYir5zneFrZQLUU4ju_xpdw!2m2!1d40.49316156346519!2d-74.44355389712912!3f94.0304781202761!4f-11.56553305704766!5f0.4000000000000002"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
          {/* <iframe src="" frameborder="0"></iframe> */}
        </div>
      </div>
    </>
  );
};

export default How_to_find_us;
