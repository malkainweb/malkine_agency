"use client";

import { AnyCnameRecord } from "dns";
import React from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Calendy = ({ text_color }: any) => {
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
      console.log("Date and time selected");
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

      console.log("Booking.. successful");
    },
  });
  return (
    <div
      id="calendy"
      className="w-full flex flex-col items-center mt-[6vw] sm:my-[4vw] sm:gap-[6vw] gap-[1vw] "
    >
      <h3
        style={{
          color: text_color,
        }}
        className="font_helvetica text-white text-[5vw] sm:text-[7vw] text-center"
      >
        Let{"'"}s Get Started
      </h3>
      <div className="Calendy w-full overflow-hidden  sm:rounded-[5vw]   sm:w-[95%]">
        <InlineWidget
          url="https://calendly.com/emmanuel-malkaindesigns/malkain-health-clone"
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
