"use client";
import { useEffect, useState } from "react";

import Preloader from "../preloader";

const Preloader_template = ({ traingle_color }: any) => {
  const width = globalThis.innerWidth;

  const [loader, setloader] = useState(true);

  const [scale, setscale] = useState(1.2);
  const [preloader_img_opacity, setpreloader_img_opacity] = useState(0);
  const [beginlines, setbeginlines] = useState(true);

  useEffect(() => {
    document.body.classList.add("hide_now");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("hide_now");
    }, 4650);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloader(false);
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loader ? (
        <Preloader
          setscale={setscale}
          traingle_color={traingle_color}
          scale={scale}
          preloader_img_opacity={preloader_img_opacity}
          setpreloader_img_opacity={setpreloader_img_opacity}
          beginlines={beginlines}
          setbeginlines={setbeginlines}
        />
      ) : null}
    </>
  );
};

export default Preloader_template;
