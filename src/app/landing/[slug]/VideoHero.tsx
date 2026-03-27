"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const VideoHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force full video download immediately
    video.preload = "auto";
    video.load();

    video.pause();

    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (!video.duration) return;
      video.currentTime = v * video.duration;
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    // tall container to give scroll room
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky video */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full h-full object-cover"
          playsInline
          muted
          preload="auto"
        />
      </div>
    </div>
  );
};

export default VideoHero;
