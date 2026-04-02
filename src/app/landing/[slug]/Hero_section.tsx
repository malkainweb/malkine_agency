"use client";

import { NeueHaasDisplay_roman } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const TOTAL_FRAMES = 48;

const getFrameSrc = (index: number) =>
  `/malkain_landing_page/frames/frame_${String(index).padStart(4, "0")}.jpg`;

const Landing_Hero_section = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [vh, setVh] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.5 1", "1 1"],
  });

  // Lock viewport height on mount
  useEffect(() => {
    setVh(window.innerHeight);
  }, []);

  // Preload all frames
  useEffect(() => {
    const frames: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = getFrameSrc(i);
      frames.push(img);
    }

    framesRef.current = frames;

    // Draw first frame once loaded
    frames[0].onload = () => {
      drawFrame(0);
    };
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

  // Scrub frames on scroll
  useEffect(() => {
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
  }, [scrollYProgress]);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full flex flex-col justify-end overflow-clip gap-6 relative h-[200vh] text-white"
      >
        <h1
          className={`text-white/50 w-full  text-center mx-auto ${NeueHaasDisplay_roman.className} inner-shadow-text text-4xl absolute top-32 z-10`}
        >
          We build CRO E-
          <br />
          Commerce <span className="text-[#EA1D2F]">Websites</span>
        </h1>

        <div
          style={{ height: vh ? `${vh}px` : "100dvh" }}
          className="sticky bottom-0 flex items-center justify-center bg-gradient-to-b from-[#021A49] to-[#0166B0]"
        >
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Landing_Hero_section;
