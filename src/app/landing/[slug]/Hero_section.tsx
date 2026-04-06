"use client";

import { SFProDisplay_medium } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";

const START_FRAME = 1;
const END_FRAME = 242;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;
const BATCH_SIZE = 20; // load this many at a time

const getFrameSrc = (index: number) =>
  `/malkain_landing_page/frames3/frame_${String(index).padStart(4, "0")}.jpg`;

const Landing_Hero_section = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bitmapsRef = useRef<(ImageBitmap | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const loadedCountRef = useRef(0);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const bitmap = bitmapsRef.current[index];
    if (!canvas || !bitmap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (canvas.width !== bitmap.width) {
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0);
  };

  const getCurrentIndex = () => {
    const container = containerRef.current;
    if (!container) return 0;
    const rect = container.getBoundingClientRect();
    const containerHeight = container.offsetHeight;
    const screenHeight = window.screen.height;
    const progress = Math.max(
      0,
      Math.min(1, -rect.top / (containerHeight - screenHeight))
    );
    return Math.min(Math.floor(progress * TOTAL_FRAMES), TOTAL_FRAMES - 1);
  };

  const loadFrame = async (frameNumber: number): Promise<void> => {
    const arrayIndex = frameNumber - START_FRAME;
    if (bitmapsRef.current[arrayIndex]) return;

    return new Promise((resolve) => {
      const img = new window.Image();
      img.src = getFrameSrc(frameNumber);
      img.onload = async () => {
        try {
          const bitmap = await createImageBitmap(img);
          bitmapsRef.current[arrayIndex] = bitmap;
        } catch {
          // fallback: store the img itself (Safari older versions)
          bitmapsRef.current[arrayIndex] = img as any;
        }

        loadedCountRef.current++;

        if (arrayIndex === 0) {
          setFirstFrameReady(true);
          drawFrame(0);
        }

        if (loadedCountRef.current === TOTAL_FRAMES) {
          setAllLoaded(true);
          drawFrame(getCurrentIndex());
        }

        resolve();
      };
      img.onerror = () => resolve(); // don't block batch on error
    });
  };

  // Load frames in priority batches
  useEffect(() => {
    const loadAll = async () => {
      // Batch 1: first frame immediately
      await loadFrame(START_FRAME);

      // Batch 2: first BATCH_SIZE frames
      const firstBatch: Promise<void>[] = [];
      for (
        let i = START_FRAME + 1;
        i <= Math.min(START_FRAME + BATCH_SIZE, END_FRAME);
        i++
      ) {
        firstBatch.push(loadFrame(i));
      }
      await Promise.all(firstBatch);

      // Remaining: load rest in parallel batches
      for (
        let i = START_FRAME + BATCH_SIZE + 1;
        i <= END_FRAME;
        i += BATCH_SIZE
      ) {
        const batch: Promise<void>[] = [];
        for (let j = i; j < Math.min(i + BATCH_SIZE, END_FRAME + 1); j++) {
          batch.push(loadFrame(j));
        }
        await Promise.all(batch);
      }
    };

    loadAll();
  }, []);

  // Scroll scrubbing
  useEffect(() => {
    if (!firstFrameReady) return;

    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const index = getCurrentIndex();
        // Only draw if that frame is loaded
        if (bitmapsRef.current[index]) {
          drawFrame(index);
        } else {
          // Find nearest loaded frame going backwards
          for (let i = index - 1; i >= 0; i--) {
            if (bitmapsRef.current[i]) {
              drawFrame(i);
              break;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [firstFrameReady]);

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
          {!firstFrameReady && (
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
