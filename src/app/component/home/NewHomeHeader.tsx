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
} from "@/app/utils/fonts";
import Link from "next/link";
// import { scrollTo_calendy } from "../utils/scroll_to_calendy";
const NewHomeHeader = () => {
  return (
    <>
      {/* mobile design */}
      <div className=" sm:flex flex-col hidden w-full  relative  ">
        <div className="w-full flex absolute top-0 left-0  aspect-[1/1] overflow-hidden bg-white h-fit sm:rounded-t-[0vw]  ">
          <Image
            src={gif}
            alt="hero "
            className="w-full h-full z-[10] object-cover "
          />
          <Image
            src={img}
            alt="hero "
            className="w-full absolute top-0 left-0 h-full object-cover "
          />
        </div>

        <div className="aspect-[1/0.9] w-full"></div>

        <div className="relative z-[10] sm:rounded-[5vw]  overflow-hidden">
          <Image
            src={gif}
            alt="hero bottom"
            className=" sm:h-[81vw]  sm:w-[95vw] sm:rounded-t-[5vw]  sm:rounded-[5vw]  left-[50%] sm:translate-x-[-50%]      absolute bottom-0"
          />
          {/* the bottom */}
          <div
            className="
      items-center justify-center   py-[7vw]  left-[50%]  text-center overflow-hidden  sm:bottom-0 bg-white bg-opacity-[28%] backdrop-blur-3xl  flex sm:flex-col sm:gap-[6vw] "
          >
            <h2
              className={`sm:text-[9vw] ${CabinetGrotesk_extrabold.className} capitalize sm:leading-[10vw] text-white`}
            >
              We build custom <br /> software that <br /> converts
            </h2>

            {/* <p
              className={` ${CabinetGrotesk_medium.className}  text-white  sm:text-[3.75vw]`}
            >
              Create healing environments that marry <br /> functionality with
              aesthetic appeal, promoting <br /> patient well-being.
            </p> */}

            <Link
              href={"/contact"}
              className={`sm:w-[81vw] sm:h-[17vw] capitalize sm:rounded-t-[8vw] sm:rounded-b-[4.5vw] sm:text-[4.3vw] bg-white text-black flex justify-center items-center ${CabinetGrotesk_bold.className} `}
            >
              Get Started
            </Link>
          </div>
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
