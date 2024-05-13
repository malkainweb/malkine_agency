"use client";

import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Calendy = () => {
  useCalendlyEventListener({
    // onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => {
      // console.log("onDateAndTimeSelected");
      // Track a "Lead" event with the Facebook Pixel
      window.fbq("track", "Calendy", {
        value: "Calendy Date and time selected", // the value of the lead (optional)
      });
      window.gtag("event", "Calendy ", {
        event_category: "Calendy",
        event_label: "Calendy Date and time selected",
      });
      console.log("done done done");
    },
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => {
      // console.log(e.data.payload);
      window.fbq("track", "Calendy success", {
        value: "Calendy booking successfull", // the value of the lead (optional)
      });
      window.gtag("event", "Calendy success", {
        event_category: "Calendy",
        event_label: "Calendy booking successfull",
      });
    },
  });
  return (
    <div className="w-full flex flex-col items-center mt-[6vw] sm:my-[4vw] sm:gap-[6vw] gap-[1vw] ">
      <h3 className="font_helvetica text-white text-[5vw] sm:text-[7vw] text-center">
        Let{"'"}s Get Started
      </h3>
      <div className="Calendy w-full    sm:w-[95%]">
        <InlineWidget
          url="https://calendly.com/emmanuel-malkaindesigns/malkainhealth"
          styles={{
            height: "1000px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Calendy;