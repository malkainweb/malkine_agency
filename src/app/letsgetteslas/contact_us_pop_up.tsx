"use client";
import Link from "next/link";
import Image from "next/image";

import exit from "../../../public/exit.png";
import { useEffect, useState } from "react";
import Script from "next/script";
import Success from "../component/contact/success";
import Go_high_level_success from "./go_high_level_success";
import { useSearchParams } from "next/navigation";

const Go_high_level_form = ({
  setgo_high_level_start_anime,
  // sethide_nav,
  submit,
  setsubmit,
  form_link,
  checkbookcall,
}: any) => {
  const [start_modal, setstart_modal] = useState(false);

  useEffect(() => {
    setstart_modal(true);
  }, []);

  const hidenow = () => {
    setstart_modal(false);

    setTimeout(() => {
      setgo_high_level_start_anime(false);
    }, 700);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(start_modal);
  }, [start_modal]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {" "}
      {/* mobile nav  */}
      <div
        className={`z-[20000] w-full h-full overflow-hidden px-[1.5%] bg-black gap-[1vw] sm:gap-[2.5vw] pt-[0.55vw] fixed top-0 flex flex-col justify-end items-center ${
          start_modal ? "backdrop-blur-xl bg-opacity-[70%]" : "bg-opacity-0"
        }`}
        style={{ transition: "0.5s ease" }}
      >
        {!submit && (
          <button
            onClick={hidenow}
            style={{ transition: "0.5s ease" }}
            className={`h-[8%] absolute top-[1vw] right-[1vw] w-fit  cursor-pointer flex justify-center ${
              start_modal ? "opacity-[70%]" : "opacity-0"
            } items-center`}
          >
            <Image src={exit} alt="Exit" className="w-fit h-[90%] " />
          </button>
        )}

        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            transition: "0.5s ease",
            backgroundColor: submit ? "#1A1A1A" : "",
            opacity: start_modal ? 1 : 0,
          }}
          className={`sm:w-full w-[50vw] bg-white h-[90%]   border-white border-x-[0.2vw] border-t-[0.2vw] sm:border-x-[1.1vw] sm:border-t-[1.1vw]  overflow-hidden relative ${
            start_modal ? "translate-y-0" : "translate-y-[0%]"
          } rounded-t-[2vw] sm:rounded-t-[7vw] gap-[1.8rem]`}
        >
          {isLoading && !submit && <div className=" loader"></div>}
          {/* Go High Level Form */}

          {!submit && (
            <>
              {" "}
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${form_link}`}
                style={{
                  width: "100%",
                  height: "100%",
                  boxShadow: "none",
                  //   border: "none",
                  borderRadius: "3px",
                }}
                // className="border2 h-[40rem] max-h-[90%] "
                id={`inline-${form_link}`}
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Cameo contact form"
                // data-height="1200"
                data-layout-iframe-id={`inline-${form_link}`}
                data-form-id={form_link}
                title="Cameo contact form"
                onLoad={() => {
                  setIsLoading(false);
                  console.log("this has loaded");
                }}
              />
            </>
          )}

          {submit && <Go_high_level_success checkbookcall={checkbookcall} />}
        </div>
      </div>
      {/* External script */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="beforeInteractive"
      />
    </>
  );
};

export default Go_high_level_form;
