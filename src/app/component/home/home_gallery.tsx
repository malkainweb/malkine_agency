"use client";

import React from "react";
import Image from "next/image";

import home_gallery from "../../../../public/home/home_gallery.webp";

const Home_gallery = () => {
  return (
    <>
      <div className="w-full h-auto py-[50px] relative bg-white ">
        <Image
          src={home_gallery}
          alt="gallery"
          className="abosulute w-full h-full top-0 right-[0]"
        />
        <div className="w-full h-[700px] bg-[#FAFAFA]  p_r"></div>
      </div>
    </>
  );
};

export default Home_gallery;
