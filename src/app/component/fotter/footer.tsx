"use client ";

import Image from "next/image";
import React from "react";
import canada_loca from "../../../../public/fotter/canada_loca.webp";
import usa_loca from "../../../../public/fotter/usa_loca.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-auto rounded-t-[70.3px] w-full bg-[#080808]">
        <div className="w-full h-auto   px-[40px]  py-[40px] flex flex-col gap-[30px]">
          <p className="text-[18px] inter text-[#E9E9E9]  font-[400]">
            We are the creative superheroes ready to <br />
            revolutionize your brand and propel it to <br />
            unparalleled heights.
          </p>
          {/* the second part of the footer */}
          <div className="w-full  h-auto flex justify-between  items-center ">
            {/* locations */}
            <div className="  flex flex-col  h-auto gap-[25px] w-full inter">
              <p className="inter font-[500] text-[24px] capitalize text-white">
                Our Locations
              </p>
              {/* now actual locations */}
              <div className="w-auto h-auto flex gap-[32px] justify-start items-end text-[14px]">
                <div className="w-[137px] h-auto">
                  <Image
                    placeholder="blur"
                    src={canada_loca}
                    alt="canada location"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[1px] h-[77px] bg-[#838383]"></div>
                <div className="flex flex-col gap-[5px]">
                  <p className="inter text-[18px] font-[700] capitalize text-white">
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
              <div className="w-auto h-auto flex gap-[32px] justify-start items-end text-[14px]">
                <div className="w-[137px] h-auto">
                  <Image
                    placeholder="blur"
                    src={usa_loca}
                    alt="canada location"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-[1px] h-[77px] bg-[#838383]"></div>
                <div className="flex flex-col gap-[5px]">
                  <p className="inter text-[18px] font-[700] capitalize text-white">
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
              <div className="flex flex-col gap-[10px] mr-[80px] w-full  h-auto  text-[#E4E4E4] text-[14px] font-[400]">
                <p className="text-[20px] text-white nova font-[700]">
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
                <div className="h-full w-full gap-[40px]  flex justify-between">
                  <div className="flex flex-col gap-[10px] w-full h-auto  text-[#E4E4E4] text-[14px] font-[400]">
                    <p className="text-[20px] text-white nova font-[700]">
                      Mail Us
                    </p>
                    <Link href="#" className="hover:text-white">
                      support@malkain.com
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[10px] min-w-fit h-auto  text-[#E4E4E4] text-[14px] font-[400]">
                    <p className="text-[20px] w-full text-white nova font-[700] text-center">
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
                  <button className="nova  text-[16px] font[900]text-white rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
                    Work with us <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383]"></div>
        {/* the copyright section */}
        <div className="w-full h-[32px]  px-[40px]  py-[40px] flex justify-between items-center ">
          <p className="text-[#FFFFFF] inter font-[400] text-[12.32px]">
            2023 Malkain. All right reserved.
          </p>

          <div className="text-white capitalize text-[12.32px] flex gap-[21px]">
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
