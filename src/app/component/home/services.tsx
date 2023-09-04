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
      des: "Software Design & Development",
    },
    {
      class: 3,
      des: "Ecommerce Website Design & Development",
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

  const [example, setexample] = useState("sm:sticky");

  const width = globalThis.innerWidth;

  const new_width = width * 4.7;

  const end_width = new_width + width * 3.5;

  const mob_new_width = width * 12.9;

  const mob_end_width = mob_new_width + width * 2;

  const { scrollY } = useScroll();

  const scroll_lever = useTransform(
    scrollY,
    // Map x from these values:
    [
      width >= 651 ? new_width : mob_new_width,
      width >= 651 ? end_width : mob_end_width,
    ],

    // Into these values:
    [0, 11],
  );

  useMotionValueEvent(scroll_lever, "change", (latest) => {
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
      // if (latest <= 0.1) {
      //   setexample("sm:sticky");
      // }
      // if (latest >= 0 && latest <= 9) {
      //   setexample("sm:fixed");
      // }

      if (latest >= 0 && latest <= 1) {
        setcheck_num(1);
        console.log("dkdidi");
      }
      if (latest >= 1 && latest <= 2) {
        setcheck_num(2);
      }
      if (latest >= 2 && latest <= 3) {
        setcheck_num(3);
      }
      if (latest >= 3 && latest <= 4) {
        setcheck_num(4);
      }
      if (latest >= 4 && latest <= 5) {
        setcheck_num(5);
      }
      if (latest >= 5 && latest <= 6) {
        setcheck_num(6);
      }
      if (latest >= 6 && latest <= 7) {
        setcheck_num(7);
      }
      if (latest >= 7 && latest <= 8) {
        setcheck_num(8);
      }
      if (latest >= 8 && latest <= 9) {
        setcheck_num(9);
      }
      if (latest >= 9 && latest <= 10) {
      }
      if (latest >= 10) {
      }

      if (latest >= 10.2) {
      }
    }
  });

  return (
    <div className="w-full bg-black pb-[2vw] pt-[7vw]  h-[300vw] sm:h-[290vw] p_r flex flex-col sm:gap-[0vw] gap-[2vw] relative ">
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
          We apply our knowledge of complex digital solutions to help <br />{" "}
          real people solve real problems. From smart design to strategic <br />
          programming, we employ technology as a medium for <br />
          advancing your business and making human connections.
        </p>
      </div>

      {/* second div */}
      <div
        className={`w-full h-[32vw] sm:h-[100vh] z-[20] items-end ${example}  top-[10vw] sm:top-[0vw] left-0  flex `}
        style={{ overflow: "clip" }}
      >
        {/* first relative box */}
        <div
          className="absolute top-0 left-0 h-[13vw] sm:h-[46vh]   w-full  bg-gradient-to-b from-[black] z-[20]"
          style={{ overflow: "hidden" }}
        ></div>
        {/* second relative box */}
        <div
          className="absolute bottom-0 left-0 h-[13vw] sm:h-[46vh]   w-full  bg-gradient-to-t from-[black] z-[20]"
          style={{ overflow: "hidden" }}
        ></div>
      </div>
      {/* <div className="absolute top-[13vw]  left-0 h-[6vw]  w-full text-black bg-[red]"></div> */}

      {/* the normaltext animation */}
      <div
        className={`w-full h-[19vw] sm:h-[56vw] sm:absolute sm:top-[100vw] sm:left-0  flex flex-wrap justify-start sm:gap-[7vh] ${des_translate} transition duration-[1s] z-[10]`}
      >
        {service_arr.map((e: any, index: any) => {
          return (
            <p
              key={index}
              className={`w-full text-[4.2vw] sm:text-center sm:text-[6vw] text-center sm:font-[600] h-[6vw]   flex justify-center transition duration-[0.1s] items-center font-[helvetica] text-[${
                e.class == check_num ? "#D01717" : "white"
              }] `}
            >
              {e.des}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
