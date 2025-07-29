import Image from "next/image";
import hero_uder from "@/../public/home/hero_bottom.webp";
import hero from "@/../public/home/hero.webp";
import hero_desktop from "@/../public/home/hero_desktop.webp";
import gif from "@/../public/campaign/hero/hero.gif";
import img from "@/../public/campaign/hero/hero.webp";
import {
  CabinetGrotesk_bold,
  CabinetGrotesk_extrabold,
  CabinetGrotesk_light,
  CabinetGrotesk_medium,
  NeueHaasDisplay_light,
  NeueHaasDisplay_medium,
} from "@/app/utils/fonts";
import Link from "next/link";
// import { scrollTo_calendy } from "../utils/scroll_to_calendy";
const NewHomeHeader = () => {
  return (
    <>
      {/* mobile design */}
      <div className=" p-[2%]    hidden  sm:flex flex-col mb-[5vw]    ">
        <div className="relative border-white/80 border-2  h-[32rem] rounded-[20px] overflow-hidden">
          <div className="w-full h-full relative flex">
            <Image
              src={gif}
              alt="hero"
              className="w-full h-full z-[10]  object-cover "
            />
            <Image
              src={img}
              alt="hero"
              className="w-full h-full absolute top-0 left-0 object-cover "
            />
          </div>{" "}
          <div className="absolute w-full  rounded-[20px] overflow-hidden bottom-0 left-0 z-[100] ">
            <Image
              src={img}
              alt="hero"
              className="w-full absolute h-full rounded-[20px]  top-0 left-0"
            />
            <div className="bg-gradient-to-b rounded-[20px] overflow-hidden bg-white  bg-opacity-[5%] backdrop-blur-[100px]  py-[1.7rem]  flex-col  p-[2%] flex  gap-[1.5rem] ">
              <h1
                className={`${NeueHaasDisplay_medium.className}   py-[0.4rem] capitalize text-center  text-white z-[10] text-[8vw] leading-[8.3vw] `}
              >
                We build custom <br /> software that <br />
                converts
              </h1>{" "}
              {/* <p
                className={`${NeueHaasDisplay_light.className} relative text-center text-[5vw] leading-[6vw] text-white`}
              >
                Let{"'"}s get you a website for your <br /> type of business.{" "}
              </p> */}
            </div>
          </div>{" "}
        </div>
      </div>

      {/* desktop design */}
      <div className="w-full bg-[black] h-[61vw] border-b border-white/20 mb-[5vw] relative hidden   ">
        <div className="w-[50%] h-full bg-[black] text-white flex justify-end py-[8vw] flex-col items-start px-[3vw] gap-[3vw] ">
          <h1
            className={`${CabinetGrotesk_extrabold.className}  text-[5.5vw] leading-[5.6vw]`}
          >
            Creating Secure <br /> Medical Software <br /> Solutions{" "}
          </h1>

          <p
            className={`${CabinetGrotesk_medium.className} leading-[2vw]  text-[1.7vw]`}
          >
            We create everything your practice needs from <br /> websites,
            patient portals, EHR{"'"}s and mobile apps to <br />
            empower and boost growth.{" "}
          </p>

          <div className="sm:hidden flex group ">
            <Link
              href={"/contact"}
              //   onClick={() => {
              //     scrollTo_calendy();
              //   }}
              className={` capitalize   hover:bg-opacity-[80%] w-[13.5vw] h-[4.4vw] rounded-[3vw] sm:rounded-[8.75vw] flex justify-center items-center text-[1.5vw] ${CabinetGrotesk_bold.className} bg-[#D01717] text-white`}
            >
              get started
            </Link>
          </div>
        </div>
        <div className="w-[50%] relative overflow-hidden h-full bg-[black] ">
          <Image
            src={hero_desktop}
            alt="hero desktop"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col px-[2.5vw] justify-center bottom-[8vw] left-[50%] translate-x-[-50%] w-[40.4vw] bg-white bg-opacity-[32%] backdrop-blur-2xl rounded-[1.8vw] h-[13.6vw]">
            <h3 className={`${CabinetGrotesk_bold.className} text-[2.7vw]`}>
              Focus on the future{" "}
            </h3>

            <p className={`${CabinetGrotesk_medium.className} text-[1.1vw]`}>
              Empower your practice with peace of mind - let our team of <br />
              seasoned software experts build and manage all IT inquiries so you{" "}
              <br />
              can channel your energy into delivering exceptional patient care
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHomeHeader;
