import { scrollTo_calendy } from "@/app/utils/scroll_to_calendy";
import Link from "next/link";

const Template_hero = () => {
  return (
    <>
      <div className="w-full py-[3vw] flex flex-col items-center sm:gap-[8vw] gap-[3.5vw]  text-center">
        <h1 className="font_helvetica text-white text-[5vw] sm:leading-[9vw] sm:text-[8vw] leading-[5.5vw]">
          Great Architects{" "}
          <span className="bg-gradient-to-r from-[#172392]  to-[#818BE8] inline-block text-transparent bg-clip-text">
            Design
          </span>{" "}
          <br className="hidden sm:block" />
          Great <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-[#172392]   to-[#818BE8] inline-block text-transparent bg-clip-text">
            Buildings
          </span>{" "}
          Not{" "}
          <span className="bg-gradient-to-r from-[#F82727] via-[#F82727]   to-[#DE3B23] inline-block text-transparent bg-clip-text">
            {" "}
            Great Websites
          </span>
        </h1>

        <p className="font_helvetica sm:text-[3.5vw] sm:leading-[4vw] text-[1.8vw] text-white leading-[2vw]">
          Let us create an online portfolio that reflects the amount{" "}
          <br className="hidden sm:block" /> of care and{" "}
          <br className="sm:hidden" />
          commitment you put into every building.{" "}
        </p>

        <button
          //   href={"contact"}
          onClick={() => {
            scrollTo_calendy();
          }}
          className="nova w-fit  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.3vw] py-[1.07vw] bg-[#D01717]  hover:bg-[#920808] sm:text-[3vw]   sm:rounded-[9.75vw] sm:px-[12vw]  sm:py-[4vw] font_helvetica  sm:text-white sm:mt-[2vw] "
        >
          Let{"'"}s Build! <i className="bi bi-arrow-right sm:hidden"></i>
        </button>
      </div>
    </>
  );
};

export default Template_hero;
