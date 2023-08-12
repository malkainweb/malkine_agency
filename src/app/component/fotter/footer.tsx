"use client ";

import Image from "next/image";
import React from "react";
import canada_loca from "../../../../public/fotter/canada_loca.webp";
import usa_loca from "../../../../public/fotter/usa_loca.webp";
import usa_loca_red from "../../../../public/fotter/usa_loca_red.webp";
import mob_foot from "../../../../public/fotter/foot_1.webp";
import mob_foot1 from "../../../../public/fotter/foot_2.webp";
import canada_loca_red from "../../../../public/fotter/canada_loca_red.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-auto rounded-t-[4.8vw] w-full  bg-[#080808] ">
        <div className="w-full h-auto   px-[2.7vw]  py-[2.7vw] flex flex-col gap-[2vw]">
          <p className="text-[1.2vw] sm:text-[4vw] inter text-[#E9E9E9] sm:py-[2vw]  font-[400] text-opacity-[80%]">
            We are the creative superheroes ready to <br />
            revolutionize your brand and propel it to <br />
            unparalleled heights.
          </p>
          <button className="nova hidden sm:block  text-[3vw] font[900]  rounded-[39px] px-[15vw] w-fit py-[4vw] bg-[#D01717] text-white hover:bg-[#920808]">
            Work with us <i className="bi bi-arrow-right"></i>
          </button>

          {/* the second part of the footer */}
          <div className="w-full  h-auto flex justify-between  items-center  sm:flex-col  ">
            {/* locations */}
            <div className=" sm:order-2 flex flex-col   sm:py-[10vw]  h-auto gap-[1.7vw] w-full inter sm:gap-[10vw]">
              <p className="inter font-[500] sm:text-[4vw] text-[1.6vw] capitalize text-white">
                Our Locations
              </p>
              {/* now actual locations */}
              <div className="w-auto h-auto    flex gap-[2.13vw] justify-start items-end text-[0.93vw] sm:text-[3vw] sm:mr-0 sm:justify-between">
                <div className="w-[9.1vw] h-[8vw] sm:w-[40vw]  relative ">
                  <Image
                    priority
                    src={canada_loca}
                    alt="canada location"
                    className="w-full h-fit sm:hidden absolute z-[40] bottom-0 left-0 "
                  />
                  <Image
                    priority
                    src={mob_foot}
                    alt="canada location"
                    className="w-full h-fit hidden sm:block absolute z-[40] bottom-0 left-0 "
                  />
                  <Image
                    priority
                    src={canada_loca_red}
                    alt="canada location"
                    className="w-full h-fit sm:hidden transistion opacity-0 duration-[0.7s] hover:opacity-[1] absolute z-[50] bottom-0 left-0"
                  />
                </div>
                <div className="w-[0.07vw] h-[5.13vw] sm:h-[15vw] bg-[#838383] sm:hidden"></div>
                <div className="flex flex-col gap-[0.3vw] sm:text-[2.5vw] sm:text-end">
                  <p className="inter text-[1.2vw] sm:text-[3.25vw] font-[700] capitalize text-white">
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
              <div className="w-auto h-auto flex gap-[2.13vw] justify-start sm:justify-between items-end text-[0.93vw]">
                <div className="w-[9.1vw] h-[8vw] sm:w-[40vw]  relative">
                  <Image
                    priority
                    src={usa_loca}
                    alt="canada location"
                    className="w-full h-fit absolute sm:hidden z-[40] bottom-0 left-0"
                  />
                  {/* mobile image */}
                  <Image
                    priority
                    src={mob_foot1}
                    alt="canada location"
                    className="w-full h-fit hidden sm:block absolute z-[40] bottom-0 left-0 "
                  />

                  {/* destip image */}
                  <Image
                    priority
                    src={usa_loca_red}
                    alt="canada location"
                    className="w-full h-fit sm:hidden absolute bottom-[-0.3vw] transistion  opacity-0 duration-[0.7s] hover:opacity-[1] z-[50] bottom-0 left-[0.07vw]
"
                  />
                </div>
                <div className="w-[0.07vw] h-[5.13vw] sm:h-[15vw] bg-[#838383] sm:hidden"></div>
                <div className="flex flex-col gap-[0.3vw] sm:text-[2.5vw] sm:text-end">
                  <p className="inter text-[1.2vw] sm:text-[3.25vw] font-[700] capitalize text-white">
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

            <div className=" sm:order-1 sm:my-[10vw]  p-[28.15px] sm:p-[4vw] min-w-fit  sm:w-full rounded-[2.6vw] sm:rounded-[3.5vw] bg-[#121212]  flex justify-between   capitalize  ">
              <div className="flex flex-col gap-[10px] sm:gap-[2.25vw] mr-[5.3vw] w-full sm:w-[35vw]   h-auto  text-[#E4E4E4] text-[0.93vw] sm:text-[3vw]  font-[400]">
                <p className="text-[1.3vw] sm:text-[3.5vw] text-white nova font-[700]">
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
              <div className="min-w-fit sm:w-full  flex flex-col justify-between items-end   ">
                <div className="h-full w-full gap-[2.7vw]  flex justify-between">
                  <div className="flex flex-col gap-[10px] sm:gap-[2.25vw] w-full h-auto  text-[#E4E4E4] text-[0.93vw] sm:text-[3vw] sm:mr-0 font-[400]">
                    <p className="text-[1.3vw] sm:text-[3.5vw] text-white nova font-[700]">
                      Mail Us
                    </p>
                    <Link href="#" className="hover:text-white">
                      support@malkain.com
                    </Link>
                  </div>
                  <div className="flex flex-col gap-[10px] sm:gap-[2.25vw] min-w-fit h-auto  text-[#E4E4E4] text-[0.93vw] sm:text-[3vw] sm:mr-0 font-[400]">
                    <p className="text-[1.3vw] sm:text-[3.5vw] w-full text-white nova font-[700] text-center">
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
                  <button className="nova  text-[1.1vw] font[900] sm:hidden rounded-[39px] px-[50px] py-[16px] bg-[#D01717] text-white hover:bg-[#920808]">
                    Work with us <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.03vw] bg-[#838383]"></div>
        {/* the copyright section */}
        <div className="w-full h-[2.13vw] sm:h-auto sm:flex-col sm:gap-[4vw] px-[2.7vw]  py-[2.7vw] flex justify-between items-center sm:text-opacity-[60%]">
          <p className="text-[#FFFFFF] sm:text-opacity-[60%] inter font-[400] text-[0.821vw] sm:text-[3vw] ">
            2023 Malkain. All right reserved.
          </p>

          <div className="text-white capitalize text-[0.821vw] sm:text-[3vw] sm:text-opacity-[60%] flex gap-[1.4vw] sm:gap-[4vw]">
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
