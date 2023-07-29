"use client";

import Image from "next/image";
import success from "../../../../public/contact/success.webp";
const Success = () => {
  return (
    <>
      <div className="w-full flex h-auto flex-col py-[100px] justify-center items-center gap-[20px]">
        <Image src={success} alt="sucees image" className="w-[100px] h-fit" />
        <p className="text-[40px] nova text-white text-center">
          Thank you! Your submission has <br /> been recieved
        </p>
        <button className="nova  text-[16px] font[900]text-white rounded-[39px] px-[57px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
          Back to homepage <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Success;
