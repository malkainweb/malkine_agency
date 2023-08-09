"use client ";

import Image from "next/image";
import React from "react";
import canada_loca from "../../../../public/fotter/canada_loca.webp";
import usa_loca from "../../../../public/fotter/usa_loca.webp";
import usa_loca_red from "../../../../public/fotter/usa_loca_red.webp";
import canada_loca_red from "../../../../public/fotter/canada_loca_red.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-auto rounded-t-[4.8vw] w-full bg-[#080808]">
        <div className="w-full h-auto   px-[2.7vw]  py-[2.7vw] flex flex-col gap-[2vw]">
          <p className="text-[1.2vw] inter text-[#E9E9E9]  font-[400]">
            We are the creative superheroes ready to <br />
            revolutionize your brand and propel it to <br />
            unparalleled heights.
          </p>
          {/* the second part of the footer */}
          <div className="w-full  h-auto flex justify-between  items-center ">
            {/* locations */}
            <div className="  flex flex-col  h-auto gap-[1.7vw] w-full inter">
              <p className="inter font-[500] text-[1.6vw] capitalize text-white">
                Our Locations
              </p>
              {/* now actual locations */}
              <div className="w-auto h-auto   flex gap-[2.13vw] justify-start items-end text-[0.93vw]">
                <div className="w-[9.1vw] h-[8vw]  relative ">
                  <Image
                    priority
                    src={canada_loca}
                    alt="canada location"
                    className="w-full h-auto absolute z-[40] bottom-0 left-0 "
                  />
                  <Image
                    priority
                    src={canada_loca_red}
                    alt="canada location"
                    className="w-full h-auto transistion opacity-0 duration-[0.7s] hover:opacity-[1] absolute z-[50] bottom-0 left-0"
                  />
                </div>
                <div className="w-[0.07vw] h-[5.13vw] bg-[#838383]"></div>
                <div className="flex flex-col gap-[0.3vw]">
                  <p className="inter text-[1.2vw] font-[700] capitalize text-white">
                    canada
                  </p>
                  <p className="text-[white]">
                    <span className="text-[#838383]">Address</span> 32D
                    Greenwich avenue
                  </p>

                  <p className="text-[white]">
                    <span className="text-[#838383]">Telephone</span>+1(31) 323
                    233
                  </p>
                  <p className="text-[white]">
                    <span className="text-[#838383]">Email</span>{" "}
                    support@malkain.com
                  </p>
                </div>
              </div>
              <div className="w-auto h-auto flex gap-[2.13vw] justify-start items-end text-[0.93vw]">
                <div className="w-[9.1vw] h-[8vw]  relative h-auto">
                  <Image
                    priority
                    src={usa_loca}
                    alt="canada location"
                    className="w-full h-auto absolute  z-[40] bottom-0 left-0"
                  />
                  <Image
                    priority
                    src={usa_loca_red}
                    alt="canada location"
                    className="w-full h-auto absolute bottom-[-0.3vw] transistion  opacity-0 duration-[0.7s] hover:opacity-[1] z-[50] bottom-0 left-[0.07vw]
"
                  />
                </div>
                <div className="w-[0.07vw] h-[5.13vw] bg-[#838383]"></div>
                <div className="flex flex-col gap-[0.3vw]">
                  <p className="inter text-[1.2vw] font-[700] capitalize text-white">
                    USA
                  </p>
                  <p className="text-[white]">
                    <span className="text-[#838383]">Address</span> 32D
                    Greenwich avenue
                  </p>

                  <p className="text-[white]">
                    <span className="text-[#838383]">Telephone</span>+1(31) 323
                    233
                  </p>
                  <p className="text-[white]">
                    <span className="text-[#838383]">Email</span>{" "}
                    support@malkain.com
                  </p>
                </div>
              </div>
            </div>

            <div className=" p-[28.15px] min-w-fit  rounded-[35.19px] bg-[#121212]  flex justify-between   capitalize  ">
              <div className="flex flex-col gap-[10px] mr-[5.3vw] w-full  h-auto  text-[#E4E4E4] text-[0.93vw] font-[400]">
                <p className="text-[1.3vw] text-white nova font-[700]">
                  Discover
                </p>
                <Link href="#" className="hover:text-white">
                  home
                </Link>
                <Link href="#" className="hover:text-white">
                  our services
                </Link>
                <Link href="#" className="hover:text-white">
                  about us
                </Link>
                <Link href="#" className="hover:text-white">
                  portfolio
                </Link>
                <Link href="#" className="hover:text-white">
                  reviews
                </Link>
                <Link href="#" className="hover:text-white">
                  contact us
                </Link>
              </div>
              {/* mail us and folllow us section */}
              <div className="min-w-fit flex flex-col justify-between items-end   ">
                <div className="h-full w-full gap-[2.7vw]  flex justify-between">
                  <div className="flex flex-col gap-[10px] w-full h-auto  text-[#E4E4E4] text-[0.93vw] font-[400]">
                    <p className="text-[1.3vw] text-white nova font-[700]">
                      Mail Us
                    </p>
                    <Link href="#" className="hover:text-white">
                      support@malkain.com
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[10px] min-w-fit h-auto  text-[#E4E4E4] text-[0.93vw] font-[400]">
                    <p className="text-[1.3vw] w-full text-white nova font-[700] text-center">
                      Follow Us
                    </p>
                    <Link href="#" className="hover:text-white">
                      Instagram
                    </Link>
                    <Link href="#" className="hover:text-white">
                      Linkedin
                    </Link>
                    <Link href="#" className="hover:text-white">
                      Twitter
                    </Link>
                  </div>
                </div>
                {/* ctn button */}
                <div className="w-full h-auto flex justify-end">
                  <button className="nova  text-[1.1vw] font[900]text-white rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
                    Work with us <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.03vw] bg-[#838383]"></div>
        {/* the copyright section */}
        <div className="w-full h-[2.13vw]  px-[2.7vw]  py-[2.7vw] flex justify-between items-center ">
          <p className="text-[#FFFFFF] inter font-[400] text-[0.821vw]">
            2023 Malkain. All right reserved.
          </p>

          <div className="text-white capitalize text-[0.821vw] flex gap-[1.4vw]">
            <Link
              href="#"
              className="underline underline-offset-2  hover:text-[#cfcece]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="underline underline-offset-2  hover:text-[#cfcece]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="underline underline-offset-2  hover:text-[#cfcece]"
            >
              Cookies Settings
            </Link>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Footer;
