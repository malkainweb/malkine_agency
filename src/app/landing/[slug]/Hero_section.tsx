"use client";

import { NeueHaasDisplay_medium, SFProDisplay_medium } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";

const START_FRAME = 1;
const END_FRAME = 207;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1; // 207 frames

const getFrameSrc = (index: number) =>
  `/malkain_landing_page/frames3/frame_${String(index).padStart(4, "0")}.jpg`;

const Landing_Hero_section = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const frame = framesRef.current[index];
    if (!canvas || !frame) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Only set dimensions once — setting them clears the canvas
    if (canvas.width !== frame.naturalWidth) {
      canvas.width = frame.naturalWidth;
      canvas.height = frame.naturalHeight;
    }

    ctx.drawImage(frame, 0, 0);
  };

  // Preload all frames
  useEffect(() => {
    const frames: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = START_FRAME; i <= END_FRAME; i++) {
      const img = new window.Image();
      img.src = getFrameSrc(i);

      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setAllLoaded(true);
          // Draw correct frame based on current scroll position
          const container = containerRef.current;
          if (!container) return;
          const rect = container.getBoundingClientRect();
          const containerHeight = container.offsetHeight;
          const screenHeight = window.screen.height;
          const progress = Math.max(
            0,
            Math.min(1, -rect.top / (containerHeight - screenHeight))
          );
          const index = Math.min(
            Math.floor(progress * TOTAL_FRAMES),
            TOTAL_FRAMES - 1
          );
          drawFrame(index);
        }
      };

      frames.push(img);
    }

    framesRef.current = frames;
  }, []);

  // Scroll scrubbing
  useEffect(() => {
    if (!allLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const screenHeight = window.screen.height;

        const progress = Math.max(
          0,
          Math.min(1, -rect.top / (containerHeight - screenHeight))
        );

        const index = Math.min(
          Math.floor(progress * TOTAL_FRAMES),
          TOTAL_FRAMES - 1
        );
        drawFrame(index);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [allLoaded]);

  return (
    <>
      <div
        ref={containerRef}
        className="hero-container w-full flex flex-col justify-end overflow-clip gap-6 bg-white relative text-white"
      >
        <h1
          className={`text-black/90 w-full text-center mx-auto ${SFProDisplay_medium.className} text-4xl absolute top-32 z-10`}
        >
          We build conversion optimized E-Commerce{" "}
          <span className="text-[#EA1D2F]">Websites</span>
        </h1>

        <div className="hero-sticky flex items-center bg-white justify-center">
          {!allLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader" />
            </div>
          )}
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Landing_Hero_section;
