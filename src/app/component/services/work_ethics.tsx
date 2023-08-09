"use client";

import React from "react";

const Work_ethics = () => {
  return (
    <>
      <div className="w-full h-auto p_r pt-[5.3vw] pb-[6.7vw] flex flex-col gap-[6.7vw] ">
        <div className="w-full flex justify-between gap-[81px]">
          <h1 className="w-full  text-[2.3vw] text-center font-[500]">
            WORK ETHICS
          </h1>

          <p className="text-[1.4vw] w-fit font-[400]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            sed excepturi sunt deserunt itaque ducimus reiciendis commodi,
            quidem dolores nesciunt Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat, consectetur.
          </p>

          <p className="text-[1.4vw] w-fit font-[400]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            sed excepturi sunt deserunt itaque ducimus reiciendis commodi,
            quidem dolores nesciunt Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat, consectetur.
          </p>
        </div>

        {/* the number of products display */}
        <div className="w-full  flex h-auto">
          <div className="h-[18.3vw] relative w-full flex justify-center  px-[35px]  flex-col capitalize">
            {/* absolute items */}
            <div className="w-[80%] h-[0.07vw] bg-black absolute top-0 left-[10%] text-center"></div>
            <div className="w-[0.07vw] h-[85%] bg-black absolute right-0 bottom-0"></div>
            <p className="nova font-[900] text-[2.7vw]">232</p>
            <p className="text-[1.7vw] font-[400] inter italic ">
              products <br />
              built
            </p>
          </div>
          <div className="h-[18.3vw] relative w-full flex justify-center  px-[35px]  flex-col capitalize">
            {/* absolute items */}
            <div className="w-[80%] h-[0.07vw] bg-black absolute top-0 left-[10%] text-center"></div>
            <div className="w-[0.07vw] h-[85%] bg-black absolute right-0 bottom-0"></div>
            <p className="nova font-[900] text-[2.7vw]">34</p>
            <p className="text-[1.7vw] font-[400] inter italic ">
              products <br />
              deployed
            </p>
          </div>
          <div className="h-[18.3vw] relative w-full flex justify-center  px-[35px]  flex-col capitalize">
            {/* absolute items */}
            <div className="w-[80%] h-[0.07vw] bg-black absolute top-0 left-[10%] text-center"></div>
            <div className="w-[0.07vw] h-[85%] bg-black absolute right-0 bottom-0"></div>
            <p className="nova font-[900] text-[2.7vw]">89</p>
            <p className="text-[1.7vw] font-[400] inter italic ">
              apps <br />
              built
            </p>
          </div>
          <div className="h-[18.3vw] relative w-full flex justify-center  px-[35px]  flex-col capitalize">
            {/* absolute items */}
            <div className="w-[80%] h-[0.07vw] bg-black absolute top-0 left-[10%] text-center"></div>

            <p className="nova font-[900] text-[2.7vw]">212</p>
            <p className="text-[1.7vw] font-[400] inter italic ">
              redesigned <br />
              projects
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work_ethics;
