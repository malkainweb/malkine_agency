"use client";
import { useState } from "react";

const Services = () => {
  const [service_arr, setservice_arr] = useState([
    {
      class: "active1",
      des: "Website & Platform Design",
    },

    {
      class: "active2",
      des: "Ecommerce Website Design & Development",
    },
    {
      class: "active3",
      des: "Software Design & Development",
    },
    {
      class: "active4",
      des: "User Management Systems",
    },
    {
      class: "active5",
      des: "Custom API Development",
    },
    {
      class: "active6",
      des: "Backend System Development",
    },
    {
      class: "active7",
      des: "Web/Mobile App Development",
    },
    {
      class: "active8",
      des: "UI/UX For Web Mobile Apps",
    },
    {
      class: "active9",
      des: "UI/UX For Websites & Platforms",
    },
  ]);
  return (
    <div className="w-full bg-black pb-[2vw] pt-[7vw]  p_r flex flex-col gap-[6vw] sm:border2">
      {/* first div */}
      <div className="w-full flex justify-between items-center sm:border2 h-auto text-white">
        <div className="flex flex-col gap-[3vw] sm:border2 font-[helvetica] ">
          <p className="text-[#D01717] text-[1.6vw]  font-bold">Services</p>
          <h3 className=" text-[4vw]  font-[500]">Services we offer</h3>
        </div>
        <p className="text-[1.3vw] ">
          Lorem ipsum dolor sit amet consectetur. Elit dui nulla gravida <br />
          volutpat eget tortor proin. Posuere porttitor sed erat quisque. <br />{" "}
          Donec quisque orci vestibulum suspendisse auctor. Amet <br />{" "}
          facilisis elementum imperdiet{" "}
        </p>
      </div>

      {/* second div */}
      <div className="w-full h-[32vw] sm:border2 items-end relative flex overflow-hidden ">
        {/* first relative box */}
        <div className="absolute top-0 left-0 h-[13vw] sm:border2 w-full  bg-gradient-to-b from-[black] z-[20]"></div>
        {/* second relative box */}
        <div className="absolute bottom-0 left-0 h-[13vw] sm:border2 w-full  bg-gradient-to-t from-[black] z-[20]"></div>
        {/* <div className="absolute top-[13vw] sm:border2 left-0 h-[6vw] sm:border2 w-full text-black bg-[red]"></div> */}

        {/* the normaltext animation */}
        <div className="w-full h-[19vw] sm:border2 flex flex-wrap justify-start home_services z-[10]">
          {service_arr.map((e: any, index: any) => {
            return (
              <p
                key={index}
                className={`w-full text-[4.2vw] h-[6vw] flex justify-center items-center font-[helvetica] text-white ${e.class}`}
              >
                {e.des}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
