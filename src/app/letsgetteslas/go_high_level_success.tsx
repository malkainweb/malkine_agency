"use client";

import Image from "next/image";
import success from "../../../public/contact/success.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
const Go_high_level_success = ({
  checkbookcall,
  checkbooking,
  checkappointment,
}: any) => {
  const router = useRouter();

  useEffect(() => {
    // if (!checkbooking) return;

    const trackEventsAndRedirect = async () => {
      // Wait a moment to ensure events fire before redirecting
      setTimeout(() => {
        window.location.replace(
          "https://api.leadconnectorhq.com/widget/booking/Gl4Yoz2lum9ORHgGCn9E"
        );
      }, 1000); // Adjust timing if needed
    };

    if (checkbooking || checkbookcall) {
      trackEventsAndRedirect();
      return;
    } else {
      return;
    }
    // trackEventsAndRedirect();
  }, []);

  const shouldShowForm = !checkbookcall && !checkbooking;
  return (
    <>
      {/* JUST FOR THE PURPOSE OF KEEPING THE FOOTER FISWX WE IMPLEMENT THE DIV BELOW  */}
      <div className="   min-h-[60vw]">
        <motion.div className="w-full flex h-auto flex-col py-[6.7vw] justify-center items-center gap-[1.33vw] sm:gap-[10vw] sm:pb-[40vw]">
          <Image
            priority
            src={success}
            alt="sucees image"
            className="w-[6.7vw] h-fit sm:w-[20vw]"
          />
          <p className="text-2xl sm:leading-[6.5vw]  sm:text-[5vw] nova text-white text-center">
            {!shouldShowForm ? (
              <>
                {" "}
                Thank you for your submission! <br />
                You{"'"}ll be redirected to book a <br />
                call in just a few seconds.
              </>
            ) : (
              <>
                {" "}
                Thank You for your submission! <br /> We will contact you in 24
                hrs.
              </>
            )}
          </p>
          {shouldShowForm && (
            <Link
              href="/campaign"
              className="nova  text-[1.07vw] font[900] text-white rounded-[2.6vw] px-[3.8vw] py-[1.07vw] bg-[#D01717]  hover:bg-[#920808] sm:text-[4vw] sm:py-[3.5vw] sm:px-[11vw] sm:rounded-[9.75vw]"
            >
              Return to Home <i className="bi bi-arrow-right"></i>
            </Link>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Go_high_level_success;
