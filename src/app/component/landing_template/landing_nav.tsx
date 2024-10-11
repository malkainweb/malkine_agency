import Image from "next/image";
import Link from "next/link";
import malkain_dark from "../../../../public/logo_black.webp";

const Landing_nav = () => {
  return (
    <>
      {" "}
      <div
        // href={"/"}
        style={{ transition: "1s ease" }}
        className={` fixed sm:top-[10vw] top-[2vw] translate-x-[-50%]  sm:flex left-[50%] z-[1000] sm:rounded-[2.5vw] sm:w-[15vw] w-[4.5vw] h-[4.5vw] sm:h-[15vw] sm:p-[1.5vw] p-[0.5vw] rounded-[0.6vw] bg-white bg-opacity-[19%] backdrop-blur-xl  justify-center items-center`}
      >
        <div className="w-full h-full rounded-[0.6vw] sm:rounded-[1.75vw] bg-white flex justify-center items-center ">
          <Image src={malkain_dark} alt="malkain" className="w-full  h-fit" />{" "}
        </div>
      </div>
    </>
  );
};
export default Landing_nav;
