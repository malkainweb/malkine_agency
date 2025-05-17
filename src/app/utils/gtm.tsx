import { sendGTMEvent } from "@next/third-parties/google";

export const GoogleTrack = (name: string, value?: string) => {
  sendGTMEvent({ event: name, value });
  window.fbq?.("track", name, { value });
};
