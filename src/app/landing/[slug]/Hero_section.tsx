"use client";

import {
  NeueHaasDisplay_medium,
  NeueHaasDisplay_roman,
} from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const START_FRAME = 36;
const END_FRAME = 70;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1; // 35 frames

const getFrameSrc = (index: number) =>
  `/malkain_landing_page/frames2/frame_${String(index).padStart(4, "0")}.jpg`;

const Landing_Hero_section = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [vh, setVh] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.62 1", "1 1"],
  });

  // Lock viewport height on mount
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const frame = framesRef.current[index];
    if (!canvas || !frame) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = frame.naturalWidth;
    canvas.height = frame.naturalHeight;
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
          const currentProgress = scrollYProgress.get();
          const index = Math.min(
            Math.floor(currentProgress * TOTAL_FRAMES),
            TOTAL_FRAMES - 1
          );
          drawFrame(index);
        }
      };

      frames.push(img);
    }

    framesRef.current = frames;
  }, []);

  // Scrub frames on scroll
  useEffect(() => {
    if (!allLoaded) return;

    let rafId: number;

    const unsubscribe = scrollYProgress.on("change", (v) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const index = Math.min(Math.floor(v * TOTAL_FRAMES), TOTAL_FRAMES - 1);
        drawFrame(index);
      });
    });

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafId);
    };
  }, [scrollYProgress, allLoaded]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full flex flex-col justify-end overflow-clip gap-6 bg-white relative h-[160vh] text-white"
      >
        <h1
          className={`text-black/90 w-full text-center mx-auto ${NeueHaasDisplay_medium.className} text-4xl absolute top-32 z-10`}
        >
          We build CRO <br /> E-Commerce{" "}
          <span className="text-[#EA1D2F]">Websites</span>
        </h1>

        <div
          // style={{ height: vh ? `${vh}px` : "100dvh" }}
          className=" bottom-0  h-screen sticky flex items-center bg-white justify-center"
        >
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
