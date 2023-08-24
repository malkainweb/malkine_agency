"use client";
import { useState } from "react";
import {
  useTransform,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const Services = () => {
  const [service_arr, setservice_arr] = useState([
    {
      class: 1,
      des: "Website & Platform Design",
    },

    {
      class: 2,
      des: "Ecommerce Website Design & Development",
    },
    {
      class: 3,
      des: "Software Design & Development",
    },
    {
      class: 4,
      des: "User Management Systems",
    },
    {
      class: 5,
      des: "Custom API Development",
    },
    {
      class: 6,
      des: "Backend System Development",
    },
    {
      class: 7,
      des: "Web/Mobile App Development",
    },
    {
      class: 8,
      des: "UI/UX For Web Mobile Apps",
    },
    {
      class: 9,
      des: "UI/UX For Websites & Platforms",
    },
  ]);

  const [des_translate, setdes_translate] = useState("translate: 0vw 0vw;");

  const [check_num, setcheck_num] = useState(1);

  const width = globalThis.innerWidth;

  const new_width = width * 3.5;

  const mob_new_width = width * 7.3;

  const end_width = new_width + width * 0.8;

  const mob_end_width = mob_new_width + width * 1.5;

  const { scrollY } = useScroll();

  const scroll_lever = useTransform(
    scrollY,
    // Map x from these values:
    [
      width >= 651 ? new_width : mob_new_width,
      width >= 651 ? end_width : mob_end_width,
    ],

    // Into these values:
    [0, 10],
  );

  useMotionValueEvent(scroll_lever, "change", (latest) => {
    console.log(latest);

    if (width >= 651) {
      if (latest >= 0 && latest <= 1) {
        setdes_translate("translate-y-[0vw]");
        setcheck_num(1);
      }
      if (latest >= 1 && latest <= 2) {
        setdes_translate("translate-y-[-6vw]");
        setcheck_num(2);
      }
      if (latest >= 2 && latest <= 3) {
        setdes_translate("translate-y-[-12vw]");
        setcheck_num(3);
      }
      if (latest >= 3 && latest <= 4) {
        setdes_translate("translate-y-[-18vw]");
        setcheck_num(4);
      }
      if (latest >= 4 && latest <= 5) {
        setdes_translate("translate-y-[-24vw]");
        setcheck_num(5);
      }
      if (latest >= 5 && latest <= 6) {
        setdes_translate("translate-y-[-30vw]");
        setcheck_num(6);
      }
      if (latest >= 6 && latest <= 7) {
        setdes_translate("translate-y-[-36vw]");
        setcheck_num(7);
      }
      if (latest >= 7 && latest <= 8) {
        setdes_translate("translate-y-[-42vw]");
        setcheck_num(8);
      }
      if (latest >= 8 && latest <= 9) {
        setdes_translate("translate-y-[-48vw]");
        setcheck_num(9);
      }
    } else if (width <= 650) {
      if (latest >= 0 && latest <= 1) {
        setdes_translate("translate-y-[0vw]");
        setcheck_num(1);
      }
      if (latest >= 1 && latest <= 2) {
        setdes_translate("translate-y-[-10vw]");
        setcheck_num(2);
      }
      if (latest >= 2 && latest <= 3) {
        setdes_translate("translate-y-[-20vw]");
        setcheck_num(3);
      }
      if (latest >= 3 && latest <= 4) {
        setdes_translate("translate-y-[-30vw]");
        setcheck_num(4);
      }
      if (latest >= 4 && latest <= 5) {
        setdes_translate("translate-y-[-40vw]");
        setcheck_num(5);
      }
      if (latest >= 5 && latest <= 6) {
        setdes_translate("translate-y-[-50vw]");
        setcheck_num(6);
      }
      if (latest >= 6 && latest <= 7) {
        setdes_translate("translate-y-[-60vw]");
        setcheck_num(7);
      }
      if (latest >= 7 && latest <= 8) {
        setdes_translate("translate-y-[-70vw]");
        setcheck_num(8);
      }
      if (latest >= 8 && latest <= 9) {
        setdes_translate("translate-y-[-80vw]");
        setcheck_num(9);
      }
    }

    console.log(latest);
  });

  return (
    <div className="w-full bg-black pb-[2vw] pt-[7vw] h-[150vw] sm:h-[300vw] p_r flex flex-col gap-[6vw] ">
      {/* first div */}
      <div className="w-full flex sm:flex-col sm:gap-[4vw] sm:items-start justify-between items-center  h-auto text-white">
        <div className="flex flex-col gap-[3vw]  font-[helvetica] ">
          <p className="text-[#D01717] text-[1.6vw] sm:text-[3.5vw] font-bold">
            Services
          </p>
          <h3 className=" text-[4vw]  font-[500] sm:text-[6vw]">
            Services we offer
          </h3>
        </div>
        <p className="text-[1.3vw] sm:hidden">
          Lorem ipsum dolor sit amet consectetur. Elit dui nulla gravida <br />
          volutpat eget tortor proin. Posuere porttitor sed erat quisque. <br />{" "}
          Donec quisque orci vestibulum suspendisse auctor. Amet <br />{" "}
          facilisis elementum imperdiet{" "}
        </p>

        {/* destktop text */}
        <p className="sm:block hidden sm:text-[4vw] opacity-[60%]">
          Lorem ipsum dolor sit amet consectetur. Elit <br /> dui nulla gravida
          volutpat eget tortor proin. <br /> Posuere porttitor sed erat quisque.
          Donec <br />
          quisque orci vestibulum suspendisse auctor. <br /> Amet elementum
          facilisis imperdiet
        </p>
      </div>

      {/* second div */}
      <div
        className="w-full h-[32vw] sm:h-[76vw]  items-end sticky top-[10vw] sm:top-[40vw]  flex "
        style={{ overflow: "clip" }}
      >
        {/* first relative box */}
        <div className="absolute top-0 left-0 h-[13vw] sm:h-[33vw]  w-full  bg-gradient-to-b from-[black] z-[20]"></div>
        {/* second relative box */}
        <div className="absolute bottom-0 left-0 h-[13vw] sm:h-[33vw]  w-full  bg-gradient-to-t from-[black] z-[20]"></div>
        {/* <div className="absolute top-[13vw]  left-0 h-[6vw]  w-full text-black bg-[red]"></div> */}

        {/* the normaltext animation */}
        <div
          className={`w-full h-[19vw] sm:h-[43vw]  flex flex-wrap justify-start ${des_translate} transition duration-[1s] z-[10]`}
        >
          {service_arr.map((e: any, index: any) => {
            return (
              <p
                key={index}
                className={`w-full text-[4.2vw] sm:text-[4.3vw] h-[6vw] sm:h-[8vw] flex justify-center transition duration-[1s] items-center font-[helvetica] text-[${
                  e.class == check_num ? "#D01717" : "white"
                }] `}
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
